"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TrendingUpIcon } from "lucide-react";
import Sheettrigger from "./Sheettrigger";

import { useTradingCardStore } from "../store/atoms/TradingCradState";
import { useEffect, useState } from "react";

interface TradingCardsProps {
  title: string;
  description: string;
}

const TradingCards = ({ title, description }: TradingCardsProps) => {
  const setTradingcardprops = useTradingCardStore(
    (state) => state.setTradingCardState
  );
  const updateState = () => {
    setTradingcardprops({
      title: title,
      description: description,
    });
  };
  return (
    <Card
      onClick={updateState}
      className="bg-white text-background h-80 flex flex-col justify-between align-middle "
    >
      <CardHeader>
        <div className="flex justify-between items-center align-middle ">
          {" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-red-400 flex justify-center align-middle items-center gap-2">
                <TrendingUpIcon className="size-5" />
                <div className="w-full flex justify-center align-middle items-center ">
                  <span className="mr-1.5 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  Live{" "}
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-orange-300 text-black">
                Ending In 3:47 min
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <CardTitle className="text-2xl font-serif font-normal">
          {title}
        </CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="grid grid-cols-2 gap-3">
        <Sheettrigger
          SheetTriggerclassName="bg-emerald-200 text-emerald-600"
          buttonprop={"Yes"}
        />
        <Sheettrigger
          SheetTriggerclassName="bg-rose-200 text-rose-600"
          buttonprop={"No"}
        />
      </CardFooter>
    </Card>
  );
};

type tradingtype = {
  id: string;
  Question: string;
  description: string;
  category: string;
  endsAt: Date;
};

function TradingPage() {
  const [responses, setResponse] = useState<tradingtype[]>([]);
  const pagePooling = async () => {
    const response = await fetch("/api/market", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(response);
    console.log(data.markets, "this is data");
    setResponse(data.markets);
  };
  useEffect(() => {
    pagePooling();
  }, []);

  return (
    <div className=" w-full ">
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-2 ">
        {responses.map((res, index) => (
          <TradingCards
            title={res.Question}
            description={res.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default TradingPage;
