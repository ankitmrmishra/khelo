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

import {
  useamountincdecStore,
  useTradingCardStore,
} from "../store/atoms/TradingCradState";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

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
  const { val, setInc, setdec } = useamountincdecStore();
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
        {/* /////////////// HERE WE WILL ADD TABS FOR TRIGGERING YES AND NO CHART///////////////////////////////// */}

        <div className="tabs_here w-full mt-9">
          <Tabs defaultValue="Yes" className="w-full ">
            <TabsList className="w-full h-10 ">
              <TabsTrigger className="w-full h-8 " value="Yes">
                YES
              </TabsTrigger>
              <TabsTrigger className="w-full h-8" value="No">
                No
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Yes">
              <Card>
                <CardHeader>
                  <CardDescription className="flex justify-between align-middle items-center ">
                    <span>Total Balance</span>
                    <span className="">Rs.900</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="money_change border border-green-100 rounded-lg p-3 flex justify-between align-middle items-center">
                    <div className="inc" onClick={() => setInc()}>
                      <Plus className="bg-green-400 text-black rounded-md" />
                    </div>
                    <div className="valueof">{val}</div>
                    <div className="dec" onClick={() => setdec()}>
                      <Minus className="bg-red-400 text-black rounded-md" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="No">This is No triggered</TabsContent>
          </Tabs>
        </div>
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
