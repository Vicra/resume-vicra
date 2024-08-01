import Image from "next/image";
import CIcon from '@coreui/icons-react';
import { 
    cibReact
    , cibNextJs
    , cibCss3Shiled
    
    , cibPostman
    , cibAuth0
    , cibRedis
    
    , cibDocker
    , cibAmazonAws
    , cibGithub
    
    , cibMongodb
    , cibMysql
    , cibOracle

} from '@coreui/icons';
import CButton from '@coreui/icons-react';


const recto: any = {
    cibReact
    , cibNextJs
    , cibCss3Shiled

    , cibPostman
    , cibAuth0
    , cibRedis

    , cibDocker
    , cibAmazonAws
    , cibGithub
    , cibMongodb
    , cibMysql
    , cibOracle
}

export default function SkillCard(props: any) {
    return (
        <div className="p-4 text-center mt-1 my-14">
            <h4 className="text-gray-300 mb-3">{props.title}</h4>
            <Image
                src={props.image}
                width={200}
                height={200}
                alt="Picture of stack"
                className="mx-auto pb-3"
            />  
            <p className="text-blue-200">{props.description}</p>

            {/* grid w-full md:grid-cols-2 lg:grid-cols-4 mx-auto */}
            <div 
                className="flex justify-center grid-cols-4 mx-auto align-center space-x-3"
            >
                {
                    props.icons && props.icons.map((icon: any) => {
                        return <CIcon 
                        key={icon}
                        icon={recto[icon]} size="sm" style={{
                            fill: "white",
                        }} className="max-w-8"/>
                    })
                }
            </div>
        </div>
    );
}