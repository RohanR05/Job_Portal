"use client";
import React from "react";
import Lottie from "lottie-react";
import animi from "../../../public/Liquid 4 Dot Loader.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-primary/10">
      <div className="w-72 h-72">
        <Lottie animationData={animi} loop className="w-full h-full" />
      </div>
    </div>
  );
};

export default Loading;
