"use client";

import PerspectiveCard from "../../components/ui/PerspectiveCard";
import OGIAsset09 from "@/public/imgs/backgrounds/ogi-asset-09.png";
import OGIAsset10 from "@/public/imgs/backgrounds/ogi-asset-10.png";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import SectionSnap from "../../libs/SnapScroll";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="grid grid-cols-12 gap-12 w-full">
        <div className="col-span-12">
          <h2 className="text-4xl font-semibold text-center">Showcase</h2>
        </div>
        <SectionSnap />
        <section className="grid grid-cols-12 col-span-12 gap-12 min-h-screen panel">
          <div className="col-span-6 flex flex-col justify-center divide-y">
            <div className="flex flex-col gap-4 justify-center py-5 col-span-12 h-max hover:text-amber-600 cursor-pointer">
              <div className="flex flex-col gap-2 justify-center">
                <h3 className="text-2xl font-semibold">
                  Shima Trading Indonesia
                </h3>
                <p>
                  Shima Trading Indonesia is a leading distributor of
                  high-quality
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center -space-y-72 w-full h-full">
              <PerspectiveCard
                src={OGIAsset10}
                alt="Digital Marketing Example"
              />
              <PerspectiveCard
                src={OGIAsset09}
                alt="Digital Marketing Example"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 col-span-12 gap-12 min-h-screen panel">
          <div className="col-span-6 flex flex-col justify-center divide-y">
            <div className="flex flex-col gap-4 justify-center py-5 col-span-12 h-max hover:text-amber-600 cursor-pointer">
              <div className="flex flex-col gap-2 justify-center">
                <h3 className="text-2xl font-semibold">
                  Shima Trading Indonesia
                </h3>
                <p>
                  Shima Trading Indonesia is a leading distributor of
                  high-quality
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center -space-y-72 w-full h-full">
              <PerspectiveCard
                src={OGIAsset10}
                alt="Digital Marketing Example"
              />
              <PerspectiveCard
                src={OGIAsset09}
                alt="Digital Marketing Example"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
