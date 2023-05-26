import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <Layout>
      <Seo title="Finanční poradce" description="Lorem ipsum dolor" />

      <Hero />

      <div className="bg-gradient-to-r from-secondary-400 to-primary-950">
        <Container py="xl" size="md">
          <span className="mx-auto block text-center text-3xl font-bold !leading-snug text-primary-50 md:text-5xl 2xl:text-6xl">
            Specializuji se na podnikatele, majitele firem, freelancery,
            manažery, lékaře a IT specialisty.
          </span>
        </Container>
      </div>

      <Services />

      <Container py="xl">Empty space</Container>
      <Container py="xl">Empty space</Container>
      <Container py="xl">Empty space</Container>

      <Contact />
    </Layout>
  );
}
