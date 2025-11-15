"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleButton from "@/components/Button/GoogleButton";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
        confirmButtonColor: "#00a000", // primary
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "Login successful",
        confirmButtonColor: "#00a000", // primary
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        router.push(callbackUrl);
      });
    }
  };

  return (
    <div className="w-full mx-auto max-w-2xl">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Login to Your Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaEnvelope className="text-primary" /> Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full bg-neutral text-secondary placeholder-secondary/70"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaLock className="text-primary" /> Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className="input input-bordered w-full bg-neutral text-secondary placeholder-secondary/70"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-full font-semibold text-neutral"
        >
          Login
        </button>
        <GoogleButton></GoogleButton>

        {/* Register Link */}
        <h2 className="text-secondary text-center font-medium">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-primary underline font-semibold hover:text-secondary"
          >
            Register
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
