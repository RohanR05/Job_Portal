"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import amini from "../../../public/Login.json";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-info overflow-hidden max-w-7xl border rounded-2xl shadow-2xl shadow-primary/50 m-3 md:mx-auto p-2 md:p-12">
      {/* Left Side - Animation */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center p-6 relative text-center">
        <div className="absolute top-6 left-6">
          <Link href="/">
            <button className="btn btn-sm btn-outline border-primary text-primary hover:bg-primary hover:text-neutral">
              ← Home
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
  );
};

export default AuthLayout;
