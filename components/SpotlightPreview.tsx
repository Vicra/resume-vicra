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
          className: "text-white md:text-2xl lg:text-4xl",
        },
        {
            text: "Victor.",
            className: "text-blue-500 dark:text-blue-500 md:text-2xl lg:text-4xl",
          },
        {
          text: "Nice to meet you.",
          className: "text-white md:text-2xl lg:text-4xl"
        }
    ];

  return (
    <div className="sm:h-[50rem] md:h-[45rem] xl:h-[55rem] w-full rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
            <TypewriterEffectSmooth words={words} className="sm:text-3xl" />
        </div>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
            I am a full-stack engineer with 8 years of experience in building high-quality software. My expertise spans ecommerce, APIs, authentication, and content management systems. I am passionate about delivering exceptional digital experiences and am always eager to tackle new challenges. Check out my <a href="/victor ramirez - resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>.
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
