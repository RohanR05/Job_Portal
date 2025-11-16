import { authOptions } from "@/app/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const DashBoardProfile = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) return <p>You are not logged in</p>;

  return (
    <div className="flex-col w-full hidden lg:flex shadow shadow-secondary rounded-2xl">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={150}
          height={150}
          className="rounded-full"
        />
      )}{" "}
      <h2 className="text-primary text-2xl font-semibold">
        {session.user.name}
      </h2>
    </div>
  );
};

export default DashBoardProfile;
