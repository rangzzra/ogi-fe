"use client";

import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(saved);
  }, []);

  return <>{children}</>;
}
