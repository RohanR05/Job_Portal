"use client";

import Theme from "@/components/Theme/Theme";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function MiniProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You are not logged in</p>;

  return (
    <div className="w-full shadow-lg rounded-2xl bg-neutral p-4">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={100}
          height={100}
          className="rounded-full"
        />
      )}

      <div className="w-full text-xl font-semibold mt-2">
        <h2 className="text-primary font-bold">{session.user.name}</h2>
        <h2>Role: {session.user.role || "user"}</h2>
      </div>

      <Theme />
    </div>
  );
}
