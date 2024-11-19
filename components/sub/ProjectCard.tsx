import Image from "next/image";
import React from "react";
import {Projects} from "@/constants"


interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ src, title, description, githubUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        <a
          href={githubUrl}  
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 cursor-pointer transition-colors duration-300 ease-in-out"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
