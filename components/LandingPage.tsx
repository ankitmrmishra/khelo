import React from "react";
import Hero from "./ui/Hero";
import KeyFeatures from "./ui/KeyFeatures";
import HowItWorks from "./ui/HowItWorks";
import CTA from "./ui/CTA";
import Whatpeoplearesaying from "./ui/What-people-are-saying";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <CTA />
      <Whatpeoplearesaying />
    </div>
  );
};

export default LandingPage;
