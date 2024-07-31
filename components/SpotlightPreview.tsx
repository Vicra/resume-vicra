import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import CIcon from '@coreui/icons-react';
import { cibGithub, cibCodewars } from '@coreui/icons';

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export default function SpotlightPreview() {
    const words = [
        {
          text: "Hello, my name is",
          className: "text-white",
        },
        {
            text: "Victor.",
            className: "text-blue-500 dark:text-blue-500",
          },
        {
          text: "Nice to meet you.",
          className: "text-white",
        },
    ];

  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <Image
            src="/avatar.jpeg"
            width={250}
            height={250}
            alt="Picture of the author"
            className="mx-auto"
        />
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
           I'm a fullstack engineer that loves building high quality software. My area of expertize throughout these 8 years has been ecommerce, APIs and content management to name a few. 
        </p>

        <div className="max-w-10 mx-auto grid">
            <a href="https://github.com/vicra" target="_blank">
                <CIcon icon={cibGithub} size="sm" style={{
                    fill: "white"
                }} />
            </a>
        </div>
      </div>
    </div>
  );
}
