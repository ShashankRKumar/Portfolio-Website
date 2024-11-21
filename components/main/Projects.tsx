import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects } from "@/constants";

const ProjectsSection: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[50]"
      id="projects"
    >
      {/* Added z-[50] to ensure it is above StarsCanvas */}
      <h1 className="text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center gap-10">
        {Projects.map((project) => (
          <ProjectCard
            key={project.title} // Ensure title is unique
            src={project.Image}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
