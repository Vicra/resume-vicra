"use client";

import SpotlightPreview from "@/components/SpotlightPreview";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function ThreeDCardDemo() {
  return (
    <div className="bg-zinc-950 bg-black">
        <SpotlightPreview/>
        <Skills/>
        <Projects/>
    </div>
  );
}
