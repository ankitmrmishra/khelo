/*
  Warnings:

  - The values [RESOLVED] on the enum `MARKETSTATUS` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `resolvedAt` on the `Market` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `category` on table `Market` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endsAt` on table `Market` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MARKETSTATUS_new" AS ENUM ('OPEN', 'CLOSED');
ALTER TABLE "Market" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Market" ALTER COLUMN "status" TYPE "MARKETSTATUS_new" USING ("status"::text::"MARKETSTATUS_new");
ALTER TYPE "MARKETSTATUS" RENAME TO "MARKETSTATUS_old";
ALTER TYPE "MARKETSTATUS_new" RENAME TO "MARKETSTATUS";
DROP TYPE "MARKETSTATUS_old";
ALTER TABLE "Market" ALTER COLUMN "status" SET DEFAULT 'OPEN';
COMMIT;

-- AlterTable
ALTER TABLE "Market" DROP COLUMN "resolvedAt",
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "endsAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
