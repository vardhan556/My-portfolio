import React from 'react';
import BeamsBackground from '../aceternity/Beams';
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaTwitter, 
  FaPhoneAlt, FaMapMarkerAlt 
} from 'react-icons/fa';

const ContactButton = ({ icon: Icon, name, link, type }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex 
      items-center 
      justify-start 
      w-full 
      bg-white/10 
      hover:bg-white/20 
      border 
      border-white/20 
      text-white 
      px-4 
      py-3 
      rounded-2xl 
      transition 
      duration-300 
      transform 
      hover:scale-105
      hover:border-purple-500
      space-x-4
    "
  >
    <div className="
      w-12 
      h-12 
      flex 
      items-center 
      justify-center 
      bg-white/10 
      rounded-full
    ">
      <Icon className="text-2xl" />
    </div>
    <div className="flex flex-col">
      <span className="font-semibold">{name}</span>
      <span className="text-sm text-white/70">{type}</span>
    </div>
  </a>
);

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      name: "Email",
      link: "mailto:vardhanisatya@gmail.com",
      type: "vardhanisatya@gmail.com"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/in/vardhan556",
      type: "Professional Network"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      link: "https://github.com/vardhan556",
      type: "Open Source Projects"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      link: "https://twitter.com/vardhan556",
      type: "Social Media"
    }
  ];

  return (
    <BeamsBackground>
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            Contact Me
          </span>
        </h2>

        <div className="max-w-2xl w-full space-y-6">
          <p className="text-white/80 text-xl mb-8 text-center">
            I'm open to discussing new projects, opportunities, or just want to say hello. 
            Feel free to reach out, and I'll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <ContactButton 
                key={index} 
                {...method} 
              />
            ))}
          </div>

          <div className="mt-8">
            <a 
              href="mailto:vardhanisatya@gmail.com"
              className="
                bg-purple-600 
                hover:bg-purple-700 
                text-white 
                font-bold 
                py-3 
                px-6 
                rounded-full 
                transition 
                duration-300 
                inline-block
                transform 
                hover:scale-105
              "
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
};

export default Contact;