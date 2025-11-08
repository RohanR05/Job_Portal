"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto bg-accent/10 rounded-2xl p-8 shadow-md backdrop-blur-md mt-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Username */}
        <div>
          <label className="block font-semibold mb-2 text-secondary">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
            className="input input-bordered w-full"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-2 text-secondary">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-2 text-secondary">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone", { required: "Phone number is required" })}
            className="input input-bordered w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-2 text-secondary">
            Address
          </label>
          <input
            type="text"
            placeholder="Enter your address"
            {...register("address", { required: "Address is required" })}
            className="input input-bordered w-full"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="block font-semibold mb-2 text-secondary">
            Profile Image URL
          </label>
          <input
            type="url"
            placeholder="Enter image URL"
            {...register("image", { required: "Image URL is required" })}
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Education */}
        <div>
          <label className="block font-semibold mb-2 text-secondary">
            Education Qualification
          </label>
          <select
            {...register("education", { required: "Education is required" })}
            className="select select-bordered w-full"
          >
            <option value="">Select your qualification</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="Honours">Honours</option>
            <option value="Masters">Masters</option>
          </select>
          {errors.education && (
            <p className="text-red-500 text-sm">{errors.education.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-secondary px-8 text-white">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
