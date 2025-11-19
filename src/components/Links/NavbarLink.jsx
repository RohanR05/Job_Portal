"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaUserCheck,
  FaTachometerAlt,
  FaBriefcase,
} from "react-icons/fa";

const NavbarLinks = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  // All navbar links
  const links = [
    {
      href: "/",
      label: "Home",
      icon: <FaHome />,
      roles: ["user", "HR"],
    },
    {
      href: "/applyJob",
      label: "Apply",
      icon: <FaUserCheck />,
      roles: ["user", "HR"],
    },
    {
      href: "/createVacancy",
      label: "Post a Job",
      icon: <FaBriefcase />,
      roles: ["HR"],
    },
    {
      href: "/dashBoard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
      roles: ["user", "HR"],
    },
  ];

  return (
    <>
      {links
        .filter(
          (link) => !link.roles || link.roles.includes(session?.user?.role)
        )
        .map((link, idx) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={idx}
              className="font-medium md:font-semibold transition-all"
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-3 py-1 rounded-md transition-all duration-200
                ${
                  isActive
                    ? "text-secondary font-bold scale-105 bg-accent"
                    : "text-secondary hover:text-primary"
                }
              `}
              >
                {/* Icon also gets active color */}
                <span className="text-primary">{link.icon}</span>

                {link.label}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default NavbarLinks;
