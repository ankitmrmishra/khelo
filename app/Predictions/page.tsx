import { auth } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();
  //   if (!userId) return redirectToSignIn();
  if (userId !== process.env.ADMIN_KEY) {
    return (
      <div>
        <span>SORRY!! YOU ARE NOT AUTHORIZED TO OPEN THIS PAGE</span>
      </div>
    );
  } else if (!userId) {
    return redirectToSignIn();
  } else {
      return <div>
        
    </div>;
  }
};

export default page;
