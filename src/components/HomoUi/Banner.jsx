"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animi from "../../../public/Screening.json";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-2 py-10 md:py-20 text-secondary">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:w-1/2 text-center md:text-left space-y-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
          Sorry <span className="text-secondary">Under Development</span>
        </h1>
        <p className="text-lg md:w-4/5 mx-auto md:mx-0">
          Explore verified internships and entry-level job opportunities in
          Bangladesh. Build your career with confidence and skill.
        </p>
        <button className="btn btn-primary btn-outline px-6 mt-4">
          Get Started
        </button>
      </motion.div>

      {/* Right Animation Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <Lottie
          animationData={animi}
          loop={true}
          className="w-full max-w-md drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
