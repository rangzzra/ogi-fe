"use client";

import Image from "next/image";
import OGILogo from "@/public/imgs/logos/ogi-logo.svg";

import Link from "next/link";

import useScrollReveal from "../../../lib/useScrollReveal";

export default function Footer() {
  useScrollReveal();
  return (
    <section id="footer" className="py-20">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 grid grid-cols-12 gap-16">
          <div className="col-span-4 gap-10 flex flex-col items-start justify-center reveal">
            <Image
              src={OGILogo}
              alt="Ozora Global Indonesia Logo"
              width={200}
              height={200}
              className="object-contain"
            />
            <p className="text-2xl text-amber-600 max-w-1/2">
              Your <span className="underline font-bold">trusted partner</span>{" "}
              for comprehensive digital solutions.
            </p>
            <div className="flex gap-2 items-center">
              <Link
                href={"#"}
                className="text-gray-600 px-2 py-1 rounded-full hover:bg-gray-600 hover:text-white text-3xl transition duration-300"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 px-2 py-1 rounded-full hover:bg-gray-600 hover:text-white text-3xl transition duration-300"
              >
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
            <p className="text-lg text-gray-600">
              © 2024 Ozora Global Indonesia. All rights reserved.
            </p>
          </div>
          <div className="col-span-4 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold bg-amber-600 text-white w-max reveal">
                PT Ozora Global Indonesia
              </h2>
              <p className="text-md text-gray-600 reveal">
                Plaza Sentral Annex Building Sudirman, Jl. Jenderal Sudirman Kav
                No.47-48 6th Floor (601, Karet Semanggi, Kecamatan Setiabudi,
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930
              </p>
              <p className="text-gray-600 flex items-center reveal">
                <i className="bi bi-telephone-fill mr-2"></i>
                <Link
                  href={"tel:+622129170888"}
                  className="hover:text-amber-600"
                >
                  +62 21 570 - 855 - 3
                </Link>
              </p>
              <p className="text-gray-600 flex items-center">
                <i className="bi bi-envelope-fill mr-2"></i>
                <Link
                  href={"mailto:jkt@ozora-net.co.jp"}
                  className="hover:text-amber-600"
                >
                  jkt@ozora-net.co.jp
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-10">
            <h6 className="font-bold text-2xl text-gray-600 reveal">Explore</h6>
            <ul className="flex flex-col gap-4 **:text-lg **:text-gray-600 **:hover:text-amber-600">
              <li>
                <Link href={"#"} className="reveal">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"#about"} className="reveal">
                  About
                </Link>
              </li>
              <li>
                <Link href={"#services"} className="reveal">
                  Services
                </Link>
              </li>
              <li>
                <Link href={"#contact"} className="reveal">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="col-span-12 flex justify-center">
          <h1 className="text-9xl font-medium text-amber-600">
            Ozora Global Indonesia
          </h1>
        </div> */}
        {/* <div className="col-span-12 border-2 border-amber-600 text-shadow backdrop-blur-2xl rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="bg-amber-600/20 w-full p-10 rounded-xl grid grid-cols-12 gap-10">
            <div className="flex flex-col gap-10 col-span-6">
                <div className="">

                </div>
            </div>
            <div className="col-span-6">
                <div>
                    
                </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
