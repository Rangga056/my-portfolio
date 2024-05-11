"use client";

import Brain from "@/components/Brain";
import SkillItem from "@/components/SkillItem";
import { skills } from "../../constant";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  console.table(skills);
  return (
    <motion.div
      className="md:h-[calc(100vh-6rem)] wrapper p-4"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="flex flex-col gap-24 lg:gap-32 md:p-8 lg:w-2/3 lg:pr-6 xl:w-1/2">
          {/*  Biography  */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl uppercase">Biography</h1>
            <p className="text-lg">
              My name is Muhammad Rangga Miftahul Falah or you can call me
              Rangga. I am currently a collegefe student at Universitas Nasional
              in Jakarta. As an aspiring Developer, I am driven by passion and
              interest. While my professional journey is just beginning, I am
              eager to immerse myself in web development and develop my skills
              in software engineering.{" "}
            </p>
            <p className="text-lg">
              {" "}
              Outside of being a developer, I enjoy sports such as running,
              cycling, and playing soccer. My goal is to have my own tech or
              software company, and I am excited to embark on this journey of
              growth and discovery.
            </p>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKills  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl uppercase"
            >
              Skills
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {/* Skill list */}
              {skills.map((item) => (
                <SkillItem key={item.index} skillName={item.name} />
              ))}
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div
            className="flex flex-col gap-12 justify-center pb-32"
            ref={experienceRef}
          >
            {/* Experiences */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl uppercase"
            >
              Experience
            </motion.h1>
            <motion.span
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="italic text-lg text-gray-500"
            >
              Currently i have no proffesional experience yet
            </motion.span>
            {/* <motion.div 
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
             
              <div className="flex justify-between h-48">
               
                <div className="w-1/3 ">
                 
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                 
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
               
                <div className="w-1/7 flex justify-center">
                 
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
             
                <div className="w-1/3 "></div>
              </div>
              
              <div className="flex justify-between h-48">
             
                <div className="w-1/3 "></div>
                
                <div className="w-1/6 flex justify-center">
                 
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                   
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
              
                <div className="w-1/3 ">
                
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
            
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.
                  </div>
                 
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024
                  </div>
                 
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
             
              <div className="flex justify-between h-48">
                
                <div className="w-1/3 ">
                  
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
         
                <div className="w-1/6 flex justify-center">
                
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                
                <div className="w-1/3 "></div>
              </div>
            </motion.div> */}
            {/*ganti ke motion div*/}
          </div>
        </div>
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
