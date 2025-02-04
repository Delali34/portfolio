import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Array of website objects containing information about each project
const websites = [
  {
    id: 1,
    title: "E-commerce Website",
    image: "/shop.png",
    livePreview: "https://shop-eacj.vercel.app/",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "NeonDB",
      "PostgreSQL",
      "Paystack",
      "HygraphCMS",
      "framer-motion",
    ],
  },

  {
    id: 2,
    title: "EminenceLead Website",
    image: "/ngo.png",
    livePreview: "https://eminence-mu.vercel.app/",
    techStack: ["Nextjs", "TailwindCSS", "Vercel", "HygraphCMS", "Paystack"],
  },
  {
    id: 1,
    title: "Blog website",
    image: "/chiaky.png",
    livePreview: "https://www.chiakyotuteye.com/",
    techStack: [, "Next.js", "Tailwind CSS", "HygraphCMS"],
  },
  {
    id: 2,
    title: "The brocode website",
    image: "/brocode.png",
    livePreview: "https://www.thebrocodegh.com/",
    techStack: [
      "Nextjs",
      "TailwindCSS",
      "Vercel",
      "HygraphCMS",
      "Paystack",
      "Google Analytics",
      "Mailchimp",
    ],
  },
  {
    id: 3,
    title: "AfricaHPO Website",
    image: "/hpo.png",
    livePreview: "https://www.africahealthpromotion.org/",
    techStack: ["Nextjs", "TailwindCSS", "HygraphCMS"],
  },

  {
    id: 2,
    title: "Flairup Website",
    image: "/flairup.png",
    livePreview: "https://flairup.vercel.app/",
    techStack: ["React", "CSS", "Aos Animate", "After Effects"],
  },
  {
    id: 2,
    title: "Leadafriue International Website",
    image: "/lead.png",
    livePreview: "https://www.leadafrique.org/",
    techStack: ["Nextjs", "TailwindCSS", "framer-motion", "HygraphCMS"],
  },
];

const WebsiteGrid = () => {
  // State to keep track of the currently selected website
  const [selectedWebsite, setSelectedWebsite] = useState(null);

  // Function to handle clicking on a website card
  const handleWebsiteClick = (website) => {
    setSelectedWebsite(website);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedWebsite(null);
  };

  return (
    <div className="my-12 px-4 flex justify-center">
      {/* Grid container for website cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl">
        {websites.map((website) => (
          // Individual website card
          <motion.div
            key={website.id}
            className="relative border-2 cursor-pointer overflow-hidden rounded-sm shadow-lg transform transition duration-300 hover:scale-105"
            onClick={() => handleWebsiteClick(website)}
          >
            {/* Website image */}
            <img
              src={website.image}
              alt={website.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with website title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">
                {website.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying website details */}
      <AnimatePresence>
        {selectedWebsite && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs md:max-w-sm mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {/* Modal content */}
              <div className="relative">
                {/* Website image */}
                <motion.img
                  src={selectedWebsite.image}
                  alt={selectedWebsite.title}
                  className="w-full h-64 object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Website details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {selectedWebsite.title}
                </h3>
                {/* Live preview link */}
                <p className="mb-4 text-gray-600">
                  Live Preview:{" "}
                  <a
                    href={selectedWebsite.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit
                  </a>
                </p>
                {/* Tech stack list */}
                <h4 className="text-lg font-semibold mb-2 text-gray-700">
                  Tech Stack:
                </h4>
                <ul className="list-disc pl-4 text-gray-600">
                  {selectedWebsite.techStack.map((tech, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebsiteGrid;
