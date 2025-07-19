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

  useEffect(() => {
    const fetch_market_details = async () => {
      const resposne = await fetch(`/api/market/${id}`);
      const data = await resposne.json();
      console.log(data.marketdetails, "this is market data");
      setMarketdata(data.marketdetails);
    };

    fetch_market_details();
  }, [id]);

  const close_market = async (id: string) => {
    await fetch(`/api/market/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "CLOSED",
      }),
    });
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
                onClick={() => close_market(marketdata.id)}
                className="hover:bg-red-500"
              >
                CLOSE MARKET
              </Button>
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
