import Link from "next/link";
import React from "react";

const ApplyPage = () => {
  return (
    <div className="mt-16 md:mt-18 flex items-center justify-center h-screen flex-col gap-6 bg-neutral">
      <h1 className="text-5xl font-bold">Apply Page</h1>
      <h2 className="text-2xl font-bold">Under Developement</h2>
      <button className="btn btn-primary btn-outline">
        <Link href={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default ApplyPage;
