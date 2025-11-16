"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    const confirm = await Swal.fire({
      title: "Continue with Google?",
      text: "You will be redirected to Google login.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, continue",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0f7fbf", // matches your primary theme
    });

    if (!confirm.isConfirmed) return;

    setLoading(true);

    await signIn("google", { callbackUrl: "/dashBoard" });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className={`flex items-center gap-2 w-full justify-center rounded-xl py-2 px-3 border
        transition-all duration-200 
        ${
          loading
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-accent border-primary text-info"
        }
      `}
    >
      <FcGoogle className="text-xl" />
      {loading ? "Please wait..." : "Sign in with Google"}
    </button>
  );
};

export default GoogleButton;
