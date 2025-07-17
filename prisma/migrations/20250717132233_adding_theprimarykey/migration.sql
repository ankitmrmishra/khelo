/*
  Warnings:

  - Added the required column `sharesbought` to the `Trade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Market" ADD CONSTRAINT "Market_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Trade" ADD COLUMN     "sharesbought" INTEGER NOT NULL,
ADD CONSTRAINT "Trade_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
