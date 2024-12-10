"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

import { useTradingCardStore } from "../store/atoms/TradingCradState";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface SheetTriggerProps {
  buttonprop: string;
  children?: ReactNode;
  SheetTriggerclassName: string;
}

const Sheettrigger = ({
  buttonprop,
  children,
  SheetTriggerclassName,
}: SheetTriggerProps) => {
  const { noOfTraders, title, description } = useTradingCardStore();

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "bg-black text-white   rounded-lg h-10",
          SheetTriggerclassName
        )}
      >
        {buttonprop}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {title}
            <Badge
              variant={"outline"}
              className="text-sm bg-emerald-100 text-emerald-800  shadow-[0_0_10px_rgba(0,255,255,0.5)] rounded-full"
            >
              <Users className="size-4" />
              {noOfTraders} Traders
            </Badge>
          </SheetTitle>

          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
      </SheetContent>
      {children}
    </Sheet>
  );
};

export default Sheettrigger;

// things I need in the sheet here is
{
  /* 
    
   1: I need the title
   2: I need the description
   3: I need two buttons/or Tabs that trigger the chart or the yes no details like quantity price win etc.
   4: then i need a card telling me these details
         4.1: a price tag and a button changing the price.
         4.2: I need the quantity tab, which is telling me how much quantity of stock i need to put my money on
         4.3: It will tell the amoount of money i am putting and the no.of stocks i am putting in
  

    */
}
