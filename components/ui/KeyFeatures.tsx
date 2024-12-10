import Image, { StaticImageData } from "next/image";

import React from "react";
import RealtimeImage from "@/app/assets/original-f41469c2872a4722271f3a5287a4f93b.png";
import SocialPredictionMarket from "@/app/assets/original-a1acb16cc4760b2faa8592022da3c7a8.png";
import CommunityInsghts from "@/app/assets/bruce-mars-FWVMhUa_wbY-unsplash.jpg";
import { cn } from "@/lib/utils";

const KeyFeatures = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center mt-10 bg-card-foreground px-2 py-4 md:px-44 text-center gap-2">
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
      <div className="flex gap-2 flex-col  md:grid grid-cols-2  max-h-max   ">
        <KeyFeaturesCard
          title={features[0].title}
          description={features[0].description}
          src={features[0].src}
        />
        <KeyFeaturesCard
          title={features[1].title}
          description={features[1].description}
          src={features[1].src}
          className="md:row-span-2 md:flex flex-col"
          imageclassName="size-96"
        />
        <KeyFeaturesCard
          title={features[2].title}
          description={features[2].description}
          src={features[2].src}
        />
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
  imageclassName?: string;
}

function KeyFeaturesCard({
  title,
  description,
  src,
  className,
  imageclassName,
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
      <div className="w-full ">
        <Image
          src={src}
          alt="image"
          className={cn(
            " object-cover rounded-xl md:w-full md:h-full ",
            imageclassName
          )}
        />
      </div>
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
