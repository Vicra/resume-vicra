"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Timeline() {
  return (
    <TracingBeam className="bg-black">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative bg-black text-white">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="pb-10 bg-black">
            <h2 className="rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={"text-xl mb-4"}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg pb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "July 2016 - Started my first job as Web Developer",
    description: (
      <>
        <p>
          I was excited to start my career as a Software Engineer. I remember the first ticket that I solved, it was related to an undefined key on a struct, I also rememver the first call I had with one of the database developers overseas and the struggle of trying to understand their accent. Thankfully we were both very patient and were able to resolve.
        </p>
        <p>
          This job opportunity allowed me to grow as a software engineer and also left me with enough time to finish my degree in Computer Science. I met a lot of great people here and learned a lot from my leads.
        </p>
      </>
    ),
    badge: "First Steps",
    image:
      "/july2016.jpg",
  },
  {
    title: "Dec 2017 - Cristmas Party and Friends",
    description: (
      <>
        <p>
          Had some cool time at the Christmas Party with my collegues, a lot of great developers from which I learned a lot and appreciate the time we had together.
        </p>
      </>
    ),
    badge: "",
    image:
      "/dec2017.jpg",
  },
  {
    title: "Sept 2018 - Computer Science Engineer",
    description: (
      <>
        <p>
          After 5 of the toughest but also greatest years of my life I finally graduted and got my bs in Computer Science. 
        </p>
        <p>
          My fellow students and now most closest friends helped me cope with the pressure. Now we meet for hanging out, talk about the good times, have some pizza and gaming.
        </p>
      </>
    ),
    badge: "Success!",
    image:
      "/sept2018.jpg",
  },
  {
    title: "May 2021 - Remote is the new way",
    description: (
      <>
        <p>
          Started my first remote job for a client over in Vancouver, it was a great experience working with ecommerce and groceries. I met some of the most talented developers and managers here.
        </p>
      </>
    ),
    badge: "",
    image:
      "/may2021.jpeg",
  }
];
