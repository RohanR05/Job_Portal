"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

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
    enabled: status === "authenticated", // run only when user is logged in
  });

  if (status === "loading" || isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h1>Hello {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.createdAt}</p>
      <p></p>
    </div>
  );
}
