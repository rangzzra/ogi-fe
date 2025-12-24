import Container from "@/src/app/components/Container";
import PortfolioHero from "../sections/PortfolioHero";
import Header from "@/src/app/(home)/sections/Header";
import CTA from "@/src/app/(home)/sections/CTA";
import Footer from "@/src/app/(home)/sections/Footer";

import Image from "next/image";
import FigmaIcon from "@/public/imgs/items/figma.svg";
import { Badge } from "@/components/ui/badge";

import { QueueListIcon } from "@heroicons/react/24/outline";

import OGIAsset09 from "@/public/imgs/backgrounds/ogi-asset-09.png";

import { wpRequest } from "@/src/app/libs/wp";

import { Queries } from "@/src/app/libs/queries";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import useScrollReveal from "@/src/app/libs/useScrollReveal";

export default async function Portfolio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = await Queries.findPortfolioById();
  const portfolioData = await wpRequest<any>(query, { id: slug });
  const portfolioImages = [
    portfolioData.portofolioItemPost.portfolioContentItem.heroImage?.node
      ?.sourceUrl,

    ...portfolioData.portofolioItemPost.portfolioContentItem.softwarePreview.flatMap(
      (item: any) =>
        item.previewGambar?.nodes?.map((img: any) => img.sourceUrl) ?? []
    ),
  ].filter(Boolean);

  const toolsImages = [
    ...portfolioData.portofolioItemPost.portfolioContentItem.softwarePreview.flatMap(
      (item: any) =>
        item.software.nodes.map(
          (tool: any) =>
            tool.detailSoftwareCategory.softwareCategoryImage.node.sourceUrl
        ) ?? []
    ),
  ]

  return (
    <Container>
      <Header variant="light" />

      <section
        id="portfolio-hero"
        className="pt-[calc(12rem+56px)] h-content text-black py-20"
      >
        <div className="grid grid-cols-12 space-y-14 h-2/3">
          <div className="col-span-2 flex gap-2">
            <QueueListIcon className="w-6 h-6 ml-2 mt-1" />
            <span className="text-xl">Project Details</span>
          </div>
          <div className="col-span-6 flex flex-col gap-8">
            <h1 className="text-5xl font-bold mb-4">
              {portfolioData.portofolioItemPost.title}
            </h1>
            <div
              className="text-lg leading-relaxed text-justify"
              dangerouslySetInnerHTML={{
                __html: portfolioData.portofolioItemPost.content,
              }}
            ></div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6 flex flex-col gap-2">
                <span className="font-semibold">Client</span>
                <h4 className="text-lg">
                  {portfolioData.portofolioItemPost.portfolioContentItem.projectName}
                </h4>
              </div>
              <div className="col-span-6 flex flex-col gap-2">
                <span className="font-semibold">Work Team</span>
                <h4 className="text-lg">
                  {portfolioData.portofolioItemPost.portfolioContentItem.jenisPekerjaan}
                </h4>
              </div>
              <div className="col-span-6 flex flex-col gap-2">
                <span className="font-semibold">Project Team</span>
                <h4 className="text-lg">
                  {portfolioData.portofolioItemPost.portfolioContentItem.timProject.nodes
                    .map((category: any) => category.name)
                    .join(", ")}
                </h4>
              </div>
              <div className="col-span-6 flex flex-col gap-2">
                <span className="font-semibold">Last Updated</span>
                <h4 className="text-lg">{portfolioData.portofolioItemPost.date}</h4>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-2 items-end">
            {portfolioData.portofolioItemPost.portfolioContentItem.itemProjectCategory.nodes.map(
              (category: any) => (
                <Badge
                  key={category.id}
                  className="h-8 min-w-5 rounded-full px-4 text-sm"
                >
                  {category.name}
                </Badge>
              )
            )}
          </div>
          <div className="col-span-6">
            <Image
              src={
                portfolioData.portofolioItemPost.portfolioContentItem
                  .headerImage.node.sourceUrl
              }
              alt="Portfolio Hero Image"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-6 justify-items-stretch">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-2/3 mx-auto"
                >
                  <CarouselContent className="-mt-1 h-[200px]">
                    {portfolioImages.map((imageSrc: string, index: number) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <Card className="p-0 h-full">
                          <CardContent className="p-0 h-full">
                            <Image
                              src={imageSrc}
                              alt="Figma Icon"
                              className="w-full h-full rounded-lg"
                              width={100}
                              height={100}
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="col-span-12 mx-auto">
                <h6 className="text-lg font-semibold mb-4 text-center">Tools & Software Used</h6>
                <div className="flex gap-4">
                  {
                    toolsImages.map((toolSrc: string, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-2"
                      >
                        <div className="p-4 bg-white rounded-full border-2 border-gray-200 shadow-lg">
                          <Image
                            src={toolSrc}
                            alt="Tool Icon"
                            className="w-8 h-8"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    ))  
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </Container>
  );
}
