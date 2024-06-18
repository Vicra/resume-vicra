"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Personal Blog",
        link: "https://victorstechsite.wordpress.com/",
        thumbnail: "/projects_blog.png",
    },
    {
        title: "Static Website using Hostinger App Builder",
        link: "https://alldentalhn.com",
        thumbnail: "/projects_alldental.png",
    },
    {
        title: "Prestashop eCommerce",
        link: "https://soltec.hn",
        thumbnail: "/projects_soltec.png",
    },
    {
        title: "Integrate ETA for deliveries of Online Groceries site",
        link: "https://about.spud.com",
        thumbnail: "/projects_spud.png",
    },
    {
        title: "Static Website using Hostinger App Builder",
        link: "https://alldentalhn.com",
        thumbnail: "/projects_alldental.png",
    },
    {
        title: "Prestashop eCommerce",
        link: "https://soltec.hn",
        thumbnail: "/projects_soltec.png",
    },
    {
        title: "Personal Blog",
        link: "https://victorstechsite.wordpress.com/",
        thumbnail: "/projects_blog.png",
    },
    {
        title: "Integrate ETA for deliveries of Online Groceries site",
        link: "https://about.spud.com",
        thumbnail: "/projects_spud.png",
    },
];
