"use client";

import SpotlightPreview from "@/components/SpotlightPreview";
import Testimonials from "@/components/Testimonials";
import ProjectsParallax from "@/components/ProjectsParallax";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'


export default function ThreeDCardDemo() {
  return (
    <>
    <div className="bg-zinc-950 dark:bg-white">
        <SpotlightPreview/>
        <ProjectsParallax/>
        {/* <Testimonials/> */}
    </div>
    </>
  );
}
