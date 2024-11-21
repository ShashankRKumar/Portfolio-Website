import { Footer as Socials } from "@/constants"; 
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[70px] fixed bottom-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[50] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}  // Link to social media or email page
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              title={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
          ))}
        </div>

        <div className="text-gray-300 text-center">
          <p className="text-sm"> {new Date().getFullYear()} Shashank Ramesh Kumar</p>
          <p className="text-xs">Designed & Built with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
