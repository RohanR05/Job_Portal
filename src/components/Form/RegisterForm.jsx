"use client";
import React, { useState } from "react";
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
  FaLock,
} from "react-icons/fa";

const RegisterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [uploading, setUploading] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      setUploading(true);

      // Upload image to ImgBB
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();
      if (!result.success) throw new Error("Image upload failed");

      const imageUrl = result.data.display_url;

      // Replace the File object with URL
      const payload = {
        ...data,
        image: imageUrl,
        role: "user",
      };

      await onSubmit(payload);
      reset();
    } catch (err) {
      console.error("Register error:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="grid md:grid-cols-2 gap-8 text-neutral"
    >
      {/* Username */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-primary mb-2">
          <FaUser className="text-primary" /> Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("username", { required: "Username is required" })}
          className="input input-bordered w-full text-secondary"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-primary mb-2">
          <FaEnvelope className="text-primary" /> Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
          className="input input-bordered w-full text-secondary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
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
          className="input input-bordered w-full text-secondary"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-primary mb-2">
          <FaPhone className="text-primary" /> Phone
        </label>
        <input
          type="tel"
          placeholder="Enter your phone"
          {...register("phone", { required: "Phone number is required" })}
          className="input input-bordered w-full text-secondary"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-primary mb-2">
          <FaHome className="text-primary" /> Address
        </label>
        <input
          type="text"
          placeholder="Enter your address"
          {...register("address", { required: "Address is required" })}
          className="input input-bordered w-full text-secondary"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      {/* Image File Upload */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-primary mb-2">
          <FaImage className="text-primary" /> Profile Image
        </label>
        <input
          type="file"
          accept="image/*"
          {...register("image", { required: "Image is required" })}
          className="file-input file-input-bordered w-full text-secondary"
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>

      {/* Gender */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-primary mb-2">
          <FaVenusMars className="text-primary" /> Gender
        </label>
        <select
          {...register("gender", { required: "Gender is required" })}
          className="select select-bordered w-full text-secondary"
        >
          <option value="">Select your gender</option>
          <option value="Male" className="text-primary font-semibold">
            Male
          </option>
          <option value="Female" className="text-primary font-semibold">
            Female
          </option>
          <option value="Other" className="text-primary font-semibold">
            Other
          </option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>

      {/* Birth */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-primary mb-2">
          <FaBirthdayCake className="text-primary" /> Date of Birth
        </label>
        <input
          type="date"
          {...register("birth", { required: "Birth date is required" })}
          className="input input-bordered w-full text-secondary"
        />
        {errors.birth && (
          <p className="text-red-500 text-sm">{errors.birth.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 text-center mt-6">
        <button
          type="submit"
          className="btn w-full btn-primary btn-outline font-semibold"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Register"}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
