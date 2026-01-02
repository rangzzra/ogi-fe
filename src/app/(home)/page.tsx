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

import Container from "@/src/components/Container";

export default function Home() {
  return (
    <div>
      <Container>
        <Header variant="dark" />
        <Hero />
        <BusinessService />
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
