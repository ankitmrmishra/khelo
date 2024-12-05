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
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
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