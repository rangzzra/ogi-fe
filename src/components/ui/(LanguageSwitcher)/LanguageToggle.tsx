"use client";
import getLanguages from "@/src/features/queries/language/getLanguages";
import { LanguageIcon } from "@heroicons/react/24/outline";

import { useState, useEffect } from "react";

export default function LanguageToggle({
  languages,
}: {
  languages: { id: string; slug: string; locale: string; name: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("en");

  useEffect(() => {
    /* Sinkronisasi state dengan cookie */
    const current = document.cookie
      .split("; ")
      .find((row) => row.startsWith("language="))
      ?.split("=")[1];

    setActive(current || "en");
  }, []);

  const selectLanguage = (slug: string) => {
    /* Set bahasa global (server + client) */
    document.cookie = `language=${slug}; path=/; max-age=31536000`;
    setActive(slug);
    setOpen(false);
    location.reload();
  };

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full border-2 cursor-pointer relative"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="sr-only">Toggle Language</span>
        <LanguageIcon className="w-6 h-6" />

        <span className="absolute -top-2 -right-2 min-w-6 h-6 px-1 bg-amber-600 text-white text-xs font-semibold rounded-full flex items-center justify-center">
          {active.toUpperCase()}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 min-w-32 bg-white border rounded shadow text-black z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.slug}
              role="menuitem"
              onClick={() => selectLanguage(lang.slug)}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                active === lang.slug ? "font-semibold" : ""
              }`}
            >
              {lang.name} ({lang.slug.toUpperCase()})
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
