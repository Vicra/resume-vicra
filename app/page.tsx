"use client";

import { SpotlightPreview } from "@/components/SpotlightPreview";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function ThreeDCardDemo() {
  return (
    <>
    <div className="bg-zinc-950 dark:bg-white">
        <SpotlightPreview/>
        <Testimonials/>
    </div>
    </>
  );
}
