import React from "react";
import BeamsBackground from '../aceternity/Beams';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      justify-center
      w-12
      h-12
      rounded-full
      border
      border-white
      text-white 
      hover:text-purple-500 
      hover:border-purple-500 
      transition-colors 
      duration-300 
      transform 
      hover:scale-110
    "
  >
    <Icon className="text-2xl" />
  </a>
);

const About = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "http://github.com/vardhan556"
    },
    {
      Icon: FaLinkedin,
      href: "http://linkedin.com/in/vardhan556"
    },
    {
      Icon: FaTwitter,
      href: "http://twitter.com/vardhan556"
    },
    {
      Icon: FaEnvelope,
      href: "mailto:vardhanisatya@gmail.com"
    }
  ];

  return (
    <BeamsBackground>
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
              <span>Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                Vadapalli Satya Vardhan
              </span>
            </h1>
            <p className="text-xl md:text-xl pt-4 text-white/80 max-w-2xl mx-auto">
              A passionate Software Developer dedicated to creating innovative solutions and websites.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <SocialIcon key={index} Icon={Icon} href={href} />
              ))}
            </div>

            {/* Buttons section can be added here if needed */}
            <div className="flex space-x-4">
              {/* Uncomment and modify these as per your need */}
            </div>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
};

export default About;