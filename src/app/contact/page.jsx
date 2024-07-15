"use client"
import toast, { Toaster } from 'react-hot-toast';
import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import emailjs from "@emailjs/browser";
import {slideIn} from "../../components/Motion";
import {styles} from "../../components/Styles";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        des: "(+880) 178 848 2775"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        des: "hossainshabbir51@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        des: "Gazipur, Dhaka, Bangladesh"
    },
]
const Contact = () => {

    // service_s086zxl
    // template_lau62pa
    // 4-Uo5ZMCgrDWYFY-8
    // iozn0fg4AS1bcAh3au9D1
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: ""
    });
    // const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value })
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // setLoading(true);
      emailjs.send("service_s086zxl", "template_8hewqki",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Shabbir",
          to_email: "hossainshabbir51@gmail.com",
          message: form.message
        },
        "4-Uo5ZMCgrDWYFY-8"
      )
        .then(() => {
          // setLoading(true);
          toast.success("Thank you. I will get back with you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: ""
          })
          
          ,
          (error)=>{
          //  setLoading(false);
           toast.error(error.message);
          }
        })
    }
    return (
      <div className="container mx-auto xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 items-center justify-around overflow-hidden xl:mb-6">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#121222] p-10 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <div className='flex flex-col xl:flex-row gap-4'>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="bg-[#27272c] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is your email?"
                className="bg-[#27272c] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            </div>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Your Message</span>
              <textarea
                // type="text"
                rows="3"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="What do you want to say?"
                className="bg-[#27272c] py-4 px-6 placeholder:text-secondary focus:border-accent text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-accent py-3 px-8 outline-none w-fit text-primary font-bold shadow-md shadow-primary rounded-xl"
            >
              {/* {loading ? "Sending..." : "Send"} */}
              Send
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
         <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-6'>
                            {info.map((info, index) => {
                                return (
                                    <li key={index} className=' flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] flex justify-center items-center xl:h-[72px] bg-[#27272c] '>
                                            <div className='  text-[28px] text-accent'>
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <p>{info.title}</p>
                                            <h3 className='text-white/50'>{info.des}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
        </motion.div>
        <Toaster
    position="bottom-center"
    reverseOrder={false}
  />
      </div>
    )
  }

export default Contact;


{/* <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-6'>
                            {info.map((info, index) => {
                                return (
                                    <li key={index} className=' flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] flex justify-center items-center xl:h-[72px] bg-[#27272c] '>
                                            <div className='  text-[28px] text-accent'>
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <p>{info.title}</p>
                                            <h3 className='text-white/50'>{info.des}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> */}