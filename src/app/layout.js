import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Internify | Bangladesh Job Portal",
  description:
    "Find internships and entry-level jobs across Bangladesh. Connect with employers and kickstart your career.",
};

export default function RootLayout({ children }) {
  const hide = ["/login", "/register", "/dashBoard"].includes(
    typeof window !== "undefined" ? window.location.pathname : ""
  );

  return (
    <html lang="en" className="bg-accent">
      <NextAuthSessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Navbar (fixed) */}
          {!hide && <Navbar />}

          {/* Main Content */}
          <main className="max-w-7xl mx-auto bg-accent mt-18">{children}</main>

          {/* Footer */}
          {!hide && <Footer />}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
