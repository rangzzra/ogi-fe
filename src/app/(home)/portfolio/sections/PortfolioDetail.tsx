"use client";

import Image from "next/image";

import FigmaIcon from "@/public/imgs/items/figma.svg";

export default function PortfolioItem() {
  <div className="col-span-12">
    <div className="flex items-center justify-center gap-16">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2"
        >
          <div className="p-4 bg-white rounded-full border-2 border-gray-200 shadow-lg">
            <Image src={FigmaIcon} alt="Figma Icon" className="w-12 h-12" />
          </div>
          <span className="text-lg font-medium">Figma</span>
        </div>
      ))}
    </div>
  </div>;
}
