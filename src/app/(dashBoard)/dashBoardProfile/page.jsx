import { authOptions } from "@/app/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const DashBoardProfile = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) return <p>You are not logged in</p>;

  return (
    <div className="w-full shadow-lg  rounded-2xl bg-accent">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={100}
          height={100}
          className="rounded-full"
        />
      )}{" "}
      <div className="w-full text-xl font-semibold">
        {" "}
        <h2>{session.user.name}</h2>
        <h2>Role: {session.user.role || "user"}</h2>
      </div>
    </div>
  );
};

export default DashBoardProfile;
