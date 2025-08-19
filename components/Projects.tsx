import { TdCard } from "./TdCard";

export default function Projects() {
    const projects = [
        {
            title: "Meancycles Redesign",
            image: "/projects/projects_meancycles.png",
            description:
                "I worked on the redesign of Meancycles website, a motorcycle and bicycle shop in Miami. The project involved coding a new design for their website, which was built using ColdFusion + CSS2. The redesign aimed to enhance the user experience and modernize the site's appearance.",
            url: "https://meancycles.com",
        },
        {
            title: "Travel Agent Portal for Sandals/Beaches",
            image: "/projects/projects_taportal.png",
            description:
                "Designed and helped develop a newer version of the Travel Agents Portal for Sandals/Beaches, a leading resorts chain in the Caribbean. The portal allows travel agents to manage bookings, view client information, and access marketing materials. It was built using Next.js, MUI and microservices (java and golang), with a focus on user-friendly navigation and efficient data management.",
            url: "https://taportal.sandals.com",
        },
        {
            title: "Sandals/Beaches",
            image: "/projects/projects_sandals.png",
            description:
                "Developed a tokenization strategy for a credit card processing system. Created content management tools for Sandals.com and Beaches.com. Designed backend processes for email marketing campaigns targeting specific client groups. Additionally, developed several APIs and scheduled automated tasks.",
            url: "https://sandals.com",
        },
        {
            title: "SPUD",
            image: "/projects/projects_spud.png",
            description:
                "I worked as a backend developer for Spud.ca, where I helped implement the WorkWave third-party API to provide ETA information for their grocery ecommerce platform. I also optimized caching, transformed data, and parsed information to present invoice data more effectively.",
            url: "https://about.spud.com",
        },
        {
            title: "Soltec",
            image: "/projects/projects_soltec.png",
            description:
                "Configured Prestashop 8 on Hostinger using a VPS. Set up general settings, including language, currency, theme, contact information, SEO, search module, data import (products, categories, vendors, clients), and DNS configuration.",
            url: "https://soltec.hn",
        },
        {
            title: "All dental",
            image: "/projects/projects_alldental.png",
            description:
                "This project is a static website built using Hostinger's static site builder. It's for our family business, where my wife leads the clinic, and I handle all the technical aspects.",
            url: "https://alldentalhn.com",
        },
    ];

    return (
        <div>
            <h2 className="text-center text-blue-500 pt-20">
                Professional Projects
            </h2>
            <div className="justify-center bg-black grid w-full md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 mx-auto">
                {projects.map((project) => {
                    return <TdCard {...project} key={project.title} />;
                })}
            </div>
        </div>
    );
}
