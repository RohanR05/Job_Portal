"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Theme from "../Theme/Theme";
import { FaHome, FaUserCheck, FaTachometerAlt } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li className="font-medium md:font-semibold text-primary hover:text-secondary transition-all">
        <Link href={"/"} className="flex items-center gap-2">
          <FaHome className="text-secondary text-lg" />
          Home
        </Link>
      </li>
      <li className="font-medium md:font-semibold text-primary hover:text-secondary transition-all">
        <Link href={"/apply"} className="flex items-center gap-2">
          <FaUserCheck className="text-secondary text-lg" />
          Apply
        </Link>
      </li>
      <li className="font-medium md:font-semibold text-primary hover:text-secondary transition-all">
        <Link href={"/dashboard"} className="flex items-center gap-2">
          <FaTachometerAlt className="text-secondary text-lg" />
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 max-w-7xl mx-auto z-50 backdrop-blur-md bg-accent shadow-md">
      <div className="navbar max-w-9xl mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-accent rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>

        {/* End (Theme + Button) */}
        <div className="navbar-end flex items-center gap-3">
          <ul className="menu hidden lg:flex menu-horizontal px-1 text-xl">
            {links}
          </ul>
          <Theme />
          <button className="btn btn-secondary text-white px-4">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
