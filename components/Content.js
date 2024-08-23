"use client";
import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { AiFillOpenAI } from "react-icons/ai";
import Website from "./Website";
import Video from "@/components/Video";
import Photos from "@/components/Photos";
import AI from "@/components/AI";

// Main Content component
const Content = () => {
  // State to keep track of the selected content
  const [selectedContent, setSelectedContent] = useState("Website");

  // Array of content items with their respective icons, text, and components
  const contentItems = [
    { Icon: CgWebsite, text: "Website", content: <WebsiteContent /> },
    { Icon: BiSolidVideos, text: "Videos", content: <VideosContent /> },
    { Icon: IoMdPhotos, text: "Photos", content: <PhotosContent /> },
    { Icon: AiFillOpenAI, text: "AI Projects", content: <AIProjectsContent /> },
  ];

  // Function to handle content selection
  const handleContentClick = (content) => {
    setSelectedContent(content.text);
  };

  return (
    <section className="mt-20">
      {/* Horizontal line */}
      <div className="bg-black w-full h-[0.5px]" />
      {/* Navigation menu */}
      <div className="flex mt-2 justify-center gap-8">
        {contentItems.map(({ Icon, text, content }) => (
          <div
            key={text}
            className="flex items-center cursor-pointer"
            onClick={() => handleContentClick({ text, content })}
          >
            {/* Icon for each menu item */}
            <Icon
              className={`mr-2 md:text-xl text-2xl ${
                selectedContent === text ? "text-[#5cc38f]" : ""
              }`}
            />
            {/* Text for each menu item (hidden on small screens) */}
            <p
              className={`lg:text-xl md:text-[16px] hidden md:block ${
                selectedContent === text ? "font-bold" : ""
              }`}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
      {/* Content area */}
      <div className="mt-8">
        {contentItems.find((item) => item.text === selectedContent)?.content}
      </div>
    </section>
  );
};

// Individual content components
const WebsiteContent = () => (
  <div>
    <Website />
  </div>
);
const VideosContent = () => (
  <div>
    <Video />
  </div>
);
const PhotosContent = () => (
  <div>
    <Photos />
  </div>
);
const AIProjectsContent = () => (
  <div>
    <AI />
  </div>
);

export default Content;
