"use client";

import Container from "@/src/components/Container";
import OGIAsset01 from "@/public/imgs/backgrounds/ogi-asset-02.svg";
import OGIAsset03 from "@/public/imgs/backgrounds/ogi-asset-03.svg";
import OGIAsset05 from "@/public/imgs/backgrounds/ogi-asset-05.svg";
import OGIAsset07 from "@/public/imgs/backgrounds/ogi-asset-07.svg";
import OGIAsset08 from "@/public/imgs/backgrounds/ogi-asset-08.svg";
import Grid from "@/public/imgs/items/grid.svg";
import Marquee from "../../../lib/Marquee";
import Image from "next/image";
import { SignalIcon } from "@heroicons/react/24/outline";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TypeIt from "typeit-react";
import { Separator } from "@/src/components/ui/separator";
import { useScrollMove } from "../../../lib/useScrollMove";
import { useScrollLine } from "../../../lib/useScrollLine";

import useScrollReveal from "../../../lib/useScrollReveal";

import findBusinessServiceByLanguage from "@/src/features/home/queries/businessService/findBusinessServiceByLanguage";

export default function BusinessService({
  data,
}: {
  data: Awaited<ReturnType<typeof findBusinessServiceByLanguage>>;
}) {
  const h = useScrollLine(100, 2);
  useScrollReveal();

  const businessService = data;

  const highlightText = (text: string, keyword: string) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={index} className="text-amber-600">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section
      id="business-service"
      className="py-20 bg-[url('/imgs/items/grid.svg')] bg-contain bg-top bg-no-repeat reveal"
    >
      <div className="grid grid-cols-12 gap-12 w-full">
        <div className="col-span-12 mb-16">
          <Marquee
            speed={20}
            className="text-7xl font-semibold text-gray-400 -mx-16 reveal"
          >
            {highlightText(businessService.content, "Ozora Global Indonesia")}
            <ArrowTrendingUpIcon className="w-16 h-16 inline-block mx-8" />
          </Marquee>
        </div>
        <div className="col-span-12 w-full">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-4 flex flex-col gap-4 w-full mt-auto relative group bg-[url('/imgs/backgrounds/ogi-asset-02.svg')] bg-no-repeat bg-fixed bg-cover bg-top h-[50svh] relative overflow-hidden reveal">
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/10 bg-opacity-25 rounded-3xl opacity-0 opacity-100 transition-opacity duration-300 group-hover:backdrop-blur-sm"></div>
            <div className="absolute bottom-10 left-1/2 top-1/2 -translate-1/2 w-full flex justify-center items-center pointer-events-none">
              <div className="flex justify-between gap-4 items-center px-8 py-4 rounded-full border-2 border-gray-300 bg-white/10 backdrop-blur-md group-hover:scale-105 transform transition-all duration-300 ease-in-out h-max">
                <h6 className="text-2xl text-white font-semibold flex items-center gap-2 reveal">
                  Our Business Services
                  <span className="text-amber-400">
                    <TypeIt
                      options={{ loop: true }}
                      getBeforeInit={(instance) => {
                        instance
                          .type("For Your Digital Growth")
                          .pause(750)
                          .delete(25)
                          .pause(500)
                          .type("Better Customer Engagement")
                          .pause(750)
                          .delete(26)
                          .pause(500)
                          .type("Scaling Your Business")
                          .pause(750)
                          .delete(21)
                          .pause(500)
                          .type("Modern Business Needs")
                          .pause(750)
                          .delete(21)
                          .pause(500);

                        return instance;
                      }}
                    ></TypeIt>
                  </span>
                </h6>
                <MagnifyingGlassIcon className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-24 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full bg-gray-200/50">
            <div
              className="w-1 rounded-full bg-amber-600"
              style={{ height: `${h}%` }}
            ></div>
          </div>
          <div className="col-span-6">
            <Image
              src={OGIAsset05}
              alt="OGI Asset 01"
              className="w-full h-auto rounded-2xl shadow-2xl reveal"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold mb-4 reveal">
              Website Development & App Design
            </h3>
            <p className="text-lg reveal">
              We specialize in creating high-quality Landing Pages, Website
              Pages, Website Redesigns, SEO Optimization, and customized Content
              Management Systems (CMS) to help you build a strong digital
              presence.
            </p>
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold mb-4 reveal">
              Graphic Design
            </h3>
            <p className="text-lg reveal">
              From Social Media Post Designs and Illustrations to Banners,
              Flyers, Business Cards, Brochures, and Company Profiles, we
              deliver creative and impactful designs.
            </p>
          </div>
          <div className="col-span-6">
            <Image
              src={OGIAsset03}
              alt="OGI Asset 03"
              className="w-full h-auto rounded-2xl shadow-2xl reveal"
            />
          </div>
          <div className="col-span-6">
            <Image
              src={OGIAsset08}
              alt="OGI Asset 08"
              className="w-full h-auto rounded-2xl shadow-2xl reveal"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold mb-4 reveal">
              System Development
            </h3>
            <p className="text-lg reveal">
              We offer custom development for Learning Management Systems (LMS)
              and Web Commerce solutions (Shopify) to support your digital
              business operations.
            </p>
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold mb-4 reveal">
              Japanese-Indonesian Translation Services
            </h3>
            <p className="text-lg reveal">
              Professional Translation and Interpretation services, including
              website and article content translation, ensuring accurate and
              culturally nuanced communication between Japanese and Indonesian
              languages.
            </p>
          </div>
          <div className="col-span-6">
            <Image
              src={OGIAsset07}
              alt="OGI Asset 07"
              className="w-full h-auto rounded-2xl shadow-2xl reveal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
