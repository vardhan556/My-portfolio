import React from 'react';
import BeamsBackground from '../aceternity/Beams';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Sample project images (replace with your actual project images)
import ProjectImage1 from '../assets/project1.jpg';
import ProjectImage2 from '../assets/project2.jpg';
import ProjectImage3 from '../assets/project3.jpeg';

const ProjectCard = ({ name, image, description, githubLink, liveLink }) => {
  return (
    <div className="group relative w-full h-80 overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold mb-2">{name}</h3>
          <p className="text-white/80 mb-4 text-sm">{description}</p>
          
          <div className="flex space-x-4">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                bg-white/20 
                hover:bg-white/30 
                text-white 
                p-2 
                rounded-full 
                transition 
                duration-300 
                flex 
                items-center 
                justify-center
              "
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                bg-purple-600 
                hover:bg-purple-700 
                text-white 
                px-4 
                py-2 
                rounded-full 
                flex 
                items-center 
                space-x-2 
                transition 
                duration-300
              "
            >
              <FaExternalLinkAlt />
              <span>View Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      image: ProjectImage1,
      description: "A brief description of the project and its key features.",
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1.vercel.app"
    },
    {
      name: "Project 2",
      image: ProjectImage2,
      description: "Another project with innovative solutions and technologies.",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.vercel.app"
    },
    {
      name: "Project 3",
      image: ProjectImage3,
      description: "An impactful project showcasing problem-solving skills.",
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.vercel.app"
    }
  ];

  return (
    <BeamsBackground>
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            My Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project}
            />
          ))}
        </div>
      </div>
    </BeamsBackground>
  );
};

export default Projects;