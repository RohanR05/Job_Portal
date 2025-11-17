"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const { data: user, isLoading, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const res = await fetch("/api/user"); // your API route
      if (!res.ok) throw new Error("Not logged in");
      return res.json();
    },
    enabled: status === "authenticated", // fetch only if logged in
  });

  useEffect(() => {
    if (status === "unauthenticated") signIn(undefined, { callbackUrl: "/login" });
  }, [status]);

  if (status === "loading" || isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h1>Hello {user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.gender}</p>
    </div>
  );
}
