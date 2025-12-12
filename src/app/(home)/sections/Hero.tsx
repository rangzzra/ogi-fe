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
import Container from "@/src/app/components/Container";
import SignalIcon from "../../components/ui/SignalIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-start justify-start h-content pt-[calc(12rem+56px)] text-white"
    >
      <div className="absolute -z-10 inset-0 bg-black/50 h-screen backdrop-blur-[3px]" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-20 top-0 left-0 w-full h-screen object-cover"
      >
        <source src="/vids/backgrounds/ogi-asset-02.mp4" type="video/mp4" />
      </video>
      <div className="grid grid-cols-12 w-full gap-x-8 gap-y-32">
        <div className="col-span-12 my-6 grid grid-cols-12">
          <h1 className="text-7xl font-semibold col-span-8">
            Your{" "}
            <span className="underline underline-offset-2 text-amber-600">
              trusted partner
            </span>{" "}
            for comprehensive digital solutions.
          </h1>
          <h6 className="col-span-4 items-end flex flex-col gap-4">
            <div className="flex justify-end -space-x-6">
              <div className="p-2 bg-white rounded-full border-2 border-white shadow-lg">
                <Image
                  src={FirstItemCategory}
                  alt="First item category"
                  className="w-12 h-12"
                />
              </div>
              <div className="p-2 bg-white rounded-full border-2 border-white shadow-lg">
                <Image
                  src={SecondItemCategory}
                  alt="Second item category"
                  className="w-12 h-12"
                />
              </div>
              <div className="p-2 bg-white rounded-full border-2 border-white shadow-lg">
                <Image
                  src={ThirdItemCategory}
                  alt="Third item category"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <span className="text-2xl">
              <span className="font-bold">Flexible</span>{" "}
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("for every industry.")
                    .pause(750)
                    .delete(19)
                    .pause(500)
                    .type("for web development.")
                    .pause(750)
                    .delete(21)
                    .pause(500)
                    .type("for mobile apps.")
                    .pause(750)
                    .delete(21)
                    .pause(500)
                    .type("for digital marketing.")
                    .pause(750)
                    .delete(23)
                    .pause(500)
                    .type("for your needs.")
                    .pause(750)
                    .delete(14)
                    .pause(500)
                    .type(".");

                  return instance;
                }}
              />
            </span>
          </h6>
        </div>

        <div className="col-span-4 flex flex-col h-full gap-8 relative">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-semibold">
              Don’t let your business{" "}
              <span className="inline-block bg-amber-600">stay offline.</span>
            </h3>
            <ArrowDownIcon className="w-10 h-10 text-amber-600 animate-bounce" />
          </div>
          <SignalIcon />
        </div>
        <div className="col-span-8 flex flex-col h-full">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-4 flex flex-col gap-4 w-full mt-auto relative group">
            <Image
              src={OGIAsset06}
              alt="Web design background"
              className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:brightness-75 group-hover:shadow-xl group-hover:con  trast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
