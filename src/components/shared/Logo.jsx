import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl md:font-bold text-primary">
          Intern<span className="text-secondary">Bangla</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
