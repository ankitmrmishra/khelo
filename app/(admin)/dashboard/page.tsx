"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MarketDetails from "./MarketDetails";

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
  }, [isLoaded, user, router]);

  if (!isLoaded || !allowed) return <p>Loading...</p>;
  return (
    <div className="flex">
      <MarketDetails />
    </div>
  );
}
