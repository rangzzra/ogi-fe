"use client";

import Image from "next/image";
import OGILogo from "@/public/imgs/logos/ogi-logo.svg";
import WorkWithUs from "@/public/imgs/undraw/undraw_engineering-team_13ax.svg";
import Link from "next/link";

import useScrollReveal from "../../../lib/useScrollReveal";

export default function CTA() {
  useScrollReveal();
  return (
    <section id="cta" className="py-20">
      <div className="bg-amber-600/20 rounded-4xl p-5 shadow-lg backdrop-blur-sm">
        <div className="grid grid-cols-12 bg-white backdrop-blur-sm rounded-3xl">
          <div className="col-span-5 -mt-24 px-8 reveal">
            <Image
              src={WorkWithUs}
              alt="CTA Image"
              className="w-full h-full rounded-s-3xl reveal"
            />
          </div>
          <div className="col-span-7 flex flex-col justify-center p-1 px-10 py-20 bg-[url('/imgs/items/grid.svg')] bg-cover bg-center bg-no-repeat rounded-e-3xl">
            <h1 className="text-6xl font-medium text-amber-600 reveal">
              Let’s work together.
            </h1>
            <Link href="#" className="mt-6 w-fit text-xl px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors duration-200 reveal">
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
