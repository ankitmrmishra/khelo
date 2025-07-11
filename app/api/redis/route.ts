import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  // Simulate a vote
  await redis.incrby("yesCount:abc123", 1);

  // Read it back
  const yesCount = await redis.get("yesCount:abc123");

  return NextResponse.json({ yesCount });
}
