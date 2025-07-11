"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface TradingReserve {
  yesReserve: number | null;
  noReserve: number | null;
}

export function TradingSidecard() {
  const [pricing, setPricing] = useState<TradingReserve | null>({
    yesReserve: null,
    noReserve: null,
  });
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy");
  const [selectedOption, setSelectedOption] = useState<"YES" | "NO">("YES");
  const [shares, setShares] = useState<number>(0);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const tradefetching = async () => {
      const yesnocount = await fetch(`/api/trade/${id}/count`);
      const yesnocountdata = await yesnocount.json();

      setPricing({
        yesReserve: yesnocountdata.yesCount,
        noReserve: yesnocountdata.noCount,
      });
      console.log(yesnocountdata, "this is the yesnocount data ");
    };
    if (id) {
      tradefetching();
    }
  }, [id]);

  const handleOptionChange = (option: "YES" | "NO") => {
    setSelectedOption(option);
  };

  const handleSharesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setShares(isNaN(value) ? 0 : value);
  };

  const adjustShares = (amount: number) => {
    setShares((prev) => Math.max(0, prev + amount));
  };

  const handleSubmit = async () => {
    if (shares <= 0) {
      alert("Please enter a valid number of shares.");
      return;
    }

    const tradeData = {
      tradetype: selectedOption,
      tradeAmount: shares,
    };

    try {
      const response = await fetch(`/api/trade/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tradeData),
      });

      if (response.ok) {
        alert("Trade submitted successfully!");
        setShares(0); // Reset shares after successful submission
      } else {
        alert("Failed to submit trade.");
      }
    } catch (error) {
      console.error("Error submitting trade:", error);
      alert("An error occurred while submitting the trade.");
    }
  };

  return (
    <Card className="w-full max-w-sm bg-background border-slate-700 text-white">
      <CardContent className="space-y-6 py-10">
        {/* Buy/Sell Tabs with Order Type */}
        <div className="flex items-center justify-between">
          <Tabs
            value={orderType}
            onValueChange={(value) => setOrderType(value as "buy" | "sell")}
            className="w-auto"
          >
            <TabsList className="bg-slate-800 border-slate-600">
              <TabsTrigger
                value="buy"
                className="data-[state=active]:bg-slate-700"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger
                value="sell"
                className="data-[state=active]:bg-slate-700"
              >
                Sell
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Yes/No Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            className={`h-12 ${
              selectedOption === "YES"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700"
            }`}
            onClick={() => handleOptionChange("YES")}
          >
            <div className="text-center">
              <div className="font-medium">Yes</div>
              <div className="text-sm">{pricing?.yesReserve}</div>
            </div>
          </Button>
          <Button
            className={`h-12 ${
              selectedOption === "NO"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700"
            }`}
            onClick={() => handleOptionChange("NO")}
          >
            <div className="text-center">
              <div className="font-medium">No</div>
              <div className="text-sm">{pricing?.noReserve}</div>
            </div>
          </Button>
        </div>

        {/* Shares */}
        <div className="space-y-2">
          <Label className="text-white font-medium">Shares</Label>
          <div className="space-y-2">
            <Input
              className="bg-slate-800 border-slate-600 text-white text-right text-2xl font-mono"
              placeholder="0"
              value={shares}
              onChange={handleSharesChange}
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                onClick={() => adjustShares(-10)}
              >
                -10
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                onClick={() => adjustShares(10)}
              >
                +10
              </Button>
            </div>
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-2 pt-2 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Total</span>
            <span className="text-blue-400 font-mono text-lg">$0</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className="text-white font-medium">To Win</span>
              <span className="text-green-400">💰</span>
            </div>
            <span className="text-green-400 font-mono text-lg">$0</span>
          </div>
        </div>

        {/* Trade Button */}
        <Button
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
          onClick={handleSubmit}
        >
          Trade
        </Button>

        {/* Terms */}
        <p className="text-xs text-slate-400 text-center">
          By trading, you agree to the{" "}
          <button className="underline hover:text-slate-300">
            Terms of Use
          </button>
          .
        </p>
      </CardContent>
    </Card>
  );
}
