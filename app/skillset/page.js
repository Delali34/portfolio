"use client";
import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  // FaAdobe,
  FaGoogle,
  FaMailchimp,
  FaFacebook,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiOpenai,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const SkillsetPage = () => {
  const skillCategories = [
    {
      name: "Web Development",
      skills: [
        { name: "Next.js", icon: <TbBrandNextjs /> },
        { name: "React", icon: <FaReact /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      name: "Content Management",
      skills: [{ name: "HygraphCMS", icon: "🚀" }],
    },
    {
      name: "Marketing & Analytics",
      skills: [
        { name: "Mailchimp", icon: <FaMailchimp /> },
        { name: "Google Search Console", icon: <FaGoogle /> },
        { name: "Google Analytics", icon: <FaGoogle /> },
        { name: "Facebook Meta Suite", icon: <FaFacebook /> },
      ],
    },
    {
      name: "Design & Multimedia",
      skills: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
        { name: "Illustrator", icon: <SiAdobeillustrator /> },
        { name: "After Effects", icon: <SiAdobeaftereffects /> },
        // { name: "Canva", icon: <FaCanva /> },
      ],
    },
    {
      name: "AI & Optimization",
      skills: [
        { name: "Claude AI", icon: <SiOpenai /> },
        { name: "ChatGPT", icon: <SiOpenai /> },
        { name: "Handbrake", icon: "🎬" },
      ],
    },
    {
      name: "Deployment",
      skills: [
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
      ],
    },
  ];

  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-2xl font-bold text-center text-gray-800 mb-12"
        >
          My Skillset
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-[#d9f08c] text-black py-4 px-6">
                <h2 className="lg:text-xl text-sm font-semibold">
                  {category.name}
                </h2>
              </div>
              <ul className="p-6 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center space-x-3">
                    <span className="text-2xl text-[#d9f08c]">
                      {skill.icon}
                    </span>
                    <span className="text-gray-700">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsetPage;
