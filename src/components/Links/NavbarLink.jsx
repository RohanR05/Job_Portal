"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  FaHome,
  FaUserCheck,
  FaTachometerAlt,
  FaBriefcase,
} from "react-icons/fa";

const NavbarLinks = () => {
  const { data: session } = useSession();

  // Define all your links in an array
  const links = [
    {
      href: "/",
      label: "Home",
      icon: <FaHome className="text-primary text-lg" />,
      roles: ["user", "HR"], // visible for all
    },
    {
      href: "/applyJob",
      label: "Apply",
      icon: <FaUserCheck className="text-primary text-lg" />,
      roles: ["user", "HR"],
    },
    {
      href: "/createVacancy",
      label: "Post a Job",
      icon: <FaBriefcase className="text-primary text-lg" />,
      roles: ["HR"], // only HR sees this
    },
    {
      href: "/dashBoard",
      label: "Dashboard",
      icon: <FaTachometerAlt className="text-primary text-lg" />,
      roles: ["user", "HR"],
    },
  ];

  return (
    <>
      {links
        .filter(
          (link) => !link.roles || link.roles.includes(session?.user?.role)
        )
        .map((link, idx) => (
          <li
            key={idx}
            className="font-medium md:font-semibold text-secondary transition-all"
          >
            <Link href={link.href} className="flex items-center gap-2">
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
    </>
  );
};

export default NavbarLinks;
