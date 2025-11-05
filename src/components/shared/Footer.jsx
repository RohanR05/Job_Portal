import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaUserCheck,
  FaTachometerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary/10 px-6 flex flex-col items-center">
      {/* upper section */}
      <div className="py-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:w-full md:gap-5">
        {/* web developer */}
        <div className="text-left space-y-2">
          <h2 className="text-2xl font-bold text-primary">Rohan Kabir</h2>
          <p className="font-semibold text-neutral/80">
            A passionate{" "}
            <span className="text-secondary">
              MERN Stack / Front-End / Full-Stack Developer
            </span>
          </p>

          <div className="">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Developer Links
            </h3>
            <div className="flex gap-4 justify-start text-2xl">
              <Link
                href="https://facebook.com/"
                target="_blank"
                className="text-secondary border p-1 rounded-lg bg-accent hover:text-primary transition-colors"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                className="text-secondary border p-1 rounded-lg bg-accent hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/"
                target="_blank"
                className="text-secondary border p-1 rounded-lg bg-accent hover:text-primary transition-colors"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        {/* Quick links */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-primary">More Links</h2>
          <ul className="space-y-1">
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
            <li className="font-medium md:font-semibold text-primary hover:text-secondary transition-all">
              <Link href={"/aboutUs"} className="flex items-center gap-2">
                <FaTachometerAlt className="text-secondary text-lg" />
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* web developer info */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-primary">
            Web Developer Info
          </h2>
          <p className="text-xl font-bold">Rohan Kabir</p>
          <p>
            <strong>Email:</strong> rohankabir061@gmail.com
          </p>
          <p>
            <strong>WhatsApp:</strong> +8801906647607
          </p>
          <p>
            <strong>Address:</strong> Narail, Bangladesh
          </p>
        </div>
      </div>
      {/* lower section */}

      <div className="border border-secondary w-full"></div>
      <div className="py-12">
        <h2 className="flex items-center gap-2 text-neutral/70 font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Logo></Logo>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
