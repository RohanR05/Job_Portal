"use client";

import { usePathname } from "next/navigation";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function NavbarWrapper({ children }) {
  const pathname = usePathname();

  // paths where navbar/footer should be hidden
  const hide = ["/login", "/register", "/dashBoard"].some((p) =>
    pathname.startsWith(p)
  );

  return (
    <>
      {!hide && <Navbar />}
      <main className="max-w-7xl mx-auto bg-accent mt-18">{children}</main>
      {!hide && <Footer />}
    </>
  );
}
