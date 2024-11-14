"use client";
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// Advanced animation variants
const slideInFromTop = {
  hidden: { y: -100, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20, duration: 0.5 }
  }
};

const slideInFromBottom = {
  hidden: { y: 100, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20, duration: 0.5 }
  }
};

// Parallax effect container
const ParallaxContainer = ({ children }) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  return <motion.div style={{ y }}>{children}</motion.div>;
};

// ExperienceCard component with enhanced styles and animation
const ExperienceCard = ({ role, company, timeframe, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-800 to-blue-500 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      variants={slideInFromBottom}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300">
        {role} @ {company}
      </h4>
      <p className="text-gray-200 italic">
        {timeframe}
      </p>
      <p className="text-white text-opacity-90 leading-snug mt-1">
        {description}
      </p>
    </motion.div>
  );
};

// Main Encryption component integrating all features
const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full bg-space bg-no-repeat bg-cover">
      <ParallaxContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="text-[80px] font-medium text-center text-gray-200 absolute top-0 w-auto h-auto z-[5]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}Experience{" "}
          </span>
        </motion.div>

        <div className="flex flex-col items-center justify-center translate-y-[50px] z-[50]">
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-[20px] text-white mt-20 mb-10"
          >
            My Journey through the Cosmos of Technology
          </motion.div>
          <div className="flex flex-col items-center bg-black bg-opacity-70">
            <div className="space-y-7">
              <ExperienceCard
                role="Full Stack Developer"
                company="CDW"
                timeframe="August 2024 - Present"
                description="Developing futuristic software solutions that enhance business security and performance."
              />
              <ExperienceCard
                role="Full Stack Developer"
                company="Trigent Software"
                timeframe="October 2019 - July 2022"
                description="Engineered robust applications and contributed to major projects that streamlined client workflows."
              />
              <ExperienceCard
                role="Intern"
                company="Trigent Software"
                timeframe="May 2019 - September 2019"
                description="Supported the development team in building secure and efficient software, gaining invaluable industry insight."
              />
            </div>
          </div>
        </div>
      </ParallaxContainer>

      <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/encryption.webm/"
      />
    </div>
  );
};

export default Encryption;
