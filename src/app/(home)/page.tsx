import Image from "next/image";
import Hero from "@/src/features/home/pages/Hero";
import Header from "@/src/features/home/pages/Header";
import BusinessService from "@/src/features/home/pages/BusinessService";
import Portfolio from "@/src/features/home/pages/Portfolio";
import News from "@/src/features/home/pages/News";
import About from "@/src/features/home/pages/About";
import CTA from "@/src/features/home/pages/CTA";
import Contact from "@/src/features/home/pages/Contact";
import Footer from "@/src/features/home/pages/Footer";

import { cookies } from "next/headers";

import Container from "@/src/components/Container";
import Navbar from "@/src/components/Navbar";


import findHeroByLanguage from "@/src/features/home/queries/hero/findHeroByLanguage";
import findNavbarByLanguage from "@/src/features/home/queries/header/findNavbarByLanguage";
import findBusinessServiceByLanguage from '@/src/features/home/queries/businessService/findBusinessServiceByLanguage';

export default async function Home() {
  const getCurrentLanguage = async () => {
    const lang = (await cookies()).get("language")?.value?.toString();
    return lang?.toUpperCase() || "ID";
  };
  const currentLang = await getCurrentLanguage();
  
  const heroData = await findHeroByLanguage(currentLang);
  const navbarData = await findNavbarByLanguage(currentLang);
  const businessServiceData = await findBusinessServiceByLanguage(currentLang);
  return (
    <div>
      <Navbar data={navbarData} />
      <Container>
        <Header variant="dark" />
        <Hero data={heroData} />
        <BusinessService data={businessServiceData} />
        <About />
        <Portfolio />
        <News />
        <Contact />
        <CTA />
        <Footer />
      </Container>
    </div>
  );
}
