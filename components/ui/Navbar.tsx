"use client";
import { Book, ChartNoAxesCombined, Dices, PanelsTopLeft } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Skeleton } from "./skeleton";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: user.fullName,
        }),
      });
    }
  }, [isSignedIn, user]);
  return (
    <div className="flex justify-between align-middle items-center border-2 rounded-full p-4 px-10 w-full ml-2 mr-2 md:max-w-max bg-black left-[28%] gap-14 mt-5">
      <div className="flex justify-between align-middle items-center gap-14">
        <div className="logo ">
          <span className="flex justify-between align-middle items-center text-3xl text-primary">
            <Dices className="size-9 " />
            <Link href={"/"}>Khelo</Link>
          </span>
        </div>
        <div className="midsection  justify-between align-middle items-center gap-4 md:flex hidden">
          <Link href={"/StartTradingNow"}>
            <div className="trading flex justify-center align-middle items-center gap-1  text-xl hover:text-primary hover:cursor-pointer hover:scale-105 ease-linear duration-200">
              Trading <ChartNoAxesCombined className="size-5" />
            </div>
          </Link>
          <Link href={"/read"}>
            <div className="Read flex justify-center align-middle items-center gap-1  text-xl hover:text-primary hover:cursor-pointer hover:scale-105 ease-linear duration-200">
              Read <Book className="size-5" />
            </div>
          </Link>
        </div>
      </div>
      <div className="endCTA gap-5  md:flex hidden">
        <div className="group relative">
          <Button
            disabled
            className="block group-hover:opacity-0 transition-opacity duration-300"
          >
            Download App
          </Button>
          <Button className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Coming Soon
          </Button>
        </div>
        <Link href={"/StartTradingNow"}>
          <Button>Trade Online</Button>
        </Link>
        {!isLoaded ? (
          <div className="">
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
        ) : (
          <div className="">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        )}
      </div>

      <div className="md:hidden flex  justify-center align-middle items-center gap-2">
        <MobileBar />
        <SignedIn>
          <UserButton />
        </SignedIn>
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
              <Link href={"/StartTradingNow"}>
                <Button>Trade Online</Button>
              </Link>
              <SignedOut>
                <Button className="">
                  <SignInButton />
                </Button>
              </SignedOut>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
