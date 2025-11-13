"use client";
import Link from "next/link";
import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex items-center gap-1 md:gap-2">
        <FaBriefcase className="text-primary text-xl md:text-3xl" />
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl md:font-bold text-secondary">
          Intern<span className="text-primary">Bangla</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
