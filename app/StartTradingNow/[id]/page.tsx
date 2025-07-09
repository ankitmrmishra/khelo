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
    <div className="  w-full h-full px-20 py-10">
      {marketdetails && (
        <div className="">
          <h2 className="lg:text-4xl">{marketdetails.Question} ?</h2>
          <p className="max-w-[50rem] text-white/50">
            {marketdetails.description}
          </p>
          <p className="bg-blue-100 px-5 text-black rounded-full border border-blue-500 my-3 max-w-max">
            {marketdetails.category}
          </p>
          <ChartAreaInteractive />
        </div>
      )}
    </div>
  );
}

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp } from "lucide-react";

const chartData = [
  { time: "2025-07-08T20:00:00Z", yes: 0.52, no: 0.48 },
  { time: "2025-07-08T21:00:00Z", yes: 0.55, no: 0.45 },
  { time: "2025-07-08T22:00:00Z", yes: 0.58, no: 0.42 },
  { time: "2025-07-08T23:00:00Z", yes: 0.6, no: 0.4 },
  { time: "2025-07-09T00:00:00Z", yes: 0.62, no: 0.38 },
  { time: "2025-07-09T01:00:00Z", yes: 0.65, no: 0.35 },
  { time: "2025-07-09T02:00:00Z", yes: 0.63, no: 0.37 },
  { time: "2025-07-09T03:00:00Z", yes: 0.6, no: 0.4 },
  { time: "2025-07-09T04:00:00Z", yes: 0.58, no: 0.42 },
  { time: "2025-07-09T05:00:00Z", yes: 0.56, no: 0.44 },
  { time: "2025-07-09T06:00:00Z", yes: 0.54, no: 0.46 },
  { time: "2025-07-09T07:00:00Z", yes: 0.5, no: 0.5 },
  { time: "2025-07-09T08:00:00Z", yes: 0.48, no: 0.52 },
  { time: "2025-07-09T09:00:00Z", yes: 0.47, no: 0.53 },
  { time: "2025-07-09T10:00:00Z", yes: 0.49, no: 0.51 },
  { time: "2025-07-09T11:00:00Z", yes: 0.52, no: 0.48 },
  { time: "2025-07-09T12:00:00Z", yes: 0.55, no: 0.45 },
  { time: "2025-07-09T13:00:00Z", yes: 0.58, no: 0.42 },
  { time: "2025-07-09T14:00:00Z", yes: 0.61, no: 0.39 },
  { time: "2025-07-09T15:00:00Z", yes: 0.63, no: 0.37 },
  { time: "2025-07-09T16:00:00Z", yes: 0.66, no: 0.34 },
  { time: "2025-07-09T17:00:00Z", yes: 0.69, no: 0.31 },
  { time: "2025-07-09T18:00:00Z", yes: 0.71, no: 0.29 },
  { time: "2025-07-09T19:00:00Z", yes: 0.73, no: 0.27 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  yes: {
    label: "Yes",
    color: "hsl(var(--chart-1))",
  },
  no: {
    label: "No",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("24h");

  const filteredData = React.useMemo(() => {
    const now = new Date("2025-07-09T23:58:44Z"); // Using current time from context
    let hoursToSubtract = 24;

    if (timeRange === "12h") {
      hoursToSubtract = 12;
    } else if (timeRange === "6h") {
      hoursToSubtract = 6;
    } else if (timeRange === "1h") {
      hoursToSubtract = 1;
    }

    const startTime = new Date(
      now.getTime() - hoursToSubtract * 60 * 60 * 1000
    );

    return chartData.filter((item) => {
      const entryTime = new Date(item.time);
      return entryTime >= startTime && entryTime <= now;
    });
  }, [timeRange]);

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const calculateTrend = () => {
    if (filteredData.length < 2) return { trend: 0, direction: "neutral" };

    const first = filteredData[0].yes;
    const last = filteredData[filteredData.length - 1].yes;
    const trend = ((last - first) / first) * 100;

    return {
      trend: Math.abs(trend),
      direction: trend > 0 ? "up" : trend < 0 ? "down" : "neutral",
    };
  };

  const { trend, direction } = calculateTrend();

  return (
    <Card className="max-w-4xl">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Yes/No Polling Data</CardTitle>
          <CardDescription>Real-time polling results over time</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a time range"
          >
            <SelectValue placeholder="Last 24 hours" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="1h" className="rounded-lg">
              Last hour
            </SelectItem>
            <SelectItem value="6h" className="rounded-lg">
              Last 6 hours
            </SelectItem>
            <SelectItem value="12h" className="rounded-lg">
              Last 12 hours
            </SelectItem>
            <SelectItem value="24h" className="rounded-lg">
              Last 24 hours
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={formatTime}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="yes"
              type="monotone"
              stroke="var(--color-yes)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="no"
              type="monotone"
              stroke="var(--color-no)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {direction === "up" && (
                <>
                  Trending up by {trend.toFixed(1)}% in this period{" "}
                  <TrendingUp className="h-4 w-4" />
                </>
              )}
              {direction === "down" && (
                <>
                  Trending down by {trend.toFixed(1)}% in this period{" "}
                  <TrendingUp className="h-4 w-4 rotate-180" />
                </>
              )}
              {direction === "neutral" && (
                <>No significant trend in this period</>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing polling data for the selected time range
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
