import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects } from "@/constants";

const ProjectsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center gap-10">
        {Projects.map((project) => (
          <ProjectCard
            key={project.title} // Use a unique key for each project
            src={project.Image} // Image from the project object
            title={project.title} // Title of the project
            description={project.description} // Description of the project
            githubUrl={project.githubUrl} // GitHub URL of the project
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
