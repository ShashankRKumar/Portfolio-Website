"use client";

import React from "react";
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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[20px]">
            Fullstack Software Engineer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-full flex justify-center items-center py-10 bg-transparent text-white"
        >
          <div className="max-w-3xl text-center px-5">
    <span className="text-3xl font-bold mb-4 block">
      👨‍💻 About Me
    </span>
    <p className="text-lg leading-7 mb-4">
      Hi there! I’m a Full-Stack Software Engineer who spends equal amounts of time crafting seamless user experiences on the front-end and debugging life’s back-end mysteries (read: figuring out why my coffee machine keeps crashing)
    </p>
    <p className="text-lg leading-7 mb-4">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Armed with skills in React, Node.js, Next.js, Python, and SQL, I build web applications that are not just functional but also pixel-perfect—because nobody should have to deal with buttons that move when you click them
        </span>
        </p>
        <p className="text-lg leading-7">
      🚀 Over the years, I’ve honed my skills as a <span className="font-semibold">JavaScript </span>, mastering frameworks like Tailwind, Express, and even diving into those daunting legacy codebases no one dares to touch. On the backend, I specialize in optimizing REST APIs and ensuring data pipelines flow as seamlessly as your favorite streaming service on fiber internet
      <br />  
      <br />  
      
      ✨ What Sets Me Apart?
      I am a creative problem-solver who approaches challenges as opportunities for innovation and growth. Beyond resolving bugs, I focus on transforming issues into solutions that add value and drive progress. Outside of coding, I stay at the forefront of technological advancements, craft clear and meaningful commit messages
            </p>
             </div>
              </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[25px] text-gray-400 my-5 max-w-[600px]"
        >
          
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white font-bold cursor-pointer rounded-lg max-w-[200px]"
        >
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
