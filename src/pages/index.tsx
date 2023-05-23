import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";

import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title={t.index.seo.title} description={t.index.seo.description} />

      <Hero />

      <div className="bg-primary">
        <Container py="xl">Empty space</Container>
      </div>
      <Container py="xl">Empty space</Container>
      <Container py="xl">Empty space</Container>
      <Container py="xl">Empty space</Container>

      <Contact />
    </Layout>
  );
}
