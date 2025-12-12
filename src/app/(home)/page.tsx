import Image from "next/image";
import Hero from "@/src/app/(home)/sections/Hero";
import Header from "@/src/app/(home)/sections/Header";
import BusinessService from "@/src/app/(home)/sections/BusinessService";
import Portfolio from "@/src/app/(home)/sections/Portfolio";

import Container from "@/src/app/components/Container";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Hero />
        <BusinessService />
        <Portfolio />
      </Container>
    </div>
  );
}
