"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full wrapper"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-max py-4 grid grid-cols-1 md:grid-cols-2 justify-center lg:items-center gap-4 2xl:gap-0 px-4 sm:px-8 md:px-12">
        <Image
          src="/hero.png"
          alt="hero image"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />
        <div className="flex flex-col gap-4 items-center lg:justify-center z-10">
          <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px]">
            Crafting The Best Experiences.
          </h1>
          <p className="text-[20px] font-normal leading-[30px] tracking-[2%]">
            Welcome to my digital portfolio, a convergence of innovation and
            creativity. I present a diverse array of projects embodying my
            unwavering dedication to excellence.{" "}
          </p>
          <div className="w-full justify-center md:justify-start flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg border border-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg border border-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="blob center overflow-hidden z-[-1] w-[400px] h-[400px] md:w-[520px] md:h-[520px]" />
      </div>
    </motion.div>
  );
};

export default Homepage;
