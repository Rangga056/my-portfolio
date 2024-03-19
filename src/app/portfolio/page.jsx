"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-100 to-blue-100",
    title: "Airbnb Clone",
    desc: "An Airbnb clone aimed at providing a platform for users to list, discover, and book accommodations worldwide.",
    img: "https://github.com/Rangga056/airbnb-clone/assets/136163122/d7f64e59-450c-403c-b068-71db1b6c6d4a",
    link: "https://airbnb-clone-ebon-nine.vercel.app/",
  },
  {
    id: 2,
    color: "from-red-100 to-blue-100",
    title: "Eclipse Summit",
    desc: "Eclipse Summit is an advanced event management web application that empowers users to seamlessly organize and participate in events.",
    img: "https://github.com/Rangga056/eclipse-summit/assets/136163122/235fb459-8f4e-489e-91c1-d541e96aa0b4",
    link: "https://eclipse-summit.vercel.app/",
  },
  {
    id: 3,
    color: "from-blue-100 to-violet-100",
    title: "Eclipse Estate",
    desc: "Eclipse Estate is a user-friendly web application designed to streamline real estate transactions. Whether you're buying, renting, or selling properties like houses and villas, Eclipse Estate provides a seamless experience.",
    img: "https://github.com/Rangga056/eclipse-estate/assets/136163122/fcc67f63-38c7-490b-9f03-b446b30a51d2",
    link: "https://github.com/Rangga056/eclipse-estate",
  },
  {
    id: 4,
    color: "from-violet-100 to-purple-100",
    title: "Eclipse Movie Web",
    desc: "A simple movie website using HTML, CSS, and Javascript with the themoviedb API",
    img: "https://github.com/Rangga056/eclipse-summit/assets/136163122/9983412f-b94e-44d5-ad61-284bf2818b13",
    link: "https://rangga056.github.io/eclipse-movie-app/",
  },
  {
    id: 5,
    color: "from-purple-100 to-red-100",
    title: "Eclipse Weather App",
    desc: "A simple weather app using HTML, CSS, and Javascript with openweather API",
    img: "https://github.com/Rangga056/eclipse-summit/assets/136163122/16e72a4c-5e1e-40bc-b256-cf33ce0dea86",
    link: "https://rangga056.github.io/eclipse-weather-app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-scren h-[calc(100dvh-6rem)] flex flex-col md:gap-y-8 gap-y-16 items-center justify-center text-6xl lg:text-8xl text-center">
          {" "}
          My Works
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
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-6 items-center overflow-x-scroll snap-center">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-red-100" />
            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen snap-center w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center text-black">
                  <div
                    className="flex flex-col gap-8 justify-start
                  "
                  >
                    <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image
                        src={item.img}
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col gap-3 items-start justify-center h-full">
                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex justify-start"
                    >
                      <button className="p-4 text-md  lg:text-lg bg-black text-white font-semibold m-4 rounded-lg">
                        {item.id === 2 ? "See Code" : "See Demo"}
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen md:mt-8 lg:mt-10 flex flex-col gap-16 md:gap-8 lg:gap-6 items-center justify-center text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text color="#000">
              <textPath xlinkHref="#circlePath" className="text-xl ">
                Full-stack Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            className="w-20 h-20 md:w-32 md:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center md:text-xl"
            href="/contact"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
