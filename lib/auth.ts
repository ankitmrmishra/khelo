import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db";
import { Session, User, Account } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomSession extends Session {
  user: {
    email: string;
    name: string;
    image: string;
    uid?: string;
  };
}

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    // JWT callback for assigning user ID to token
    async jwt({
      token,
      account,
    }: {
      token: JWT;
      account: Account | null;
    }): Promise<JWT> {
      console.log("JWT callback - Token before:", token);

      // If the account exists (user is logging in for the first time)
      if (account) {
        const user = await db.user.findUnique({
          where: {
            username: token.email as string,
          },
        });

        if (user) {
          token.uid = user.id; // Assign the user ID to the token
        }
      }

      console.log("JWT callback - Token after:", token);
      return token;
    },

    // Session callback to pass the token.uid to session.user
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<CustomSession> {
      console.log("Session callback - Token:", token);

      // Assign token UID and name to the session object
      if (session.user) {
        (session.user as CustomSession["user"]).uid = token.uid as string;
        session.user.name = token.name as string;
      }

      console.log("Session callback - Session after assignment:", session);
      return session as CustomSession;
    },

    // Sign in callback to handle custom sign-in logic
    async signIn({
      user,
      account,
    }: {
      user: User;
      account: Account | null;
    }): Promise<boolean> {
      if (account?.provider === "google") {
        const email = user.email;

        if (!email) {
          return false; // Fail sign in if no email is found
        }

        // Log database user lookup
        let userDb = await db.user.findUnique({
          where: {
            username: email,
          },
        });

        console.log("SignIn callback - User found in DB:", userDb);

        // If the user doesn't exist, create a new user in the database
        if (!userDb) {
          userDb = await db.user.create({
            data: {
              username: email,
              profilePicture: user.image || "",
              provider: "Google",
              sub: account.providerAccountId,
            },
          });
          console.log("SignIn callback - New user created:", userDb);

          // Automatically create a new profile for the user
          await db.profile.create({
            data: {
              user: { connect: { id: userDb.id } },
              phoneNumber: "",
              location: "",
              latestOrganization: "",
              YearOfExperience: "",
              AboutMe: "",
              Skill: "",
              Education: "",
              Achievements: "",
            },
          });
          console.log(
            "SignIn callback - New profile created for user:",
            userDb.id
          );
        }

        return true; // Sign in successful
      }

      return false; // Only allow sign-in via Google
    },
  },
  // Add secret to ensure proper JWT encryption/decryption
  secret: process.env.NEXTAUTH_SECRET,
};
