"use client";
import registerUser from "@/app/actions/auth/register";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaImage,
  FaHome,
  FaGraduationCap,
  FaVenusMars,
  FaBirthdayCake,
  FaFlag,
} from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (payload) => {
    // console.log("User Data:", payload);
    // payload.preventDefault()
    const result = await registerUser(payload);
    console.log(result)
    reset();
  };

  return (
    <div className="mx-auto bg-accent">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Create an Account
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Username */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaUser className="text-secondary" /> Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
            className="input input-bordered w-full text-neutral"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

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
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaPhone className="text-secondary" /> Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone", { required: "Phone number is required" })}
            className="input input-bordered w-full text-neutral"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaHome className="text-secondary" /> Address
          </label>
          <input
            type="text"
            placeholder="Enter your address"
            {...register("address", { required: "Address is required" })}
            className="input input-bordered w-full text-neutral"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaImage className="text-secondary" /> Profile Image URL
          </label>
          <input
            type="url"
            placeholder="Enter image URL"
            {...register("image", { required: "Image URL is required" })}
            className="input input-bordered w-full text-neutral"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Education */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaGraduationCap className="text-secondary" /> Education
            Qualification
          </label>
          <select
            {...register("education", { required: "Education is required" })}
            className="select select-bordered w-full text-neutral"
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

        {/* Gender */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaVenusMars className="text-secondary" /> Gender
          </label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="select select-bordered w-full text-neutral"
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Birth */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaBirthdayCake className="text-secondary" /> Date of Birth
          </label>
          <input
            type="date"
            {...register("birth", { required: "Birth date is required" })}
            className="input input-bordered w-full text-neutral"
          />
          {errors.birth && (
            <p className="text-red-500 text-sm">{errors.birth.message}</p>
          )}
        </div>

        {/* Nationality */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-primary mb-2">
            <FaFlag className="text-secondary" /> Nationality
          </label>
          <input
            type="text"
            placeholder="Enter your nationality"
            {...register("nationality", {
              required: "Nationality is required",
            })}
            className="input input-bordered w-full text-neutral"
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm">{errors.nationality.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-1 text-center mt-6">
          <button
            type="submit"
            className="btn w-full btn-secondary btn-outline font-semibold"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
