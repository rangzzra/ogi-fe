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

export default async function Portfolio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = ["Web Design", "Branding", "Illustration"];
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
              PT Shima Trading Indonesia
            </h1>
            <p className="text-lg leading-relaxed max-w-xl">
              PT Shima Trading Indonesia is a prominent trading company based in
              Indonesia, specializing in the import and export of a wide range
              of goods.
            </p>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6 flex flex-col gap-2">
                <span className="font-semibold">Client</span>
                <h4 className="text-lg">PT Shima Trading Indonesia</h4>
              </div>
              <div className="col-span-6 flex flex-col gap-2">
                <span className="font-semibold">Role</span>
                <h4 className="text-lg">Lead Designer</h4>
              </div>
              <div className="col-span-6 flex flex-col gap-2">
                <span className="font-semibold">Date</span>
                <h4 className="text-lg">January 2023</h4>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-2 items-end">
            {categories.map((category) => (
              <Badge
                key={category}
                className="h-8 min-w-5 rounded-full px-4 text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="col-span-12">
            <Image
              src={OGIAsset09}
              alt="Portfolio Hero Image"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </Container>
  );
}
