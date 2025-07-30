"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

export interface Trade {
  id: string;
  UserID: string;
  TradeType: "YES" | "NO";
  tradeAmount: number;
  sharesbought: number;
  time: string;
  orderType: "BUY" | "SELL";
  predictionId: string;
}

export interface Market {
  id: string;
  Question: string;
  category: string;
  description: string;
  endsAt: string;
  startedon: string;
  status: "OPEN" | "CLOSED" | string;
  yesCount: number;
  noCount: number;
  yesreserve: number;
  noreserve: number;
  predections: Trade[];
}

export default function Page() {
  const { id } = useParams();
  const [marketdata, setMarketdata] = useState<Market | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch_market_details = async () => {
      const resposne = await fetch(`/api/market/${id}`);
      const data = await resposne.json();
      console.log(data.marketdetails, "this is market data");
      setMarketdata(data.marketdetails);
    };

    fetch_market_details();
  }, [id]);

  // Generalized patch function
  const patchMarket = async (patchData: Partial<Market>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/market/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchData),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Failed to update market"
        );
      }
      setMarketdata((prev) => ({ ...prev, ...patchData } as Market));
      toast({ title: "Market updated successfully" });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Example: Close market
  const close_market = () => {
    patchMarket({ status: "CLOSED" });
  };

  return (
    <div className="flex">
      <div className="">
        {marketdata && (
          <div className="max-w-7xl flex flex-col gap-2" key={marketdata.id}>
            <h1 className="text-2xl font-bold">{marketdata.Question}</h1>
            <p className="max-w-4xl">{marketdata.description}</p>
            <div className="action center">
              <Button
                onClick={close_market}
                className="hover:bg-red-500"
                disabled={loading || marketdata?.status === "CLOSED"}
              >
                {loading ? "Closing..." : "CLOSE MARKET"}
              </Button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <div className="predictions bg-white/5 border-white/15 flex flex-col gap-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Trade Type</TableHead>
                    <TableHead>Shares Bought</TableHead>
                    <TableHead>Order Type</TableHead>
                    <TableHead className="text-center">User</TableHead>
                    <TableHead className="text-right">Trade Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {marketdata.predections?.map((trade, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {trade.TradeType}
                      </TableCell>
                      <TableCell>{trade.sharesbought}</TableCell>
                      <TableCell>{trade.orderType}</TableCell>
                      <TableCell className="text-center">
                        {trade.UserID}
                      </TableCell>
                      <TableCell className="text-right">
                        {trade.tradeAmount}
                      </TableCell>
                    </TableRow>
                    // <div
                    //   className=" bg-white/5 border-white/15 flex"
                    //   key={index}
                    // >
                    //   <h1>{trade.TradeType}</h1>
                    //   <h1>{trade.UserID}</h1>
                    //   <h1>{trade.orderType}</h1>
                    //   <h1>{trade.sharesbought}</h1>
                    //   <h1>{trade.tradeAmount}</h1>
                    //   //{" "}
                    // </div>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
