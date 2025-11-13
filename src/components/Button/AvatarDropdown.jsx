"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import LoginButton from "../Button/LoginButton";
import LogOutButton from "../Button/LogOutButton";

const AvatarDropdown = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  // If user is NOT logged in, show login button
  if (!session?.user) {
    return <LoginButton className="px-4 py-2 rounded btn-secondary" />;
  }

  // If user is logged in, show avatar + dropdown
  return (
    <div className="relative">
      {/* Avatar */}
      <Image
        src={session.user.image || "/default-avatar.png"}
        alt={session.user.username || "User"}
        width={40}
        height={40}
        className="rounded-full cursor-pointer border-2 border-primary"
        onClick={toggleDropdown}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt2 z-50">
          <div className="flex flex-col">
            <LogOutButton className="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
