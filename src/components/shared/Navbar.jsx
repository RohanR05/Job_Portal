"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Theme from "../Theme/Theme";
import {
  FaHome,
  FaUserCheck,
  FaTachometerAlt,
  FaBriefcase,
} from "react-icons/fa";
import { useSession } from "next-auth/react";
import AvatarDropdown from "../Button/AvatarDropdown";

const Navbar = () => {
  const { data: session, status } = useSession();

  console.log(session?.user?.role);

  if (status === "loading") return null; // or a loader

  const links = (
    <>
      <li className="font-medium md:font-semibold text-secondary transition-all">
        <Link href={"/"} className="flex items-center gap-2">
          <FaHome className="text-primary text-lg" />
          Home
        </Link>
      </li>
      <li className="font-medium md:font-semibold text-secondary transition-all">
        <Link href={"/applyJob"} className="flex items-center gap-2">
          <FaUserCheck className="text-primary text-lg" />
          Apply
        </Link>
      </li>
      {session?.user.role === "HR" && (
        <li className="font-medium md:font-semibold text-secondary transition-all">
          <Link href={"/createVacancy"} className="flex items-center gap-2">
            <FaBriefcase className="text-primary text-lg" />
            Post a Job
          </Link>
        </li>
      )}

      <li className="font-medium md:font-semibold text-secondary transition-all">
        <Link href={"/dashBoard"} className="flex items-center gap-2">
          <FaTachometerAlt className="text-primary text-lg" />
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 mx-auto z-50 backdrop-blur-md bg-neutral/40 shadow-md shadow-primary/20">
      <div className="navbar max-w-9xl mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-ghost lg:hidden"
            >
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
              className="menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>

        {/* End (Theme + Button) */}
        <div className="navbar-end flex w-full items-center gap-3">
          <ul className="menu hidden lg:flex menu-horizontal px-1 text-xl border-r-2 border-primary/50">
            {links}
          </ul>
          <Theme />
          <AvatarDropdown></AvatarDropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
