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
import { Card } from "./card";

function HowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-10 md:px-44 text-center gap-2">
      <div className="small-tagline bg-primary/15 max-w-max px-2 rounded-xl">
        <span className="text-primary">How It Works?</span>
      </div>
      <div className="text-primary text-4xl md:text-7xl font-semibold">
        From Insight to Profit: How to Navigate Khelo’s Prediction Markets
      </div>
      <p className="text-foreground max-w-2xl mx-auto">
        Get started with our step-by-step guide and start profiting from your
        predictions today.
      </p>
      <motion.div className="steps h-auto w-full mt-10 space-y-10"></motion.div>
    </div>
  );
}

export default HowItWorks;

interface HowItWorksInfoCardprops {
  heading: string;
  children: ReactNode;
}

export const HowItWorksInfoCard = ({ children }: HowItWorksInfoCardprops) => {
  return <Card>{children}</Card>;
};

// const HowItWorksStep1 = [
//   {
//     title: "Explore Your Options",
//     description:
//       "Browse prediction markets on diverse topics, from upcoming elections to tech breakthroughs.",
//   },
//   {
//     title: "Focus on Your Strengths",
//     description:
//       "Dive into markets you understand deeply and leverage your expertise.",
//   },
//   {
//     title: "Evaluate the Pulse",
//     description:
//       "Check out current trading prices and make informed decisions.",
//   },
// ];
