"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Content from "./Content";
import { motion } from "framer-motion";

const Mainpage = () => {
  useEffect(() => {
    // This effect is used to trigger the animation when the component mounts
  }, []);

  return (
    // Main section with initial animation
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="md:px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8 md:gap-12">
        {/* Profile picture with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/image.png"
            width={1000}
            height={1000}
            className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-cover"
            alt="Profile picture"
          />
        </motion.div>
        {/* Content section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left">
            <h1 className="text-lg md:text-2xl mb-4">
              Anyomitse Ernest Delali
            </h1>
            {/* Navigation buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {/* About me button */}
              <Link href="/aboutme">
                <motion.h2
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#e8ffa5] py-2 px-4 md:text-sm sm:text-sm text-[10px] border border-black rounded-xl hover:bg-[#d9f08c] transition-colors duration-300"
                >
                  About me
                </motion.h2>
              </Link>
              {/* Message button */}
              <Link href="/message">
                <motion.h2
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#e8ffa5] py-2 px-4 md:text-sm sm:text-sm text-[10px] border border-black rounded-xl hover:bg-[#d9f08c] transition-colors duration-300"
                >
                  Message
                </motion.h2>
              </Link>
              {/* Download CV button */}
              <Link href="/CV Dela.pdf" download>
                <motion.h2
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#e8ffa5] py-2 px-4 md:text-sm sm:text-sm text-[10px] border border-black rounded-xl hover:bg-[#d9f08c] transition-colors duration-300"
                >
                  Download CV
                </motion.h2>
              </Link>
            </div>
          </div>
          {/* Brief introduction with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-3"
          >
            <p className="font-light text-[12px] md:text-left text-center">
              As a web developer with a background in graphic and video editing,
              I bring a unique blend of
              <span className="font-bold">
                {" "}
                <Link href="/aboutme">Read more</Link>{" "}
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* Additional content component rendered from the content component */}
      <Content />
    </motion.section>
  );
};

export default Mainpage;
