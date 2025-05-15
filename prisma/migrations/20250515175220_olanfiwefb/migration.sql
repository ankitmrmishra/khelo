/*
  Warnings:

  - You are about to drop the column `creatorID` on the `Market` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Market" DROP CONSTRAINT "Market_id_fkey";

-- AlterTable
ALTER TABLE "Market" DROP COLUMN "creatorID",
ALTER COLUMN "startedon" SET DEFAULT CURRENT_TIMESTAMP;
