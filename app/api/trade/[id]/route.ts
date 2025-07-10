import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST({
  req,
  params,
}: {
  req: NextRequest;
  params: { id: string };
}) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const body = await req.json();
    const { tradetype, tradeAmount } = body;
    if (!tradetype) {
      return NextResponse.json({ message: "empty response" }, { status: 401 });
    }
    const now = new Date();
    const trade = await prisma.trade.findUnique({
      where: {
        id: id,
      },
    });
    if (trade) {
      await prisma.trade.upsert({
        create: {
          UserID: userId,
          TradeType: tradetype,
          time: now,
          tradeAmount: tradeAmount,
        },

        update: {
          TradeType: tradetype,
          time: now,
          tradeAmount: tradeAmount,
        },
        where: {
          id: id,
        },
      });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
