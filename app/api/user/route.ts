import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { clerkId, email, name } = body;

  try {
    const existing = await prisma.user.findUnique({
      where: { clerkId },
    });

    let user;
    if (existing) {
      user = await prisma.user.update({
        where: { clerkId },
        data: { name, email },
      });
    } else {
      user = await prisma.user.create({
        data: {
          clerkId,
          balance: 100,
          name,
          email,
        },
      });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Failed to save user:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
