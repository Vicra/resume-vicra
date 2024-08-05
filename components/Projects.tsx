import { TdCard } from "./TdCard";

export default function Projects() {
    const projects = [
        {
            title: "SPUD",
            image: "/projects/projects_spud.png",
            description: "I worked as a backend developer for spud.ca, here I helped implement the WorkWave third-party API to provive ETA information for their groceries ecommerce. I also performed caching optimizations, data transformations and parsing for presenting invoice data",
            url: "https://about.spud.com",
        },
        {
            title: "Sandals/Beaches",
            image: "/projects/projects_sandals.png",
            description: "Built tokenization strategy for credit card processing system. Built content administrators for sandals.com and beaches.com sites. Built email marketing campaigns backend processes for targeted clients. Built several APIs and scheduled tasks.",
            url: "https://sandals.com",
        },
        {
            title: "Soltec",
            image: "/projects/projects_soltec.png",
            description: "Configured Prestashop 8 version on Hostinger using a VPS. Setup general settings like: language, currency, theme, contact info, SEO, search module, import data (products, categories, vendors, clients) and DNS configuration.",
            url: "https://soltec.hn",
        },
        {
            title: "All dental",
            image: "/projects/projects_alldental.png",
            description: "This project is a static website, built with hostingers static site builder. This is the familys business, my wife is the head of this clinic and I am her go-to tech guy.",
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