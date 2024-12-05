"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
// import RealTimeTradingChart from "../../app/assets/image.png";
// import {
//   ArrowUpDown,
//   BarChart3,
//   DollarSign,
//   Globe,
//   Lightbulb,
//   LineChart,
//   TrendingUp,
// } from "lucide-react";
// import Image from "next/image";
import { Card, CardDescription, CardTitle } from "./card";
import Image from "next/image";

function HowItWorks() {
  return (
    <div className="md:p-20 p-2 bg-card-foreground">
      <div className="flex flex-col justify-center items-center mt-10 md:p-10 p-2  md:px-44 text-center gap-2 dark bg-background rounded-2xl">
        <div className="small-tagline bg-primary/15 max-w-max px-2 rounded-xl">
          <span className="text-primary">How It Works?</span>
        </div>
        <div className="text-primary text-3xl md:text-7xl font-semibold">
          From Insight to Profit: How to Navigate Khelo&apos;s Prediction
          Markets
        </div>
        <p className="text-foreground max-w-2xl mx-auto">
          Get started with our step-by-step guide and start profiting from your
          predictions today.
        </p>
        <motion.div className="steps py-10 grid md:grid-cols-2 grid-cols-1 gap-5">
          {HowItWorksStep1.map((steps, index) => (
            <HowItWorksInfoCard key={index}>
              <CardTitle className="text-2xl text-primary">
                {steps.step}. {steps.title}
              </CardTitle>
              <CardDescription className="group-hover:translate-x-2 mt-3 group-hover:cursor-pointer ease-linear duration-200">
                {steps.description}
              </CardDescription>
              <div className="mt-2 overflow-clip ">
                <Image
                  src={steps.image}
                  alt={steps.title}
                  width={500}
                  height={500}
                  className=" size-[20rem] w-full object-cover rounded-2xl group-hover:scale-105 ease-linear duration-500"
                />
              </div>
            </HowItWorksInfoCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HowItWorks;

interface HowItWorksInfoCardprops {
  children: ReactNode;
}

export const HowItWorksInfoCard = ({ children }: HowItWorksInfoCardprops) => {
  return (
    <Card className=" max-h-[40rem] text-start p-2   group">{children}</Card>
  );
};

const HowItWorksStep1 = [
  {
    step: 1,
    title: "Join the Game",
    description:
      "Sign up and dive into the world of prediction. It’s quick, easy, and free to get started!",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: 2,
    title: "Pick Your Market",
    description:
      "Explore trending markets—sports, finance, politics, and more. Select where you want to make your move.",
    image:
      "https://images.unsplash.com/photo-1554260570-e9689a3418b8?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: 3,
    title: "Place Your Prediction",
    description:
      "Bet on your insights, set your stake, and lock in your predictions for real-time excitement.",
    image:
      "https://plus.unsplash.com/premium_photo-1683751113164-ba68afd98f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: 4,
    title: "Win and Cash Out",
    description:
      "Celebrate your wins and withdraw your earnings instantly to your bank or crypto wallet.",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
