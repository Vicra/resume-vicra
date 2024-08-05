import SkillCard from "./SkillCard";

export default function Skills() {
    const skills = [
        {
            title: "Backend",
            image: "/stack/fe.png",
            description: "I develop scalable and robust backend systems and APIs that facilitate smooth and secure data processing. My focus is on building architecture that supports high performance and reliability, ensuring that data handling is both efficient and safeguarded against potential vulnerabilities.",
            icons: [
                "cibAuth0",
                "cibPostman",
                "cibRedis"
            ]
        },
        {
            title: "Frontend",
            image: "/stack/ux.png",
            description: "I specialize in creating responsive and visually appealing interfaces that provide an outstanding user experience. My attention to detail ensures that the design is not only aesthetically pleasing but also intuitive and user-friendly.",
            icons: [
                "cibReact",
                "cibNextJs",
                "cibCss3Shiled"
            ]
        },
        {
            title: "Database",
            image: "/stack/db.png",
            description: "I design and manage efficient databases, prioritizing data integrity and optimizing performance for all applications. My approach ensures that the systems are reliable, scalable, and capable of handling complex data operations seamlessly.",
            icons: [
                , "cibMongodb"
                , "cibMysql"
                , "cibOracle"
            ]
        },
        {
            title: "DevOps",
            image: "/stack/do.png",
            description: "I streamline development and operations through automation, ensuring efficient and reliable deployment processes. By implementing automated workflows and tools, I enhance the consistency and speed of software delivery, reducing downtime and minimizing errors.",
            icons: [
                , "cibDocker"
                , "cibAmazonAws"
                , "cibGithub"
            ]
        },
    ];

    return (
        <div className="">
            <h2 className="text-center text-blue-500 pt-20">Technical Skills</h2>
            <div className="justify-center bg-black grid w-full md:grid-cols-2 lg:grid-cols-4 mx-auto">
                {
                    skills.map((skill)=> {
                        return <SkillCard {...skill} key={skill.title}/>
                    })
                }
            </div>
        </div>
    );
}