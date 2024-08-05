import { TdCard } from "./TdCard";

export default function Projects() {
    const projects = [
        {
            title: "SPUD",
            image: "/projects/projects_spud.png",
            description: "I worked as a backend developer for Spud.ca, where I helped implement the WorkWave third-party API to provide ETA information for their grocery ecommerce platform. I also optimized caching, transformed data, and parsed information to present invoice data more effectively.",
            url: "https://about.spud.com",
        },
        {
            title: "Sandals/Beaches",
            image: "/projects/projects_sandals.png",
            description: "Developed a tokenization strategy for a credit card processing system. Created content management tools for Sandals.com and Beaches.com. Designed backend processes for email marketing campaigns targeting specific client groups. Additionally, developed several APIs and scheduled automated tasks.",
            url: "https://sandals.com",
        },
        {
            title: "Soltec",
            image: "/projects/projects_soltec.png",
            description: "Configured Prestashop 8 on Hostinger using a VPS. Set up general settings, including language, currency, theme, contact information, SEO, search module, data import (products, categories, vendors, clients), and DNS configuration.",
            url: "https://soltec.hn",
        },
        {
            title: "All dental",
            image: "/projects/projects_alldental.png",
            description: "This project is a static website built using Hostinger's static site builder. It's for our family business, where my wife leads the clinic, and I handle all the technical aspects.",
            url: "https://alldentalhn.com",
        },
    ];

    return (
        <div className="h-[45rem]">
            <h2 className="text-center text-blue-500 pt-20">Professional Projects</h2>
            <div className="justify-center bg-black grid w-full md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {
                    projects.map((project)=> {
                        return <TdCard {...project} key={project.title}/>
                    })
                }
            </div>
        </div>
    );
}