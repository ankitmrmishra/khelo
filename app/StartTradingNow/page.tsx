import React from "react";
import { auth } from "@clerk/nextjs/server";
import TradingPage from "./TradingCards";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  return (
    <div className="md:p-44 p-4 ">
      <div className="">
        <TradingPage />
      </div>
    </div>
  );
};

export default page;
