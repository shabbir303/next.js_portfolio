
"use client"
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNodedotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const about = {
    title: "About",
    des: "I'm a Front-end Developer. I bring visual design concepts to life through code, ensuring the user experience is seamless and enjoyable.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Shabbir Hossain Shovo"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+880) 178 848 2775"
        },
        {
            fieldName: "Learning Experience",
            fieldValue: "1+ years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Bangladesh"
        },
        {
            fieldName: "Email",
            fieldValue: "hossainshabbir51@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "Bangla, English, Hindi"
        },
    ]
}

const education = {
    icon: "",
    title: "My Education",
    des: "I have completed my graduation and successfully finished a programming course. This achievement has enhanced my skills and prepared me for various opportunities in the tech industry.",
    items: [
        {
            institute: "National University",
            degree: "ECE",
            duration: "2017-2023"
        },
        {
            institute: "Rajendrapur Cantonment Public School & Colleage",
            degree: "HSC",
            duration: "2014-2016"
        },
        {
            institute: "Cantonment Board High School, Rajendrapur",
            degree: "SSC",
            duration: "2014"
        },
        {
            institute: "Programming Hero",
            degree: "Web Development using MERN",
            duration: "2023-2024"
        },

    ]
}

const skills = {
    title: "Skills",
    des: "I have acquired diverse skills in front-end development, mastering technologies like React and Next.js. This expertise allows me to create dynamic and responsive user interfaces efficiently.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "Css 3"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <RiNextjsFill />,
            name: "Next.js"
        },
        {
            icon: <SiTypescript />,
            name: "Typescript"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwindcss"
        },
        {
            icon: <SiNodedotjs />,
            name: "Node.js"
        },
        {
            icon: <SiMongodb />,
            name: "Mongodb"
        },
        {
            icon: <SiExpress />,
            name: "Express.js"
        },
    ]
}
const resume = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="education"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* <TabsContent value="education" className="w-full">
                            content
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent> */}

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.des} </p>
                                <ScrollArea className="h-[400px] ">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((edu, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{edu.duration} </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{edu.degree} </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/50">{edu.institute} </p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.des} </p>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] xl:gap-[30px]">
                                    {skills.skillList.map((skill, index)=>{
                                        return(
                                            <li key={index} className=" ">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] rounded-xl bg-[#232329] flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300 text-center  p-[20px]">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            {skill.name}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full">
                            content
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default resume;