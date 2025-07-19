// app/markets/page.tsx
"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MarketDetails() {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const res = await fetch("/api/market");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setMarkets(data.markets);
      } catch (err: any) {
        setError("Failed to load markets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkets();
  }, []);

  const handle_onclick = (id: string) => {
    router.push(`/dashboard/${id}`);
  };

  if (loading) return <div>Loading markets...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 max-w-4xl">
      <h2 className="text-xl font-bold mb-4">All Markets</h2>
      {markets.length === 0 ? (
        <p>No markets found.</p>
      ) : (
        <ul className="space-y-2">
          {markets.map((market: any) => (
            <li
              onClick={() => handle_onclick(market.id)}
              key={market.id}
              className="border rounded p-4 shadow"
            >
              <h3 className="font-semibold">{market.Question}</h3>
              <p className="text-sm text-gray-600">{market.description}</p>
              <p className="text-xs mt-1 text-gray-500">
                Ends at: {new Date(market.endsAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
