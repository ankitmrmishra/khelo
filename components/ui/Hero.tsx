import React from "react";
import { Button } from "./button";
import GraphChartImage from "@/app/assets/Stock Chart.svg";
import Avatar1 from "@/app/assets/avataaars (1).png";
import Avatar2 from "@/app/assets/avataaars (2).png";
import Avatar3 from "@/app/assets/avataaars (3).png";
import Image from "next/image";
import Iphone14Image from "@/app/assets/iPhone 14.png";
import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { Progress } from "./progress";
import { Card, CardContent, CardFooter } from "./card";
import { Badge } from "./badge";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:grid grid-cols-2 md:p-24 relative p-5 overflow-hidden">
      <div className="left-part dark gap-2 flex flex-col  text-foreground mt-16 z-40">
        <div className="small-tagline bg-primary/15 max-w-max px-2 rounded-xl">
          <span className="text-primary">Khelo Dimag se</span>
        </div>
        <div className="Main-text-here">
          <span className="lg:text-7xl md:text-5xl text-3xl font-semibold  font-[family-name:var(--font-geist-sans)]">
            Turn Your Predictions into Profits
          </span>
        </div>
        <div className="para-here">
          <span className="lg:text-xl md:text-lg">
            Trade on your convictions, earn from your insights. India&apos;s
            first social prediction market where opinions have real value.
          </span>
        </div>
        <div className="CTA-buttons flex md:flex-row flex-col py-10 gap-5">
          <Button className="hover:cursor-pointer">
            <Link href={"/StartTradingNow"}>Start Trading Now</Link>
          </Button>
          <Button>How It Works?</Button>
        </div>
      </div>
      <div className="right-part relative flex justify-center align-middle items-center z-50">
        <div className="iphoneImage">
          <Image
            src={Iphone14Image}
            objectFit="cover"
            alt=""
            className=" h-full size-[28rem] "
          />
        </div>
        <div className="absolute md:right-8 top-16 -right-9 ">
          <FloatingDetailedCard />
        </div>
        <div className="absolute md:bottom-24 left-0 bottom-0">
          <DetailCrad />
        </div>
      </div>
      <div className="absolute bottom-0 right-0  ">
        <Image
          src={GraphChartImage}
          objectFit="cover"
          alt="kjebf"
          className="opacity-10 -z-50 "
        />
      </div>
    </div>
  );
};

export default Hero;

const FloatingDetailedCard = () => {
  return (
    <Card className="md:w-[250px] max-w-max  bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="md:h-12 md:w-12 h-4 w-4 rounded-full bg-white/20 flex items-center justify-center">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold md:text-xl text-sm">
              Opinion Trading
            </h3>
            <p className="md:text-sm text-xs opacity-90">Trade what you know</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex md:justify-between justify-start gap-1 items-center mb-2">
              <span className="md:text-sm text-xs font-medium">
                Cricket World Cup
              </span>
              <Badge variant="secondary" className="bg-white/20">
                Hot
              </Badge>
            </div>
            <div className="flex md:justify-between justify-start items-center">
              <span className="text-xs">India Wins</span>
              <span className="text-xs flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                68%
              </span>
            </div>
            <Progress value={68} className="h-1 mt-1 w-24" />
          </div>
          <div>
            <div className="flex md:justify-between justify-start gap-1 items-center mb-2">
              <span className="md:text-sm text-xs  font-medium">
                Bitcoin Price
              </span>
              <Badge variant="secondary" className="bg-white/20">
                Trending
              </Badge>
            </div>
            <div className="flex md:justify-between justify-start gap-1 items-center">
              <span className="text-xs">Reaches $100k</span>
              <span className="text-xs flex items-center">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                32%
              </span>
            </div>
            <Progress value={32} className="h-1 mt-1 w-24" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-primary-foreground/10 p-4">
        <div className="w-full flex  md:flex-row flex-col gap-2 justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span className="text-xs">10k+ traders</span>
          </div>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            <DollarSign className="h-4 w-4 mr-1" />
            Start Trading
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const DetailCrad = () => {
  return (
    <div className="bg-secondary  text-foreground flex md:flex-row flex-col justify-center align-middle md:items-center items-start p-3 rounded-xl gap-2">
      <div className="images flex  gap-2 ">
        {imageLink.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="img"
            className="md:size-16 size-10 bg-primary rounded-full "
          />
        ))}
      </div>
      <div className="flex flex-col justify-start align-middle items-start">
        <span className="md:text-2xl text-lg font-bold">100k+</span>
        <p className="text-primary/80">Trusted Users</p>
      </div>
    </div>
  );
};

const imageLink = [Avatar1, Avatar2, Avatar3];
