"use client";
import React, { useEffect, useState } from "react";
import { CreateMarketPage } from "./CreateDashboard";
import { useUser } from "@clerk/nextjs";

import { useRouter } from "next/navigation";

export default function Page() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const role = user?.publicMetadata?.role;
      if (role === "admin") {
        setAllowed(true);
      } else {
        router.push("/unauthorized");
      }
    }
  }, [isLoaded, user]);

  if (!isLoaded || !allowed) return <p>Loading...</p>;
  return (
    <div>
      <CreateMarketPage />
    </div>
  );
}
