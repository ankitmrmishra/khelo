import { redis } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const yesCount = await redis.get(`yesCount${id}`);
  const noCount = await redis.get(`noCount${id}`);

  return NextResponse.json({
    yesCount: Number(yesCount ?? 0),
    noCount: Number(noCount ?? 0),
  });
}
