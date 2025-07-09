"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface Marketinterface {
  id: string;
  Question: string;
  description: string;
  category: string;

  endsAt: Date;
  startedOn: Date;
}

export default function page() {
  const params = useParams();
  const id = params.id;
  const [marketdetails, setMarketdetails] = useState<Marketinterface | null>(
    null
  );
  useEffect(() => {
    const pagePooling = async () => {
      const response = await fetch(`/api/market/${id}`);
      const data = await response.json();
      setMarketdetails(data.marketdetails);
    };

    if (id) {
      pagePooling();
    }
  }, [id]);
  return (
    <div>
      {marketdetails && (
        <div className="">
          <h2>{marketdetails.Question}</h2>
          <p>{marketdetails.description}</p>
          <p>{marketdetails.category}</p>
        </div>
      )}
    </div>
  );
}
