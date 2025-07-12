import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const marketdetails = await prisma.market.findUnique({
      where: {
        id: id,
      },
      include: {
        predections: true,
      },
    });
    if (!marketdetails) {
      return NextResponse.json(
        { message: "No market found serrrr" },
        { status: 401 }
      );
    }
    return NextResponse.json({ marketdetails }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
