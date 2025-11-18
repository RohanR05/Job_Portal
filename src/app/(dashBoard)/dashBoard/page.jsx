"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const res = await fetch("/api/user"); // API route to get logged-in user
      if (!res.ok) throw new Error("Not logged in");
      return res.json();
    },
    enabled: status === "authenticated",
  });

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (status === "unauthenticated")
      signIn(undefined, { callbackUrl: "/login" });
  }, [status]);

  if (status === "loading" || isLoading) return <p>Loading...</p>;
  if (error) return <p>{error?.message || "Something went wrong"}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h1>Hello {user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Gender: {user.phone}</p>
    </div>
  );
}
