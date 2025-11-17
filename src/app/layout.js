import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import NavbarWrapper from "@/components/NavbarWrapper/NavbarWrapper";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";

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
    <html lang="en" className="bg-neutral">
      <NextAuthSessionProvider>
        <ReactQueryProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral`}
          >
            <NavbarWrapper>{children}</NavbarWrapper>
          </body>
        </ReactQueryProvider>
      </NextAuthSessionProvider>
    </html>
  );
}
