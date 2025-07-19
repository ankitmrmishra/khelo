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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized here " },
      { status: 401 }
    );
  }

  const id = (await params).id;
  if (!id) {
    return NextResponse.json({ message: "Unauthorized id" }, { status: 401 });
  }

  const body = await req.json();

  const updatedata: any = {};

  if (body.status) updatedata.status = body.status;

  if (Object.keys(updatedata).length === 0) {
    return NextResponse.json(
      { success: false, error: "No valid fields to update" },
      { status: 400 }
    );
  }

  try {
    const updatemarket = await prisma.market.update({
      where: {
        id: id,
      },
      data: updatedata,
    });

    return NextResponse.json({ success: true, updatemarket });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to update market" },
      { status: 500 }
    );
  }
}
