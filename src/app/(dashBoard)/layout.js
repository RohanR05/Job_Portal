// (dashBoard)/layout.jsx
import React from "react";

export const metadata = {
  title: "DashBoard",
};

const DashLayout = ({ children }) => {
  return (
    <div className="bg-neutral">
      {/* You can add your own dashboard-specific navbar if needed */}
      <main>{children}</main>
    </div>
  );
};

export default DashLayout;
