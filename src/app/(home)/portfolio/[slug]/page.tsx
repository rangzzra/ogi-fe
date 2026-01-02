import Container from "@/src/components/Container";
import Header from "@/src/features/home/pages/Header";
import CTA from "@/src/features/home/pages/CTA";
import Footer from "@/src/features/home/pages/Footer";

import PorfolioPage from "@/src/features/portfolio/pages/PortfolioPage";

import findPortfolioBySlug from "@/src/features/portfolio/queries/findPortfolioBySlug";

export default async function Portfolio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await findPortfolioBySlug(slug);

  return (
    <Container>
      <Header variant="light" />
      <PorfolioPage data={data} />
      <CTA />
      <Footer />
    </Container>
  );
}
