"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/anyomitse-ernest-6934b8190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: FaLinkedin,
    },

    { href: "mailto:ernestanyomitse752@gmail.com", icon: MdAttachEmail },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-mont"
    >
      <hr className="border-gray-200" />
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-5xl mx-auto flex items-center justify-center py-6"
      >
        <Image
          src="/image.png"
          width={120}
          height={120}
          alt="Anyomitse Ernest"
          className="rounded-full object-cover mr-6"
        />
        <h1 className="md:text-3xl text-xl font-bold">
          Ernest Delali Anyomitse
        </h1>
      </motion.header>
      <hr className="border-gray-200" />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-5xl mx-auto px-2 md:px-4 py-4"
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 text-sm lg:text-[16px]"
        >
          <p>
            As a web developer with a background in graphic and video editing, I
            bring a unique blend of technical and creative skills to every
            project. My journey into coding began at CodeTrain, a software
            development school, where I discovered my passion for building
            websites.
          </p>
          <p>
            My experience with Adobe Suite enhances my ability to optimize
            graphics and video content for the web. This combination of skills
            allows me to create visually appealing and performant websites that
            provide an excellent user experience.
          </p>
          <p>
            I'm a firm believer in simplicity and user-friendliness. My approach
            to web development focuses on creating fast, optimized websites with
            minimal load times. I understand the frustration of waiting for
            heavy content to load, so I strive to make my websites as light and
            efficient as possible without compromising on quality or
            functionality.
          </p>
          <p>
            Beyond coding, I enjoy photography and traveling. These hobbies not
            only fuel my creativity but also help me bring fresh perspectives to
            my work. I thrive in team environments, adapting quickly to changes
            and continuously learning from those around me.
          </p>
        </motion.section>
        <hr className="my-8 border-gray-200" />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-center text-xl font-semibold mb-6">
            Get In Touch
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="text-4xl hover:scale-110 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </motion.div>
  );
};

export default ProfilePage;
