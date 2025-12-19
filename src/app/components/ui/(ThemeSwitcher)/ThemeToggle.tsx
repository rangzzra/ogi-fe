"use client";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle({
  variant,
}: {
  variant?: "light" | "dark";
}) {
  const [theme, setTheme] = useState<string>("");

  const iconClasses = variant === "dark" ? "text-gray-200" : "text-black";
  const buttonClasses = variant === "dark" ? "border-gray-200 hover:border-gray-200 hover:bg-gray-200/10" :  "border-black hover:border-black hover:bg-black/10";

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
    <button onClick={toggleTheme} className={`p-2 rounded-full hover:bg-transparent border-2 cursor-pointer z-50 ${buttonClasses}`}>
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className={`w-6 h-6 ${iconClasses}`} />
      )}
    </button>
  );
}
