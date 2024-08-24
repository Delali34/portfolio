"use client";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define an array of menu items with their respective properties
const menuItems = [
  { href: "/", icon: IoHomeSharp, label: "Home" },
  { href: "/blog", icon: FaBlogger, label: "Blog" },
  { href: "/skillset", icon: FaTools, label: "Skillsets" },
  { href: "/aboutme", icon: ImProfile, label: "About" },
  { href: "/message", icon: MdMessage, label: "Message" },
];

const Sidemenu = () => {
  // Get the current pathname using Next.js hook
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex md:w-64 w-28 md:gap-7 gap-4 lg:gap-10 top-0">
      <ul className="flex mt-32 ml-3 md:ml-5 flex-col gap-8">
        {menuItems.map(({ href, icon: Icon, label }) => {
          // Check if the current menu item is active
          const isActive = pathname === href;
          return (
            <li key={label}>
              <Link href={href}>
                <div
                  className={`flex items-center gap-1 hover:text-[#5cc38f] ${
                    isActive ? "text-[#5cc38f] font-bold" : "text-black"
                  }`}
                >
                  {/* Render the icon component */}
                  <Icon
                    className={`sm:text-2xl text-2xl ${
                      isActive ? "text-[#5cc38f]" : "text-black"
                    }`}
                  />
                  {/* Render the label text (hidden on smaller screens) */}
                  <span className={`hidden lg:block ${isActive ? "" : ""}`}>
                    {label}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Vertical divider line */}
      <div className="bg-black w-[1px] h-screen lg:ml-10" />
    </nav>
  );
};

export default Sidemenu;
