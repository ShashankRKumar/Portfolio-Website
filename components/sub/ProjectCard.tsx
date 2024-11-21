import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ src, title, description, githubUrl }: Props) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent group">
      {/* Background Image with scaling animation */}
      <Image
        src={src}
        alt={title}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out transform group-hover:scale-110 opacity-20"
      />

      {/* Overlay and Content */}
      <div className="relative z-10 p-8 text-center text-white bg-gradient-to-t from-black/80 to-transparent w-full h-full flex flex-col items-center justify-center">
        {/* Title with animation */}
        <h1 className="text-5xl font-bold uppercase tracking-wider mb-4 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:text-purple-500">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg mb-6 max-w-3xl transition-opacity duration-500 ease-in-out group-hover:opacity-80">
          {description}
        </p>

        {/* Button */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-800 transition-transform transform duration-500 group-hover:scale-105 group-hover:shadow-xl"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
