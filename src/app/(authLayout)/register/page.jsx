"use client";
import registerUser from "@/app/actions/auth/register";
import RegisterForm from "@/components/Form/RegisterForm";
import React from "react";

const Register = () => {
  const handleRegister = async (payload) => {
    const result = await registerUser(payload);
    console.log(result);
    // You can add toast notifications here
  };

  return (
    <div className="mx-auto w-full">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Create an Account
      </h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
