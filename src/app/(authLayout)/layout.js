"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import amini from "../../../public/Login.json";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="flex flex-col md:flex-row max-w-6xl items-center justify-center overflow-hidden m-3 md:mx-auto p-2 md:p-12 rounded-2xl shadow-lg shadow-secondary/50 bg-accent">
        {/* Left Side - Animation */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center p-6 relative text-center">
          <div className="absolute -top-2 left-6 my-2">
            <Link href="/">
              <button className="btn btn-sm btn-outline border-primary text-primary hover:bg-primary hover:text-neutral">
                <span className="text-secondary font-bold text-xl"> ←</span> Home
              </button>
            </Link>
          </div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center w-full"
          >
            <Lottie
              animationData={amini}
              loop
              className="w-full max-w-sm md:max-w-md mx-auto drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full flex justify-center items-center text-center"
        >
          <div className="w-full mx-auto p-2">{children}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
