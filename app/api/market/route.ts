import prisma from "@/lib/prisma";
import { clerkClient, currentUser, getAuth } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized checkpoint 1" },
      { status: 401 }
    );
  }
  try {
    const { Question, description, category } = await req.json();

    if (!Question || !description || !category) {
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
      return NextResponse.json(
        { message: "Unauthorized ckp2" },
        { status: 401 }
      );
    }
    const role = user?.publicMetadata?.role;
    console.log(role);

    if (role !== "admin") {
      return NextResponse.json(
        { message: "Unauthorized ckp3" },
        { status: 401 }
      );
    }

    const now = new Date();
    const closeTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Add 24 hours

    /* checking here if the user is the ADMIN*/
    if (user.externalAccounts[0].emailAddress !== process.env.ADMIN) {
      return NextResponse.json(
        { message: "Unauthorized ckp4" },
        { status: 401 }
      );
    } else {
      await prisma.market.create({
        data: {
          Question,
          description,
          category,
          status: "OPEN",
          endsAt: closeTime,
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

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const markets = await prisma.market.findMany();
    return NextResponse.json({ markets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
