"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/Animation - 1724326000139.json";

const Page = () => {
  return (
    <div className="text-center font-bold text-xl ">
      <div className="w-64 mt-10 h-64 mx-auto">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Page;
