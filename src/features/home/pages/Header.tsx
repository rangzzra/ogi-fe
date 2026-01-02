import ThemeToggle from "@/src/components/ui/(ThemeSwitcher)/ThemeToggle";
import LanguageToggle from "@/src/components/ui/(LanguageSwitcher)/LanguageToggle";
import Image from "next/image";
import OGILogo from "@/public/imgs/logos/ogi-logo.svg";
import OGILogoWhite from "@/public/imgs/logos/ogi-logo-white.svg";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Header({
  variant
}: {
  variant?: "light" | "dark";
}) {

  const classes = variant === "dark" ? "text-gray-200" : "";
  return (
    <section
      id="header"
      className={`my-12 absolute z-30 flex justify-between items-center w-[calc(100%-13rem)] ${classes}`}
    >
      <div id="header-start">
        <Image
          src={variant === "dark" ? OGILogoWhite : OGILogo}
          alt="Ozora Global Indonesia Logo"
          className="w-48 h-auto"
        />
      </div>
      <div id="header-end" className="flex items-center gap-4">
        <LanguageToggle variant={variant} />
        <ThemeToggle variant={variant} />
        <div className={`rounded-full px-6 py-3 border-2 ${variant === "dark" ? "border-gray-200" : ""} hover:bg-amber-600 hover:text-white transition duration-300`}>
          <Link
            href="#about"
            className="text-lg font-medium flex items-center gap-2"
          >
            <span>About Us</span>
            <ArrowUpRightIcon className="w-5 h-5 inline-block ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
