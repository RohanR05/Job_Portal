"use client";
import React from "react";
import Lottie from "lottie-react";
import animi from "../../../public/Screening.json";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-20 bg-gradient-to-r from-primary/15 via-secondary/15 to-neutral/10 backdrop-blur-md shadow-md">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
          Find Your <span className="text-secondary">Dream Internship</span>
        </h1>
        <p className="text-neutral/70 text-lg md:w-4/5 mx-auto md:mx-0">
          Explore verified internships and entry-level job opportunities in
          Bangladesh. Build your career with confidence and skill.
        </p>
        <button className="btn btn-secondary text-white px-6 mt-4">
          Get Started
        </button>
      </div>

      {/* Right Animation Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Lottie
          animationData={animi}
          loop={true}
          className="w-full max-w-md drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
