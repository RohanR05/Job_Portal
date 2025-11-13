import Link from "next/link";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      <Link href={"/login"}>
        {" "}
        <button className="btn btn-outline btn-primary bg-accent">Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;
