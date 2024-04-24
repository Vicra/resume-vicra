// "use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black/[0.96] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Victor was delightful. He always brought with himself a positive attitude and even under stressful circumstances, he provided comfort for the whole team. It was inspiring to work with Victor as he motivated everyone to work diligently since he led by example. He would not give up until a feature is built or a bug is fixed. I would recommend Victor to any organization without a doubt. He brings in solid expertise, a positive and uplifting attitude and holds himself and his team accountable at all times.",
    name: "Arvin Ansari",
    title: "Senior Full-Stack Engineer @ Jasmine Energy | TypeScript, Node.js, React, Svelte",
  },
  {
    quote:
      "Working with Victor was delightful. He always brought with himself a positive attitude and even under stressful circumstances, he provided comfort for the whole team. It was inspiring to work with Victor as he motivated everyone to work diligently since he led by example. He would not give up until a feature is built or a bug is fixed. I would recommend Victor to any organization without a doubt. He brings in solid expertise, a positive and uplifting attitude and holds himself and his team accountable at all times.",
    name: "Arvin Ansari",
    title: "Senior Full-Stack Engineer @ Jasmine Energy | TypeScript, Node.js, React, Svelte",
  },
  {
    quote:
      "Working with Victor was delightful. He always brought with himself a positive attitude and even under stressful circumstances, he provided comfort for the whole team. It was inspiring to work with Victor as he motivated everyone to work diligently since he led by example. He would not give up until a feature is built or a bug is fixed. I would recommend Victor to any organization without a doubt. He brings in solid expertise, a positive and uplifting attitude and holds himself and his team accountable at all times.",
    name: "Arvin Ansari",
    title: "Senior Full-Stack Engineer @ Jasmine Energy | TypeScript, Node.js, React, Svelte",
  },
];
