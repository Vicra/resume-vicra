"use client";

import SpotlightPreview from "@/components/SpotlightPreview";
import Testimonials from "@/components/Testimonials";
import ProjectsParallax from "@/components/ProjectsParallax";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Timeline } from "@/components/Timeline";


export default function ThreeDCardDemo() {
  return (
    <div className="bg-zinc-950 bg-black">
        <SpotlightPreview/>
        {/* <ProjectsParallax/>*/}
        {/* <Testimonials/> */}
        {/* <Timeline/> */}
    </div>
  );
}
