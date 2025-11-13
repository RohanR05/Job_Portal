"use client";
import registerUser from "@/app/actions/auth/register";
import RegisterForm from "@/components/Form/RegisterForm";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const handleRegister = async (payload) => {
    try {
      const result = await registerUser(payload);
      console.log("registerUser result:", result);

      // ✅ Detect all common success responses
      const isSuccess =
        result?.success === true ||
        result?.acknowledged === true ||
        Boolean(result?.insertedId) ||
        (result && typeof result === "object" && !result?.error);

      if (isSuccess) {
        // ✅ Success Alert
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Your account has been created successfully.",
          confirmButtonColor: "#127957",
          timer: 1800,
          showConfirmButton: false,
        }).then(() => {
          router.push("/login"); // 🔥 Redirect to login
        });
      } else {
        // ❌ Error Alert
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: result?.message || "Something went wrong. Please try again.",
          confirmButtonColor: "#127957",
        });
      }
    } catch (error) {
      console.error("Register Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please try again later.",
        confirmButtonColor: "#127957",
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg py-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Create an Account
      </h2>

      <div className="">
        <RegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default Register;
