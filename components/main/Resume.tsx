// src/components/Resume.tsx
import React from 'react';

const Resume = () => {
  const resumeUrl = "/Shashank Ramesh Kumar.pdf";

  return (
    <div className="resume-download">
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:text-blue-700">
        View Resume
      </a>
    </div>
  );
};

export default Resume;
