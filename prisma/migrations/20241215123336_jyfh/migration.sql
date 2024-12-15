-- CreateTable
CREATE TABLE "Trade" (
    "id" TEXT NOT NULL,
    "TradeType" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Trade_id_key" ON "Trade"("id");
