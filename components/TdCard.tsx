"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function TdCard(props:any) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="dark:bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] dark:border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold dark:text-neutral-600 text-white"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="dark:text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
        >
          {props.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
            <a href={props.url} target="_blank">
                <Image
                    src={props.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
            </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
