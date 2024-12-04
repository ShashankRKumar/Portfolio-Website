"use client";
import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Shashank Ramesh Kumar
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between w-auto space-x-6 text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills & Experience
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a
            href="/Shashank Ramesh Kumar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[65px] right-0 bg-[#030014] text-gray-200 w-full md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-[300px]"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#about-me"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills & Experience
            </a>
            <a
              href="#projects"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/Shashank Ramesh Kumar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          {Socials.map((social) => (
            <a
              href={social.url}
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
      </div>
    </div>
  );
};

export default Navbar;
