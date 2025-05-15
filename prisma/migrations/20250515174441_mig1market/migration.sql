/*
  Warnings:

  - Added the required column `Creator` to the `Prediction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MARKETSTATUS" AS ENUM ('OPEN', 'CLOSED', 'RESOLVED');

-- AlterTable
ALTER TABLE "Prediction" ADD COLUMN     "Creator" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Market" (
    "id" TEXT NOT NULL,
    "Question" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT,
    "status" "MARKETSTATUS" NOT NULL,
    "endsAt" TIMESTAMP(3),
    "startedon" TIMESTAMP(3) NOT NULL,
    "resolvedAt" TIMESTAMP(3),
    "creatorID" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Market_id_key" ON "Market"("id");

-- AddForeignKey
ALTER TABLE "Market" ADD CONSTRAINT "Market_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prediction" ADD CONSTRAINT "Prediction_Creator_fkey" FOREIGN KEY ("Creator") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
