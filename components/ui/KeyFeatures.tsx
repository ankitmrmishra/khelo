import Image, { StaticImageData } from "next/image";

import React from "react";
import RealtimeImage from "@/app/assets/original-f41469c2872a4722271f3a5287a4f93b.png";
import SocialPredictionMarket from "@/app/assets/original-a1acb16cc4760b2faa8592022da3c7a8.png";
import CommunityInsghts from "@/app/assets/bruce-mars-FWVMhUa_wbY-unsplash.jpg";
import { cn } from "@/lib/utils";

const KeyFeatures = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center mt-10 bg-card-foreground p-10 md:px-44 text-center gap-2">
      <div className="small-tagline bg-primary/15 max-w-max px-2 rounded-xl">
        <span className="text-primary">Khelo Dimag se</span>
      </div>
      <div className="">
        <span className="text-primary text-4xl md:text-7xl font-semibold">
          Turn Market Knowledge Into Market Success
        </span>
        <p className="text-secondary">
          Unleash the power of prediction with tools designed for modern
          traders.
        </p>
      </div>
      <div className="flex gap-2 flex-col  md:grid grid-cols-2 grid-rows-3">
        {features.map((feat) => (
          <KeyFeaturesCard
            key={feat.id}
            {...feat}
            className={feat.id == 2 ? `` : ``}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;

interface KeyFeaturesCardProps {
  title: string;
  description: string;
  src: StaticImageData;
  className?: string;
}

function KeyFeaturesCard({
  title,
  description,
  src,
  className,
}: KeyFeaturesCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-tr from-gray-200 to-blue-100 text-primary text-start p-3 rounded-lg md:flex gap-7 ",
        className
      )}
    >
      <div className="flex justify-between flex-col ">
        <span className="font-semibold text-xl">{title}</span>
        <p className="text-background ">{description}</p>
      </div>
      <Image
        src={src}
        alt="image"
        className="md:size-48 object-cover rounded-xl "
      />
    </div>
  );
}

const features = [
  {
    id: 1,
    title: "Social Prediction Markets",
    description:
      "Make your voice count. Take positions on trending topics across politics, sports, entertainment, and technology. Back your beliefs with real stakes.",
    src: SocialPredictionMarket,
  },
  {
    id: 2,
    title: "Real-Time Trading",
    description:
      "Watch markets move in real-time as public opinion shifts. React quickly to breaking news and changing sentiments.",
    src: RealtimeImage,
  },
  {
    id: 3,
    title: "Community Insights",
    description:
      "Follow top predictors, share your analysis, and learn from the crowd's collective wisdom. Build your reputation as a thought leader.",
    src: CommunityInsghts,
  },
];
