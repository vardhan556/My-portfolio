import React from 'react';
import BeamsBackground from '../aceternity/Beams';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaGithub, 
  FaDatabase, FaCode 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiDjango, SiJavascript, 
  SiCplusplus, SiTailwindcss, SiVercel, SiSqlite 
} from 'react-icons/si';

const SkillButton = ({ icon: Icon, name }) => (
  <div className="group relative">
    <button className="
      flex items-center justify-center 
      bg-white/10 hover:bg-white/20 
      w-full h-full
      border border-white/20 
      text-white 
      px-4 py-2 
      rounded-full 
      transition duration-300 
      transform hover:scale-105
      hover:shadow-lg
      hover:border-purple-500
      flex-col
    ">
      {Icon && <Icon className="mb-2 text-2xl group-hover:text-purple-500" />}
      <span className="text-sm font-medium">{name}</span>
    </button>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: FaReact },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Django', icon: SiDjango },
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'C/C++', icon: SiCplusplus },
    { name: 'SQL', icon: SiSqlite },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Vercel', icon: SiVercel }
  ];

  return (
    <BeamsBackground>
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            My Skills
          </span>
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl">
          {skills.map((skill, index) => (
            <SkillButton 
              key={index} 
              name={skill.name} 
              icon={skill.icon} 
            />
          ))}
        </div>
      </div>
    </BeamsBackground>
  );
};

export default Skills;