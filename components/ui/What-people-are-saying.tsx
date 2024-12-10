import React from "react";
import { AnimatedTestimonials } from "./testimonials";

const Whatpeoplearesaying = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col gap-6 justify-center align-middle items-center w-full py-5 md:px-20">
      <div className="small-tagline bg-primary/15 max-w-max px-2 rounded-xl">
        <span className="text-primary">What people are talking about?</span>
      </div>
      <div className="bg-background w-full flex flex-col justify-center align-middle items-center  md:rounded-3xl md:px-10 px-2 py-5 text-center">
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
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "I started small with Khelo and within weeks, my predictions began hitting the mark! The platform’s real-time insights are a game-changer. I&apos;ve already cashed out ₹15,000 in winnings. Highly recommend it to anyone who loves strategy and fun.",
    rating: 4.8,
  },
  {
    name: "Ananya Verma",
    location: "Bangalore, India",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "As someone who loves cricket and finance, Khelo combines the best of both worlds for me. Their prediction markets are spot-on, and the interface is super user-friendly. Last IPL season, I made ₹7,500 just by trusting my instincts!",
    rating: 5.0,
  },
  {
    name: "Siddharth Kumar",
    location: "Delhi, India",
    src: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Khelo helped me understand markets better while making money. It’s not just about luck—it’s strategy and insights. I use my cryptocurrency earnings to reinvest in other markets.",
    rating: 4.6,
  },
  {
    name: "Priya Joshi",
    location: "Pune, India",
    src: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "I love the vibrant community on Khelo! The shared tips and analysis have helped me refine my game. Thanks to their sports markets, I’ve made over ₹20,000 in the last 3 months.",
    rating: 4.9,
  },
  {
    name: "Aditya Mehta",
    location: "Hyderabad, India",
    src: "https://randomuser.me/api/portraits/men/30.jpg",
    quote:
      "Initially skeptical, I joined Khelo to test my knowledge of global events. I’m thrilled to say it exceeded my expectations. The predictions I made during the US elections alone brought in ₹10,000.",
    rating: 4.7,
  },
];
