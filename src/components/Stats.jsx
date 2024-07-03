"use client"
import CountUp from "react-countup";


const Stats = () => {
    const stats = [
        {
            number: 1,
            title: "Years of learning experience",
        },
        {
            number: 5,
            title: "Projects completed",
        },
        {
            number: 8,
            title: "Techonologies mastered",
        },
        {
            number: 506,
            title: "Code commits",
        },
    ]
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index)=>
                     <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <CountUp
                        end={item.number}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-bold "
                        />
                        <p className={`${item.title.length<15?"max-w-[100px]":"max-w-[150px]"}`}>{item.title}</p>
                     </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Stats;