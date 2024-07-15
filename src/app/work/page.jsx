"use client";

import React, { useState } from 'react';

import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from 'swiper/react';
import "./swiper.css";
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Navigation } from 'swiper/modules';
import WorkSliderButtons from '@/components/WorkSliderButtons';
import Image from 'next/image';
import Timeforge from "./Timeforge.png";
import OnlineMarket from "./OnlineMarketPlace.png"
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
    {
        num:"01",
        category:"Full-stack Project",
        title:"Time-Forge",
        description:"This is a team project.We created this app for online meeting scheduling. Here anyone can schedule meeting and also remainder in it.",
        stack:[
            {name:"React.js"},{name:"Node.js"},{name:"TypeScript"},{name:"Mongoose"}, {name:"Express.js"},{name:"antdesign"}
        ],
        image:"/sabbir.png",
        live:"https://timeforge.vercel.app/",
        github:"https://github.com/CareerNavigators/timeforge"
       
    },
    {
        num:"02",
        category:"Full-stack Project",
        title:"Online-Marketplace",
        description:"Here anyone can post a job and also can apply jobs.",
        stack:[
            {name:"React.js"},{name:"Node.js"},{name:"Tailwind"},{name:"Express.js"}, {name:"Mongodb"},{name:"firebase"}
        ],
        image:"/sabbir.png",
        live:"https://online-marketplace-1c947.firebaseapp.com/",
        github:"https://github.com/shabbir303/online-marketplace-client"
    },
]

const Work = () => {
    // const swiper = new Swiper();
   
    const [project, setProject] = useState(projects[0]);

    // const swiper = new Swiper()
    const handleSlideChange=(swiper)=>{
        const currentSlide = swiper.activeIndex;
        setProject(projects[currentSlide])
    }

    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
        className="min-h-[80vh] flex flex-col justify-center py-12 px-0"
    >
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
                    <div className='flex flex-col gap-[30px] h-[50%]'>
                        <div className='text-8xl leading-none font-extrabold text-transparent text-outline '>
                            {project.num}
                        </div>
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} </h2>
                        <p className='text-white/60'>{project.description} </p>
                        <ul className='flex gap-2 '>
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className='text-accent text-xl '>
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='border border-white/20 '></div>
                        <div className='flex items-center gap-7 '>
                            <Link href={project.live}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center bg-white/5 items-center group'>
                                            <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-white text-black">
                                            <p>Live Link</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            <Link href={project.github}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center bg-white/5 items-center group'>
                                            <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-white text-black">
                                            <p>Github Link</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-[50%] xl:ml-7 '>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        
                            <SwiperSlide  className='w-full '>
                                <div className="h-[600px] relative  group flex justify-center items-center ">
                                   <div className='w-full h-full relative'>
                                   <Image src={Timeforge} alt="Timeforge" quality={100} fill className='object-contain w-[100%] h-[90%] ' />
                                   </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide  className='w-full '>
                                <div className="h-[600px] relative  group flex justify-center items-center ">
                                   <div className='w-full h-full relative'>
                                   <Image src={OnlineMarket} alt="OnlineMarket" quality={100} fill className='object-contain w-[100%] h-[90%] ' />
                                   </div>
                                </div>
                            </SwiperSlide>
                        
                        <WorkSliderButtons containerStyles="flex gap-2 absolute right-0 xl:right-[220px] bottom-[calc(50%_-_30px)] xl:bottom-[20px] z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover-text-primary text-[22px] w-[44px] h-[44px] gap-[30px] flex flex-col items-center justify-center transition-all mt-[20px]"/>
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
    );
};

export default Work;
 {/* <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                        <div className='text-8xl leading-none font-extrabold text-transparent text-outline '>
                            {project.num}
                        </div>
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} </h2>
                        <p className='text-white/60'>{project.description} </p>
                        <ul className='flex gap-2 '>
                            {project.stack.map((item, index)=>{
                                return(
                                    <li key={index} className='text-accent text-xl '>
                                        
                                        {item.name}
                                        {index !== project.stack.length-1 && ","}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='border border-white/20 '></div>
                        <div className='flex  items-center gap-7 '>
                        <Link href={project.live}>
                          <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center bg-white/5 items-center group'>
                                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black">
                                    <p>Live Link</p>
                                </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        <Link href={project.github}>
                          <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center bg-white/5 items-center group'>
                                    <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black">
                                    <p>Github Link</p>
                                </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%] xl:ml-7'>
                        <Swiper 
                        spaceBetween={30} 
                        slidesPerView={1} 
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                           
                            {projects.map((item, index)=>{
                                return
                                    (<SwiperSlide key={index} className='w-full'>
                                        <div className="h-[300px] relative group flex justify-center items-center bg-pink-50/20">
                                            {item.image}
                                        </div>
                                    </SwiperSlide>)
                                
                            })}
                        </Swiper>
                    </div>
                </div>
            </div> */}
            // containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"