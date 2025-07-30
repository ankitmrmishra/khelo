import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
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
  { params }: { params: { id: string } }
) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: "Missing market id" }, { status: 400 });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  // Only allow these fields to be updated
  const allowedFields = [
    "status",
    "Question",
    "description",
    "category",
    "endsAt",
    "startedon",
  ] as const;
  type AllowedField = (typeof allowedFields)[number];
  const updatedata: Prisma.MarketUpdateInput = {};
  let hasValidField = false;
  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      (updatedata as any)[field] = body[field];
      hasValidField = true;
    }
  }

  if (!hasValidField) {
    return NextResponse.json(
      { success: false, error: "No valid fields to update" },
      { status: 400 }
    );
  }

  try {
    const updatemarket = await prisma.market.update({
      where: { id },
      data: updatedata,
    });
    return NextResponse.json({ success: true, updatemarket }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to update market" },
      { status: 500 }
    );
  }
}
