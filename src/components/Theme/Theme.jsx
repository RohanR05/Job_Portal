"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Theme() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  if (!mounted) return null;

  return (
    <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
