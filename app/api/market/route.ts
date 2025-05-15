import prisma from "@/lib/prisma";
import { clerkClient, currentUser, getAuth } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const { Question, description } = await req.json();

    if (!Question || !description) {
      return NextResponse.json(
        { message: "All Fields Required" },
        { status: 401 }
      );
    }

    const user = await currentUser();
    /*
     checking if user is logged in or not
    
    */
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    /* checking here if the user is the ADMIN*/
    if (user.externalAccounts[0].emailAddress !== process.env.ADMIN) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } else {
      const newMarket = await prisma.market.create({
        data: {
          Question,
          description,
        },
      });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
