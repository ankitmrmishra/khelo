/*
  Warnings:

  - You are about to alter the column `noCount` on the `Market` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `yesCount` on the `Market` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Market" ALTER COLUMN "noCount" SET DATA TYPE INTEGER,
ALTER COLUMN "yesCount" SET DATA TYPE INTEGER;
