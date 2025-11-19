// "use client";

import React from "react";
import Link from "next/link";
import DashBoardProfile from "@/app/(dashBoard)/dashBoardProfile/page";

const DashLayoutLinks = () => {
  const links = [
    {
      label: <DashBoardProfile />,
      href: null,
    },
    {
      label: "DashBoard",
      href: "/dashBoard",
    },
    {
      label: "Back Home",
      href: "/",
    },
  ];

  return (
    <>
      {links.map((link, idx) => (
        <li key={idx}>
          {link.href ? (
            <Link
              href={link.href}
              className="flex items-center gap-2 text-secondary text-lg font-medium bg-neutral hover:text-primary transition-transform duration-200 hover:scale-105"
            >
              {link.label}
            </Link>
          ) : (
            link.label
          )}
        </li>
      ))}
    </>
  );
};

export default DashLayoutLinks;
