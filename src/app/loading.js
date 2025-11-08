"use client";
import React from "react";
import Lottie from "lottie-react";
import animi from "../../public/LoadingBouncingball.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-accent/20">
      <div className="w-48 h-48">
        <Lottie animationData={animi} loop className="w-full h-full" />
      </div>
    </div>
  );
};

export default Loading;
