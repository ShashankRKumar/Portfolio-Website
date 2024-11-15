import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Resume from "./Resume";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Snapgram_Social.png"
          title="SnapGram Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubUrl="https://github.com/ShashankRKumar/banking_app" 
        />
        <ProjectCard
          src="/Horizon_bank.png"
          title="Banking with Finance Management Dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubUrl="https://github.com/ShashankRKumar/banking_app" 
        />
        <ProjectCard
          src="/FizziSoda.png"
          title="Fizzi Soda"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubUrl="https://github.com/yourusername/space-website" 
        />
      </div>
    </div>
  );
};

export default Projects;
