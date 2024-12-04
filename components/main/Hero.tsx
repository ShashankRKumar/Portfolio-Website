import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="relative z-[2] flex flex-col items-center text-center p-5">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
