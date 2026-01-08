"use client";

import { Bars2Icon } from "@heroicons/react/24/outline";
import HamburgerButton from "@/src/components/ui/(Navbar)/HamburgerButton";
import { HomeIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/src/components/ui/separator";
import OGILogo from "@/public/imgs/logos/ogi-logo.svg";
import ExploreAsset from "@/public/imgs/undraw/undraw_adventure-map_3e4p.svg";

import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/src/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import { useState } from "react";

// {
//     "data": {
//         "menus": {
//             "nodes": [
//                 {
//                     "id": "dGVybTozMQ==",
//                     "name": "Navbar ID",
//                     "slug": "navbar-id",
//                     "menuItems": {
//                         "nodes": [
//                             {
//                                 "id": "cG9zdDoxODY=",
//                                 "label": "Beranda",
//                                 "url": "/"
//                             },
//                             {
//                                 "id": "cG9zdDoyMTQ=",
//                                 "label": "Berita",
//                                 "url": "https://ndev-01-api.ozoraglobal.com/#news"
//                             },
//                             {
//                                 "id": "cG9zdDoxODg=",
//                                 "label": "Layanan Bisnis",
//                                 "url": "https://ndev-01-api.ozoraglobal.com/layanan/layanan-bisnis/"
//                             },
//                             {
//                                 "id": "cG9zdDoyMjk=",
//                                 "label": "Portofolio",
//                                 "url": "https://ndev-01-api.ozoraglobal.com/#portofolio"
//                             },
//                             {
//                                 "id": "cG9zdDoyMzA=",
//                                 "label": "Perusahaan",
//                                 "url": "https://ndev-01-api.ozoraglobal.com/#perusahaan"
//                             },
//                             {
//                                 "id": "cG9zdDoyMzE=",
//                                 "label": "Akses",
//                                 "url": "https://ndev-01-api.ozoraglobal.com/#akses"
//                             },
//                             {
//                                 "id": "cG9zdDoyMjg=",
//                                 "label": "Languages",
//                                 "url": "#pll_switcher"
//                             },
//                             {
//                                 "id": "cG9zdDoyMzI=",
//                                 "label": "Konsultasi gratis!",
//                                 "url": "https://ndev-01-api.ozoraglobal.com/konsultasi"
//                             }
//                         ]
//                     }
//                 }
//             ]
//         }
//     },
//     "extensions": {
//         "debug": [
//             {
//                 "type": "DEBUG_LOGS_INACTIVE",
//                 "message": "GraphQL Debug logging is not active. To see debug logs, GRAPHQL_DEBUG must be enabled."
//             }
//         ]
//     }
// }

export default function Navbar({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarMenu = data?.menuItems || [];
  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 ${isOpen ? 'z-50' : 'z-30'}`}>
      <div className="mx-auto px-16 mt-12">
        <div id="wrapper" className="flex items-end justify-end relative">
          <HamburgerButton
            variant={isOpen ? "open" : "close"}
            onClick={() => setIsOpen(!isOpen)}
          />
          <div
            className={`w-full h-max absolute right-0 top-0 pe-20 transition-all duration-300 origin-top-right ${isOpen ? "scale-100" : "scale-0"}`}
          >
            <div className="p-10 grid grid-cols-12 gap-8 bg-white border-2 border-gray-400 backdrop-blur-md shadow-xl w-full rounded-3xl text-black">
              <h1 className="text-4xl font-semibold col-span-12">
                Let's Explore!
              </h1>
              <ul className="col-span-6 flex flex-col gap-2">
                {/* <li>
                  <a href="#" className="flex items-center gap-2 font-semibold -mx-10 px-10 py-5 hover:border-l-4 hover:text-amber-600 border-amber-600 transition-all duration-200">
                    <HomeIcon className="w-8 h-8 inline-block mr-2" />
                    <span className="text-xl">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 font-semibold -mx-10 px-10 py-5 hover:border-l-4 hover:text-amber-600 border-amber-600 transition-all duration-200">
                    <NewspaperIcon className="w-8 h-8 inline-block mr-2" />
                    <span className="text-xl">News</span>
                  </a>
                </li> */}
                {
                  navbarMenu.map((item: any) => (
                    <li key={item.id}>
                      <a href={item.url} className="flex items-center gap-2 font-semibold -mx-10 px-10 py-5 hover:border-l-4 hover:text-amber-600 border-amber-600 transition-all duration-200">
                        <span className="text-xl">{item.label}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
              <div className="col-span-6" id="Search">
                <Image src={ExploreAsset} alt="Explore Adventure Map" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
