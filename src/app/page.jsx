// import Image from "next/image";
"use clinet"

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { BsDownload } from "react-icons/bs";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row justify-between items-center xl:pt-8 pb-24 ">
          <div className="text-center xl:text-left xl:w-[800px] py-3">
            <h1 className="h3">Software Developer</h1>
            <h1 className="h1">Hello I&apos;m <br /><span className="h1 text-accent" >Shabbir Hossain Shovo</span></h1>
            <h1>I&apos;m a passionate software developer with expertise in creating efficient and innovative solutions. I have a strong background in web development and enjoy tackling complex problems with creative and effective strategies. My goal is to deliver high-quality software that meets user needs and exceeds expectations.</h1>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Button className="flex gap-3 p-[20px] rounded-3xl border-[1px] items-center justify-center mx-auto xl:mx-0 xl:justify-start border-accent mt-5" varient="outlined ">
                <h1 className="text-accent  uppercase flex items-center gap-3 text-[20px] font-bold">Download Cv <BsDownload /></h1>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyle="flex gap-6" iconStyle="text-[15px] text-accent p-[10px] border-[1px] border-accent rounded-full mt-5 hover:bg-accent hover:text-primary transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
