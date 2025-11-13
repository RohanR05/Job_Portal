import React from "react";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";

const LogOutButton = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#127957", // primary color
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut({ callbackUrl: "/" }); // redirect after logout
      }
    });
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="btn btn-outline btn-primary bg-neutral"
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOutButton;
