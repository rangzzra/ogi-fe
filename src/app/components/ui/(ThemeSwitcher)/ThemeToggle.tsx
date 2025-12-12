"use client";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark"
    document.documentElement.classList.add(saved)
    setTheme(saved)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains("dark") ? "light" : "dark";
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-white/10 hover:bg-transparent border-2 border-white/10 hover:border-white/20 cursor-pointer z-50">
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-200" />
      )}
    </button>
  );
}
