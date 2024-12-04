"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-5 md:px-20 z-[20]"
    >
      {/* Main Layout */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full mt-10">
        {/* Left Section with Text */}
        <motion.div
          variants={slideInFromTop}
          className="w-full flex flex-col gap-5 justify-center text-center md:text-start text-white"
        >
          {/* Transparent Background for Text */}
          <div className="bg-gradient-to-br from-[#1a1a2e99] via-[#0d0d22bb] to-[#00000099] backdrop-blur-md p-5 rounded-lg">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="py-2 px-4 border border-[#7042f88b] rounded-lg text-gray-300"
            >
              <h1 className="text-2xl md:text-3xl font-bold">👨‍💻 About Me</h1>
            </motion.div>

            <motion.div variants={slideInFromLeft(0.8)}>
              <p className="text-base md:text-lg leading-relaxed mt-4">
                Hi there! I’m a Full-Stack Software Engineer who crafts seamless user experiences and optimizes backend processes. My skills span from <strong>React</strong>, <strong>Node.js</strong>, and <strong>Next.js</strong> to <strong>Python</strong> and <strong>SQL</strong>, delivering functional yet aesthetically pleasing applications.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                🚀 I specialize in frameworks like <strong>Tailwind</strong>, and <strong>Express</strong>, building web solutions that are robust and user-friendly. My backend expertise ensures APIs and data pipelines perform flawlessly.
              </p>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(1)}
              className="text-base md:text-lg text-white-400 mt-5"
            >
              ✨ I approach challenges as opportunities for innovation, with a focus on clean code and meaningful commit messages.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section with Image */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            className="opacity-90"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
