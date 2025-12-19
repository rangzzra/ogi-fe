"use client";

import PerspectiveCard from "../../components/ui/PerspectiveCard";
import OGIAsset09 from "@/public/imgs/backgrounds/ogi-asset-09.png";
import OGIAsset10 from "@/public/imgs/backgrounds/ogi-asset-10.png";

import { Separator } from "@/components/ui/separator";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import SectionSnap from "../../libs/SnapScroll";
import { use, useState } from "react";

import useScrollReveal from "../../libs/useScrollReveal";

export default function Portfolio() {
  useScrollReveal();
  const [categoryActive, setCategoryActive] = useState("web-design");
  const [projectActive, setProjectActive] = useState(1);
  const categories = ["web-design", "digital-marketing", "branding", "others"];
  const portfolios = [
    {
      id: 1,
      name: "PT Shima Trading Indonesia",
      category: "web-design",
      image: [
        OGIAsset09,
        OGIAsset10
      ]
    },
    {
      id: 2,
      name: "PT Kasan Indonesia",
      category: "web-design",
      image: [
        OGIAsset10,
        OGIAsset09
      ]
    },
    {
      id: 3,
      name: "Autolook",
      category: "web-design",
      image: [
        OGIAsset09,
        OGIAsset10
      ]
    },
    {
      id: 4,
      name: "Branding Project X",
      category: "branding",
      image: [
        OGIAsset10,
        OGIAsset09
      ]
    }
  ];
  return (
    <section id="portfolio" className="py-20">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 flex justify-between items-center reveal">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-6xl font-semibold reveal">Showcase</h2>
            <div className="flex gap-2 reveal">
              {
                categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCategoryActive(category)}
                    className={`text-lg font-medium px-4 py-1 rounded-full border cursor-pointer reveal ${
                      categoryActive === category
                        ? "border-amber-600 bg-amber-50 text-amber-600"
                        : "border-gray-300 bg-white text-gray-600"
                    }`}
                  >
                    {category
                      .split("-")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </button>
                ))
              }
            </div>
          </div>
        </div>
        <section className="grid grid-cols-12 col-span-12 gap-12 panel">
          <div className="col-span-6 flex flex-col justify-center divide-y max-h-2/3 overflow-y-auto bg-[url('/imgs/items/grid.svg')] bg-cover bg-center bg-no-repeat rounded-3xl p-6 reveal">
            {portfolios.filter(portfolio => portfolio.category === categoryActive).map((portfolio) => (
              <div className={`flex flex-col gap-4 justify-center py-5 col-span-12 text-gray-400 h-max cursor-pointer bg-white/20 backdrop-blur-xl ${projectActive === portfolio.id ? "text-gray-800" : ""}`} onClick={() => setProjectActive(portfolio.id)} key={portfolio.id}>
                <div className="flex flex-col gap-2 justify-center">
                  <h3 className="text-2xl font-semibold reveal">
                    {portfolio.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-6 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center -space-y-52 w-full h-full reveal">
              {portfolios.filter(portfolio => portfolio.id === projectActive).map((portfolio) => (
                portfolio.image.map((img: any, index: number) => (
                  <PerspectiveCard
                    key={index}
                    src={img}
                    alt={portfolio.name}
                  />
                ))
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
