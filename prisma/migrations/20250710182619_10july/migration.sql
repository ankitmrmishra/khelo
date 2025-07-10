/*
  Warnings:

  - You are about to drop the `Prediction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `noCount` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yesCount` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Trade` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `TradeType` on the `Trade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TRADETYPE" AS ENUM ('YES', 'NO');

-- DropForeignKey
ALTER TABLE "Prediction" DROP CONSTRAINT "Prediction_Creator_fkey";

-- DropForeignKey
ALTER TABLE "Trade" DROP CONSTRAINT "Trade_predictionId_fkey";

-- AlterTable
ALTER TABLE "Market" ADD COLUMN     "noCount" BIGINT NOT NULL,
ADD COLUMN     "yesCount" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Trade" ADD COLUMN     "time" TIMESTAMP(3) NOT NULL,
DROP COLUMN "TradeType",
ADD COLUMN     "TradeType" "TRADETYPE" NOT NULL;

-- DropTable
DROP TABLE "Prediction";

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_predictionId_fkey" FOREIGN KEY ("predictionId") REFERENCES "Market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
