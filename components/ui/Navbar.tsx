"use client";
import { Book, ChartNoAxesCombined, Dices, PanelsTopLeft } from "lucide-react";
import React from "react";
import { Button } from "./button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle items-center border-2 rounded-full p-4 px-10 w-full ml-2 mr-2 md:max-w-max bg-black left-[28%] gap-14 mt-5">
      <div className="flex justify-between align-middle items-center gap-14">
        <div className="logo ">
          <span className="flex justify-between align-middle items-center text-3xl text-primary">
            <Dices className="size-9 " />
            Khelo
          </span>
        </div>
        <div className="midsection  justify-between align-middle items-center gap-4 md:flex hidden">
          <div className="trading flex justify-center align-middle items-center gap-1  text-xl hover:text-primary hover:cursor-pointer hover:scale-105 ease-linear duration-200">
            Trading <ChartNoAxesCombined className="size-5" />
          </div>
          <div className="Read flex justify-center align-middle items-center gap-1  text-xl hover:text-primary hover:cursor-pointer hover:scale-105 ease-linear duration-200">
            Read <Book className="size-5" />
          </div>
        </div>
      </div>
      <div className="endCTA gap-5  md:flex hidden">
        <Button>Download App</Button>
        <Button>Trade Online</Button>
      </div>

      <div className="md:hidden ">
        <MobileBar />
      </div>
    </div>
  );
};

export default Navbar;

export function MobileBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <PanelsTopLeft />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="midsection  justify-between align-middle items-center gap-4 flex flex-col w-full mt-10">
          <div className="trading flex justify-center align-middle items-center gap-1  text-xl hover:text-primary hover:cursor-pointer hover:scale-105 ease-linear duration-200 border-b w-full p-2">
            Trading <ChartNoAxesCombined className="size-5" />
          </div>
          <div className="Read flex justify-center align-middle items-center gap-1  text-xl hover:text-primary hover:cursor-pointer hover:scale-105 ease-linear duration-200 p-2 border-b w-full">
            Read <Book className="size-5" />
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <div className="endCTA gap-5  flex flex-col mt-10 ">
              <Button>Download App</Button>
              <Button>Trade Online</Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
