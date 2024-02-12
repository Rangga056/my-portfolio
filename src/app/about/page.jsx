"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full wrapper"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>
        <div className="flex flex-col gap-24 md:32 lg:48">
          <div className="flex flex-col gap-12 justify-end">
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
              cycling, and playing soccer. My goal is to have my own tech /
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
          <div>skill</div>
          <div>experience</div>
        </div>
        <div className="hidden">SVG</div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
