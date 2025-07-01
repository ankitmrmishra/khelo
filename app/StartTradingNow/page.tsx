import React from "react";
import TradingCards from "./TradingCards";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  return (
    <div className="md:p-44 p-4 ">
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1"></div>
    </div>
  );
};

export default page;
