"use client";

import Image from "next/image";
import OgiSimpleLogo from "@/public/imgs/logos/ogi-simple-logo.svg";
import WebDesignBackground from "@/public/imgs/backgrounds/web-design-bg.jpg";
import OGIAsset01 from "@/public/imgs/backgrounds/ogi-asset-01.svg";
import OGIAsset02 from "@/public/imgs/backgrounds/ogi-asset-02.svg";
import OGIAsset03 from "@/public/imgs/backgrounds/ogi-asset-03.svg";
import OGIAsset04 from "@/public/imgs/backgrounds/ogi-asset-04.svg";
import OGIAsset05 from "@/public/imgs/backgrounds/ogi-asset-05.svg";
import OGIAsset06 from "@/public/imgs/backgrounds/ogi-asset-06.svg";
import Dinosaur from "@/public/imgs/items/dinosaur.svg";
import AppDesignBackground from "@/public/imgs/backgrounds/app-design-bg.jpg";
import FirstItemCategory from "@/public/imgs/items/g-01.png";
import SecondItemCategory from "@/public/imgs/items/g-02.png";
import ThirdItemCategory from "@/public/imgs/items/g-03.png";
import FourthItemCategory from "@/public/imgs/items/g-04.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import TypeIt from "typeit-react";
import Container from "@/src/components/Container";
import SignalIcon from "../../../components/ui/SignalIcon";
import BuildingWebsiteAsset from "@/public/imgs/undraw/undraw_building-websites_k2zp.svg";
import OfflineAsset from "@/public/imgs/undraw/undraw_connection-lost_am29.svg";
import LocationSearch from "@/public/imgs/undraw/undraw_location-search_nesh.svg";
import WebsiteVisitorAsset from "@/public/imgs/undraw/undraw_website-visitors_qy9c.svg";
import useScrollReveal from "../../../lib/useScrollReveal";
import findByLanguage from "@/src/features/home/queries/hero/findHeroByLanguage";

export default function Hero({ data }: { data: Awaited<ReturnType<typeof findByLanguage>> }) {
  useScrollReveal();

  const hero = data.heroItem;

  return (
  <section
    id="hero"
    className="flex items-start justify-start h-content pt-[calc(12rem+56px)] text-white"
  >
    <div className="absolute -z-10 inset-0 bg-black/50 h-screen backdrop-blur-[3px]" />

    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute -z-20 top-0 left-0 w-full h-screen object-cover"
    >
      <source
        src={hero.heroItemContent.heroVideoBanner.node.mediaItemUrl}
        type="video/mp4"
      />
    </video>

    <div className="grid grid-cols-12 w-full gap-x-8 gap-y-32">
      <div className="col-span-12 my-6 grid grid-cols-12">
        {/* Title */}
        <h1 className="text-7xl font-semibold col-span-8 reveal">
          {hero.title}
        </h1>

        {/* Category Icons + Caption */}
        <h6 className="col-span-4 items-end flex flex-col gap-4 reveal">
          <div className="flex justify-end -space-x-6">
            {hero.heroItemContent.industryCategoryItem.nodes
              .slice(0, 3)
              .map((item: any) => (
                <div
                  key={item.id}
                  className="p-2 bg-white rounded-full border-2 border-white shadow-lg"
                >
                  <Image
                    src={
                      item.detailBusinessCategory.categoryImage.node.sourceUrl
                    }
                    alt={item.name}
                    className="w-12 h-12"
                    width={48}
                    height={48}
                  />
                </div>
              ))}
          </div>

          <span className="text-2xl">
            <span className="font-bold">Flexible</span>{" "}
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                hero.heroItemContent.industryCategoryCaption.forEach(
                  (caption: any) => {
                    instance
                      .type(caption.industryCategoryCaptionText)
                      .pause(750)
                      .delete(caption.industryCategoryCaptionText.length)
                      .pause(500);
                  }
                );
                instance.type(".");
                return instance;
              }}
            />
          </span>
        </h6>
      </div>

      {/* Left Content */}
      <div className="col-span-4 flex flex-col h-full gap-8 relative">
        <div className="flex flex-col gap-8">
          <h3
            className="text-3xl font-semibold reveal"
            dangerouslySetInnerHTML={{ __html: hero.content }}
          />
          <ArrowDownIcon className="w-10 h-10 text-amber-600 animate-bounce" />
        </div>

        <Image
          src={hero.heroItemContent.leftSideImage.node.sourceUrl}
          alt="Left hero image"
          className="w-full h-full rounded-3xl bg-white/20 backdrop-blur-md object-cover p-4 reveal"
          width={600}
          height={600}
        />
      </div>

      {/* Right Content */}
      <div className="col-span-8 flex flex-col h-full">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-4 flex flex-col gap-4 w-full mt-auto relative group">
          <Image
            src={hero.heroItemContent.rightSideImage.node.sourceUrl}
            alt="Right hero image"
            className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:brightness-75 group-hover:shadow-xl reveal"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </div>
  </section>
);

}
