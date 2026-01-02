import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

/* Components */
import Navbar from "@/src/components/Navbar";
import Container from "@/src/components/Container";
import ThemeProvider from "@/src/components/ui/(ThemeSwitcher)/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozora Global Indonesia",
  description: "Ozora Global Indonesia Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Navbar />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
