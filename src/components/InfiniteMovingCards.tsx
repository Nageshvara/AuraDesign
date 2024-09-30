"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
        "I absolutely love the foundation from AURA! It blends perfectly with my skin tone and lasts all day. Highly recommend!",
      name: "Priya Sharma",
      title: "Satisfied Customer",
    },
    {
      quote:
        "The lipsticks are vibrant and long-lasting. I feel so confident wearing them! AURA has become my go-to brand.",
      name: "Rahul Mehta",
      title: "Beauty Enthusiast",
    },
    {
      quote:
        "I tried AURA's skincare range, and my skin has never felt better. It's like a breath of fresh air! Thank you, AURA.",
      name: "Anjali Desai",
      title: "Skincare Lover",
    },
    {
      quote:
        "The eye shadow palette is stunning! The colors are so rich and blend seamlessly. AURA has truly nailed it!",
      name: "Siddharth Rao",
      title: "Makeup Artist",
    },
    {
      quote:
        "I love the natural ingredients in AURA products. My skin feels nourished and looks radiant. I'm a fan for life!",
      name: "Neha Verma",
      title: "Happy Customer",
    },
  ];
  
