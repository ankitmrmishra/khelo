import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
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
  try {
    const id = (await params).id;
    if (!id) {
      return NextResponse.json({ message: "Unauthorized id" }, { status: 401 });
    }
    const tradedetails = await prisma.trade.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(tradedetails, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = getAuth(req);
  console.log(clerkId, "this is user id ");

  if (!clerkId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const id = (await params).id;

    const body = await req.json();
    const { tradetype, tradeAmount } = body;
    if (!["YES", "NO"].includes(tradetype) || !tradeAmount || !tradetype) {
      return NextResponse.json({ message: "empty response" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found in DB" },
        { status: 404 }
      );
    }

    const market = await prisma.market.findUnique({
      where: {
        id: id,
      },
    });

    if (!market || market.status !== "OPEN") {
      return NextResponse.json(
        { message: "No market exist " },
        { status: 400 }
      );
    }

    // const marketUpdate = tradetype === "YES" ? `yesCount${id}` : `noCount${id}`;

    const traded = await prisma.trade.create({
      data: {
        UserID: user.id,
        TradeType: tradetype,
        time: new Date(),
        tradeAmount: tradeAmount,
        predictionId: id,
      },
    });

    const noreserveredis = await redis.get(`noCount${id}`);
    const noreserve = Number(noreserveredis ?? 0);
    const yesreserveredis = await redis.get(`yesCount${id}`);
    const yesreserve = Number(yesreserveredis ?? 0);
    const k = noreserve * yesreserve;
    if (tradetype === "YES") {
      const updatereserveforYes = yesreserve + tradeAmount;
      const updatereserveforno = k / updatereserveforYes;
      await redis.set(`yesCount${id}`, updatereserveforYes);
      await redis.set(`noCount${id}`, updatereserveforno);
    }
    if (tradetype === "NO") {
      const updatereserveforno = noreserve + tradeAmount;
      const updatereserveforyes = k / updatereserveforno;
      await redis.set(`yesCount${id}`, updatereserveforyes);
      await redis.set(`noCount${id}`, updatereserveforno);
    }

    return NextResponse.json({ traded }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
