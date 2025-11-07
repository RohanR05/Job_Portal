'use client'
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <button className="btn" onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
};

export default Login;
