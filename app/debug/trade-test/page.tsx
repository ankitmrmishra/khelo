"use client";

import { useState } from "react";

export default function TradeTester() {
  const [marketId, setMarketId] = useState("");
  const [tradetype, setTradetype] = useState<"YES" | "NO">("YES");
  const [tradeAmount, setTradeAmount] = useState<number>(1);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submitTrade() {
    setLoading(true);
    try {
      const response = await fetch(`/api/trade/${marketId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tradetype, tradeAmount }),
      });
      console.log("Raw response:", response);

      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error: any) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4 text-black">
      <h1 className="text-2xl font-bold">🧪 Trade API Tester</h1>

      <input
        value={marketId}
        onChange={(e) => setMarketId(e.target.value)}
        placeholder="Market ID"
        className="w-full border px-3 py-2 rounded"
      />

      <select
        value={tradetype}
        onChange={(e) => setTradetype(e.target.value as "YES" | "NO")}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="YES">YES</option>
        <option value="NO">NO</option>
      </select>

      <input
        type="number"
        value={tradeAmount}
        onChange={(e) => setTradeAmount(parseInt(e.target.value))}
        placeholder="Trade Amount"
        className="w-full border px-3 py-2 rounded"
      />

      <button
        onClick={submitTrade}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Submit Trade"}
      </button>

      {result && (
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto max-h-96">
          {result}
        </pre>
      )}
    </div>
  );
}
