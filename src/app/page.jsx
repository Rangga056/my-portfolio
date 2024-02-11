import Image from "next/image";

const Homepage = () => {
  return (
    <div className="relative overflow-hidden flex md:items-center flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12">
      <div className="h-1/2 lg:h-full md:w-3/4 lg:w-5/6 relative">
        <Image
          src="/hero.png"
          alt="hero image"
          fill
          className="object-contain"
        />
      </div>
      <div className="h-1/2 lg:h-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Crafting The Best Web Experiences, Developing Tomorrow.
        </h1>
        <p className="md:text-lg">
          Welcome to my digital portfolio, a convergence of innovation and
          creativity. With a meticulous eye for aesthetics and a proficient
          command of coding languages, I present a diverse array of projects
          embodying my unwavering dedication to excellence.{" "}
        </p>
        <div className="w-full justify-center md:justify-start flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
      <div className="blob center " />
    </div>
  );
};

export default Homepage;
