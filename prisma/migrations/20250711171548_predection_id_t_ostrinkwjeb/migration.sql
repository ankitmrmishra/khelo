/*
  Warnings:

  - Added the required column `noreserve` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yesreserve` to the `Market` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Market" ADD COLUMN     "noreserve" INTEGER NOT NULL,
ADD COLUMN     "yesreserve" INTEGER NOT NULL;
