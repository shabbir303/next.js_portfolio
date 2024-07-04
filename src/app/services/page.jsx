"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const Service = () => {
    const services = [{
        num: 1,
        title: "React.js & Next.js Development",
        href: "",
        description: "As a front-end developer specializing in React and Next.js, I offer comprehensive services to build dynamic, high-performance web applications. My expertise ensures efficient, scalable, and user-friendly interfaces tailored to your specific needs."
    },
    {
        num: 2,
        title: "React Native Development",
        href: "",
        description: "As a mobile app developer specializing in React Native, I offer expert services to create high-quality, cross-platform mobile applications. My skills ensure seamless performance and an engaging user experience across both iOS and Android devices."
    },
    {
        num: 3,
        title: "UI/UX Design",
        href: "",
        description: "As a UI/UX designer specializing in Figma and React, I provide services to design and develop visually appealing and user-centric interfaces. My expertise ensures a seamless blend of aesthetics and functionality, creating intuitive and engaging user experiences."
    }
    ]
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[64px]'
                >
                    {services.map((service, index) => {
                        return (<div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div className='flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                    {service.num}
                                </div>
                                <Link href={service.href} className='w-[70px] h-[70px] bg-white rounded-full group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-3xl text-primary font-bold'/>
                                </Link>
                            </div>
                            <h1 className='text-outline h3 group-hover:text-outline-hover transition-all duration-500'>{service.title}</h1>
                            <p className='text-white/35'>{service.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>)
                    }
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Service;