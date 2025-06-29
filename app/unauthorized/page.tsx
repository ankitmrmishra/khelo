import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex justify-center align-middle items-center text-center flex-col">
      You Are unauthorized for whatever you were doing, go and play some bet,
      earn money, let me handle this with regards
      <Link className="text-blue-500" href={"https://ankitmishra.xyz"}>
        {" "}
        Ankit Mishra
      </Link>
    </div>
  );
}
