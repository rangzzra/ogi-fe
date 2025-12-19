"use client";

import Image from "next/image";

import OGISimpleLogo from "@/public/imgs/logos/ogi-simple-logo.svg";
import OGIAsset06 from "@/public/imgs/backgrounds/ogi-asset-06.svg";
import Link from "next/link";

import { BookmarkIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import useScrollReveal from "../../libs/useScrollReveal";

export default function About() {
  useScrollReveal();
  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-12 w-full gap-8">
        <div className="col-span-12 grid grid-cols-12 border border-gray-300 rounded-3xl overflow-hidden reveal">
          <div className="col-span-12 bg-[url('/imgs/backgrounds/ogi-asset-06.svg')] bg-cover bg-center h-96 rounded-t-3xl shadow-lg mb-8 h-32 flex p-10">
            <Image
              src={OGISimpleLogo}
              alt="About Us Background"
              className="w-42 h-42 rounded-xl z-10 px-4 bg-white self-end -mb-32 shadow-lg reveal"
              width={100}
              height={100}
            />
          </div>
          <div className="col-span-12 px-10 flex justify-end items-center gap-4 reveal">
            <div className="flex flex-col items-center bg-white rounded-full p-4 border-2">
              <BookmarkIcon className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex flex-col items-center bg-white rounded-full p-4 border-2">
              <ArrowUpTrayIcon className="w-5 h-5 text-amber-600" />
            </div>
            <Link href="#" className="px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors duration-200">
              Learn More
            </Link>
          </div>
          <div className="col-span-12 p-10 flex flex-col gap-4">
            <h6 className="font-bold text-4xl reveal">
              PT Ozora Global Indonesia
            </h6>
            <p className="text-xl reveal">
              PT Ozora Global Indonesia is a leading digital solutions provider based in Indonesia. We specialize in delivering innovative and comprehensive digital services to help businesses thrive in the digital age. Our team of experts is dedicated to providing top-notch solutions tailored to meet the unique needs of each client.
            </p>
            <div className="flex flex-col gap-2 reveal">
              <p className="text-lg">Our Mission:</p>
              <ul className="list-disc list-inside text-lg">
                <li>To empower businesses with cutting-edge digital solutions.</li>
                <li>To foster innovation and creativity in all our projects.</li>
                <li>To build long-lasting relationships with our clients based on trust and excellence.</li>
              </ul>
            </div>
            {/* tag */}
            <div className="flex gap-2 mt-4 reveal">
              <span className="text-sm px-3 py-1 border rounded-full bg-amber-50 text-amber-600">
                Digital Solutions
              </span>
              <span className="text-sm px-3 py-1 border rounded-full bg-amber-50 text-amber-600">
                Innovation
              </span>
              <span className="text-sm px-3 py-1 border rounded-full bg-amber-50 text-amber-600">
                Client-Centric
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
