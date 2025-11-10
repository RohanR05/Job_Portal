import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import NavbarWrapper from "@/components/NavbarWrapper/NavbarWrapper";

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
  return (
    <html lang="en" className="bg-accent">
      <NextAuthSessionProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NavbarWrapper>{children}</NavbarWrapper>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
