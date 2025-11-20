"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MiniProfile from "@/app/(dashBoard)/MiniProfile/page";

const DashLayoutLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      label: <MiniProfile />,
      href: null,
    },
    {
      label: "DashBoard",
      href: "/dashBoard",
    },
    {
      label: "Profile",
      href: "/dashBoardProfile",
    },
    {
      label: "Back Home",
      href: "/",
    },
  ];

  return (
    <>
      {links.map((link, idx) => {
        const isActive = link.href && pathname === link.href;

        return (
          <li key={idx}>
            {link.href ? (
              <Link
                href={link.href}
                className={`flex items-center gap-2 text-lg font-medium transition-transform duration-200 
                hover:scale-105 
                ${
                  isActive
                    ? "border-l-5 rounded-md border-primary bg-primary/20"
                    : "text-secondary"
                }
                bg-neutral`}
              >
                {link.label}
              </Link>
            ) : (
              link.label
            )}
          </li>
        );
      })}
    </>
  );
};

export default DashLayoutLinks;
