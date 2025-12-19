import Image from "next/image";
import Hero from "@/src/app/(home)/sections/Hero";
import Header from "@/src/app/(home)/sections/Header";
import BusinessService from "@/src/app/(home)/sections/BusinessService";
import Portfolio from "@/src/app/(home)/sections/Portfolio";
import News from "@/src/app/(home)/sections/News";
import About from "@/src/app/(home)/sections/About";
import CTA from "@/src/app/(home)/sections/CTA";
import Contact from "@/src/app/(home)/sections/Contact";
import Footer from "@/src/app/(home)/sections/Footer";

import Container from "@/src/app/components/Container";

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
