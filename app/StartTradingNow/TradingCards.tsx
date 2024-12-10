"use client";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
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
import { TrendingUpIcon, Users } from "lucide-react";
import Sheettrigger from "./Sheettrigger";

import { useTradingCardStore } from "../store/atoms/TradingCradState";

interface TradingCardsProps {
  noOfTraders: number;
  title: string;
  description: string;
}

const TradingCards = ({
  noOfTraders,
  title,
  description,
}: TradingCardsProps) => {
  const setTradingcardprops = useTradingCardStore(
    (state) => state.setTradingCardState
  );
  const updateState = () => {
    setTradingcardprops({
      title: title,
      description: description,
      noOfTraders: noOfTraders,
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
          <Badge
            variant={"outline"}
            className="text-sm bg-emerald-100 text-emerald-800  shadow-[0_0_10px_rgba(0,255,255,0.5)] rounded-full"
          >
            <Users className="size-4" />
            {noOfTraders} Traders
          </Badge>
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

export default TradingCards;
