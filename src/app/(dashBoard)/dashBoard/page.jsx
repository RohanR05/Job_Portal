import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <h1 className="text-5xl">DashBoard Layout</h1>
      <h2 className="text-2xl">Under Developerment</h2>
      <button className="btn btn-outline btn-primary">
        <Link href={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default page;
