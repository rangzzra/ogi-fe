"use client";

import Image from "next/image";
import OGIAsset09 from "@/public/imgs/backgrounds/ogi-asset-09.png";
import OGIAsset10 from "@/public/imgs/backgrounds/ogi-asset-10.png";
import WireGrid from "@/public/imgs/items/wire-grid.svg";

import {
  BoldIcon,
  UnderlineIcon,
  StrikethroughIcon,
  ItalicIcon,
  Bars3BottomLeftIcon,
  Bars3CenterLeftIcon,
  Bars3Icon,
  Bars3BottomRightIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";

import { Separator } from "@/src/components/ui/separator";

import useScrollReveal from "../../../lib/useScrollReveal";

export default function News() {
  const News = [
    {
      id: 1,
      title: "OGI Launches New Website",
      date: "2024-06-01",
      summary:
        "We are excited to announce the launch of our new website, featuring a fresh design and improved user experience.",
      image: OGIAsset09,
    },
    {
      id: 2,
      title: "OGI Partners with Tech Innovators",
      date: "2024-05-15",
      summary:
        "OGI has partnered with leading tech innovators to bring cutting-edge solutions to our clients.",
      image: OGIAsset10,
    },
    {
      id: 3,
      title: "OGI Wins Industry Award",
      date: "2024-04-30",
      summary:
        "We are proud to announce that OGI has won the prestigious Industry Excellence Award for our outstanding services.",
      image: OGIAsset09,
    },
    {
      id: 4,
      title: "OGI Expands Service Offerings",
      date: "2024-04-10",
      summary:
        "OGI is expanding its service offerings to include new digital marketing and web development solutions.",
      image: OGIAsset10,
    },
    {
      id: 5,
      title: "OGI Hosts Annual Tech Conference",
      date: "2024-03-25",
      summary:
        "Join us for our annual tech conference where industry leaders will share insights on the latest trends and technologies.",
      image: OGIAsset09,
    },
    {
      id: 6,
      title: "OGI Launches Community Initiative",
      date: "2024-03-10",
      summary:
        "OGI is proud to launch a new community initiative aimed at supporting local tech startups and entrepreneurs.",
      image: OGIAsset10,
    },
    {
      id: 7,
      title: "OGI Releases New Case Studies",
      date: "2024-02-28",
      summary:
        "Check out our latest case studies showcasing successful projects and satisfied clients.",
      image: OGIAsset09,
    },
    {
      id: 8,
      title: "OGI Welcomes New Team Members",
      date: "2024-02-15",
      summary:
        "We are excited to welcome new talent to the OGI team, bringing fresh perspectives and expertise.",
      image: OGIAsset10,
    },
  ];
  return (
    <section id="news" className="py-20">
      <div className="grid grid-cols-12 w-full relative -space-y-20">
        <div className="col-span-12 flex flex-col gap-4 pb-24 ps-8 pt-8 rounded-3xl bg-[url('/imgs/items/grid.svg')] bg-cover bg-bottom bg-no-repeat reveal">
          <h2 className="font-semibold text-6xl text-amber-600 reveal">News</h2>
          <p className="text-lg text-gray-600 reveal">
            Stay updated with the latest news and updates from us.
          </p>
        </div>
        <div className="col-span-12 flex justify-between items-start p-8 border rounded-3xl reveal">
          {News.slice(0, 4).map((newsItem) => (
            <div
              key={newsItem.id}
              // className="max-w-sm bg-white/70 backdrop-blur-md flex flex-col gap-2 rounded-3xl p-4 not-visited:hover:scale-105 transform transition-all duration-300 ease-in-out border shadow-xl"
              className="max-w-sm flex flex-col gap-2 p-4 transform not-visited:hover:bg-amber-600/10 rounded-3xl transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col bg-gray-100/50 border border-gray-200 rounded-xl overflow-hidden">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="rounded-xl shadow-lg reveal"
                />
                <div className="px-2 py-3 flex gap-2 items-center reveal">
                  <span className="text-xs px-2 py-1 border rounded-full bg-white">
                    Inspiration
                  </span>
                  <span className="text-xs px-2 py-1 border rounded-full bg-white">
                    Web Design
                  </span>
                </div>
              </div>
              <span className="text-xs text-gray-400 reveal">{newsItem.date}</span>
              <h6 className="text-lg font-medium reveal">{newsItem.title}</h6>
              <p className="text-sm reveal">{newsItem.summary}</p>
            </div>
          ))}
        </div>
        {/* <div className="col-span-12 flex justify-center items-center">
          <div className="rounded-3xl relative w-full text-center px-10 flex flex-col border-2">
            <div id="toolbox-design" className="flex gap-4 py-5">
              <BoldIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <ItalicIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <UnderlineIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <StrikethroughIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <Separator orientation="vertical" className="h-6 self-center" />
              <Bars3Icon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <Bars3CenterLeftIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <Bars3BottomLeftIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <Bars3BottomRightIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200" />
              <ArrowsPointingOutIcon className="w-6 h-6 cursor-pointer hover:text-amber-600 transition-colors duration-200 justify-self-end" />
            </div>
            <Separator />
            <div className="py-5 flex flex-col gap-4">
              <h2 className="text-6xl font-semibold text-amber-600">News</h2>
              <p className="text-lg text-gray-600">
                Stay updated with the latest news and updates from us.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="col-span-12 flex justify-between items-start gap-5">
          {News.slice(4, 8).map((newsItem) => (
            <div
              key={newsItem.id}
              className="max-w-sm bg-white/20 backdrop-blur-md flex flex-col gap-2 rounded-3xl p-4 not-visited:hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col bg-gray-100/50 border border-gray-200 rounded-xl overflow-hidden">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="rounded-xl shadow-lg"
                />
                <div className="px-2 py-3 flex gap-2 items-center">
                  <span className="text-xs px-2 py-1 border rounded-full bg-white">
                    Inspiration
                  </span>
                  <span className="text-xs px-2 py-1 border rounded-full bg-white">
                    Web Design
                  </span>
                </div>
              </div>
              <h6 className="text-lg font-medium">{newsItem.title}</h6>
              <p className="text-sm">{newsItem.summary}</p>
              <span className="text-xs text-gray-400">{newsItem.date}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
