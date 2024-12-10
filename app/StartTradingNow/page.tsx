import React from "react";
import TradingCards from "./TradingCards";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  return (
    <div className="md:p-44 p-4 ">
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        {Opinions.map((opinion, index) => (
          <TradingCards key={index} {...opinion} />
        ))}
      </div>
    </div>
  );
};

export default page;

const Opinions = [
  {
    noOfTraders: 1500,
    title: "Bullish on Tech Stocks",
    description:
      "With the latest advancements in AI, tech stocks are anticipated to soar. Traders are optimistic about companies investing heavily in AI and cloud computing.",
  },
  {
    noOfTraders: 2300,
    title: "Energy Sector Boom",
    description:
      "The energy sector is experiencing a surge due to increased oil demand and renewable energy projects. Investors are eyeing significant growth opportunities here.",
  },
  {
    noOfTraders: 875,
    title: "Caution on Real Estate",
    description:
      "Real estate faces volatility with rising interest rates and economic uncertainty. Many traders are adopting a cautious approach to property investments.",
  },
  {
    noOfTraders: 1600,
    title: "Renewed Interest in Pharmaceuticals",
    description:
      "With recent breakthroughs in medical research, pharmaceutical companies are gaining traction. Traders expect steady growth in this sector.",
  },
  {
    noOfTraders: 950,
    title: "Crypto Volatility Concerns",
    description:
      "Crypto markets continue to show high volatility. Some traders are staying away while others see this as an opportunity for short-term gains.",
  },
];
