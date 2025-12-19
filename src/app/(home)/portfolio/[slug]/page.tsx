import Container from "@/src/app/components/Container";
import PortfolioHero from "../sections/PortfolioHero";
import Header from "@/src/app/(home)/sections/Header";

export default function Portfolio()
{
    return (
        <Container>
            <Header variant="light" />
            <PortfolioHero />
        </Container>
    );
}