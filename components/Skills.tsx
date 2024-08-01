import SkillCard from "./SkillCard";


export default function Skills() {
    const skills = [
        {
            title: "Backend",
            image: "/stack/fe.png",
            description: "I build scalable and robust backend systems that ensure smooth and secure data processing",
            icons: [
                "cibAuth0",
                "cibPostman",
                "cibRedis"
            ]
        },
        {
            title: "Frontend",
            image: "/stack/ux.png",
            description: "I focus on delivering responsive and visually appealing interfaces for an outstanding user experience.",
            icons: [
                "cibReact",
                "cibNextJs",
                "cibCss3Shiled"
            ]
        },
        {
            title: "DevOps",
            image: "/stack/do.png",
            description: "I streamline development and operations through automation, ensuring efficient and reliable deployment processes.",
            icons: [
                , "cibDocker"
                , "cibAmazonAws"
                , "cibGithub"
            ]
        },
        {
            title: "Database",
            image: "/stack/db.png",
            description: "I design and manage efficient databases, ensuring data integrity and optimal performance for all applications.",
            icons: [
                , "cibMongodb"
                , "cibMysql"
                , "cibOracle"
            ]
        }
    ];

    return (
        <>
            <h2 className="text-center text-blue-500">Skills</h2>
            <div className="justify-center bg-black grid w-full md:grid-cols-2 lg:grid-cols-4 mx-auto">
            {
                skills.map((skill)=> {
                    return <SkillCard {...skill}/>
                })
            }
        </div>
        </>
    );
}