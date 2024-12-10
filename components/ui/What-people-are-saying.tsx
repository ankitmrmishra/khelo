import React from "react";
import { AnimatedTestimonials } from "./testimonials";

const Whatpeoplearesaying = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col gap-6 justify-center align-middle items-center w-full py-5 md:px-20 px-2">
      <div className="small-tagline bg-primary/15 max-w-max px-2 rounded-xl">
        <span className="text-primary">What people are talking about?</span>
      </div>
      <div className="bg-background w-full flex flex-col justify-center align-middle items-center  rounded-3xl md:px-10 px-2 py-5 text-center">
        <div className="text-primary text-3xl md:text-7xl font-semibold max-w-4xl">
          Real Stories, Real Success: Hear From Our Khelo Community
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Whatpeoplearesaying;

const testimonials = [
  {
    name: "Rohan Malhotra",
    location: "Mumbai, India",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "I started small with Khelo and within weeks, my predictions began hitting the mark! The platform’s real-time insights are a game-changer. I&apos;ve already cashed out ₹15,000 in winnings. Highly recommend it to anyone who loves strategy and fun.",
    rating: 4.8,
  },
  {
    name: "Ananya Verma",
    location: "Bangalore, India",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "As someone who loves cricket and finance, Khelo combines the best of both worlds for me. Their prediction markets are spot-on, and the interface is super user-friendly. Last IPL season, I made ₹7,500 just by trusting my instincts!",
    rating: 5.0,
  },
  {
    name: "Siddharth Kumar",
    location: "Delhi, India",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Khelo helped me understand markets better while making money. It’s not just about luck—it’s strategy and insights. I use my cryptocurrency earnings to reinvest in other markets.",
    rating: 4.6,
  },
  {
    name: "Priya Joshi",
    location: "Pune, India",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "I love the vibrant community on Khelo! The shared tips and analysis have helped me refine my game. Thanks to their sports markets, I’ve made over ₹20,000 in the last 3 months.",
    rating: 4.9,
  },
  {
    name: "Aditya Mehta",
    location: "Hyderabad, India",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Initially skeptical, I joined Khelo to test my knowledge of global events. I’m thrilled to say it exceeded my expectations. The predictions I made during the US elections alone brought in ₹10,000.",
    rating: 4.7,
  },
];
