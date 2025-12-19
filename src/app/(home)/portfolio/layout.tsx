export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="portfolio-section">
        <div>
            {children}
        </div>
    </section>
  );
}
