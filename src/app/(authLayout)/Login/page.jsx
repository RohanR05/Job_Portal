"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import Link from "next/link";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        confirmButtonColor: "#0f7fbf",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "Login successful",
        confirmButtonColor: "#98CD00",
        timer: 1500,
      });
    }
  };

  return (
    <div className=" w-full mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Login to Your Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaEnvelope className="text-secondary" /> Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full text-neutral"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaLock className="text-secondary" /> Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className="input input-bordered w-full text-neutral"
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
          className="btn btn-secondary btn-outline w-full font-semibold"
        >
          Login
        </button>
        <h2 className="text-neutral font-medium">
          Don't have an account? Click Here{" "}
          <span className="text-secondary underline text-lg">
            <Link href={"/register"}>Register</Link>{" "}
          </span>
        </h2>
      </form>
    </div>
  );
};

export default Login;
