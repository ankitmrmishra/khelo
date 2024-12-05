import React from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import Iphone14Image from "@/app/assets/iPhone 14.png";

const CTA = () => {
  return (
    <div className="bg-foreground md:p-20 overflow-clip relative p-2">
      <div className="bg-background dark flex md:flex-row flex-col md:justify-center justify-between align-middle items-start rounded-2xl md:p-10 p-3 md:h-96 overflow-hidden relative z-40">
        <div className="flex flex-col justify-center align-middle items-start">
          <span className="text-6xl">Ready to Make Your Prediction?</span>
          <p className="text-xl md:w-[40rem] text-muted-foreground">
            Join thousands of traders in exploring the world of social
            prediction markets. Start making informed predictions today
          </p>
          <div className="CTA-buttons flex md:flex-row flex-col py-10 gap-5">
            <Button className="hover:cursor-pointer">
              <Link href={"/StartTradingNow"}>Start Trading Now</Link>
            </Button>
            <Button>How It Works?</Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="iphoneImage max-w-max">
            <Image
              src={Iphone14Image}
              objectFit="cover"
              alt=""
              className="h-full size-[35rem]"
            />
          </div>
        </div>
        <div className="bg-primary w-44 h-44 rounded-full absolute md:-top-10 -bottom-10 -right-10 z-30"></div>
        <div className="bg-primary/35 w-44 h-44 rounded-full absolute md:top-28 bottom-28 -right-20 z-30"></div>
      </div>
    </div>
  );
};

export default CTA;
