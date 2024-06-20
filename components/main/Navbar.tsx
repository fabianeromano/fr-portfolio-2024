import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Socials = [
  {
    name: "Github",
    link: "https://github.com/fabianeromano",
    icon: <IoLogoGithub className="w-auto h-6 text-white" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/fabian-edgardo-romano/",
    icon: <FaLinkedin className="w-auto h-6 text-white" />,
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[99] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <span className="font-bold ml-[8px] hidden md:block text-gray-300">
            Fabian Romano
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`${social.name}`}
              className="cursor-pointer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
