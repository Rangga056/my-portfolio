"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="flex h-screen flex-col pt-3">
        <motion.div
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-screen w-screen fixed bg-black rounded-b-[100px] top-0 z-[80]"
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-7xl capitalize cursor-default z-[90] w-fit h-fit"
        >
          {pathName === "/" ? "home" : pathName.substring(1)}
        </motion.div>
        <motion.div
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.7 } }}
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-[70]"
        />
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
