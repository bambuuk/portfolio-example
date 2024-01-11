"use client";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center md:flex-row md:justify-center 
      px-[15px] md:px-[30px] lg:px-20 mt-[190px] md:mt-40 w-full z-[20] gap-10 md:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto items-center md:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold text-white max-w-[600px] 
          w-auto h-auto text-center md:text-start"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md sm:text-lg text-gray-400 my-5 max-w-[600px] text-center md:text-start"
        >
          I&apos;m a Frontend Software Engineer with experience in Website,
          development. Check out my projects and skills.
        </motion.p>
        <motion.a
          href="#skills"
          variants={slideInFromLeft(1)}
          className="py-2 px-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;