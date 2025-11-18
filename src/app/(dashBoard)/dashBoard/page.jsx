"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Profile from "@/components/DashBoardUi/Profile";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const res = await fetch("/api/user");
      if (!res.ok) throw new Error("Not logged in");
      return res.json();
    },
    enabled: status === "authenticated",
  });

  useEffect(() => {
    if (status === "unauthenticated")
      signIn(undefined, { callbackUrl: "/login" });
  }, [status]);

  if (status === "loading" || isLoading)
    return <p className="text-center text-primary text-lg">Loading...</p>;

  if (error) return <p className="text-center text-red-500">{error.message}</p>;
  if (!user) return <p className="text-center text-warning">No user found</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto my-10 p-6 bg-accent rounded-2xl shadow-lg"
    >
      {/* USER HEADER */}
      <div className="flex flex-col items-center space-y-3">
        <motion.img
          src={user.image}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-primary shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-3xl font-bold text-primary">{user.username}</h1>
        <p className="text-secondary text-sm">
          Member since: {new Date(user.createdAt).toDateString()}
        </p>
      </div>

      {/* ✔ Profile Component instead of the big InfoCard section */}
      <Profile user={user} />
    </motion.div>
  );
}
