import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Collaboration from "@/components/sections/Collaboration";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import InteractiveTests from "@/components/sections/InteractiveTests";
import LargeButtons from "@/components/sections/LargeButtons";
import ParallaxPhoto from "@/components/sections/ParallaxPhoto";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Seo title="Finanční poradce" description="Lorem ipsum dolor" />

      <Hero />

      <div className="bg-gradient-to-r from-primary-900 to-primary-700 md:to-primary-500">
        <Container py="xl" size="md">
          <span className="mx-auto block text-center text-3xl font-bold !leading-snug text-primary-50 md:text-5xl 2xl:text-6xl">
            Specializuji se na podnikatele, majitele firem, freelancery,
            manažery, lékaře a IT specialisty.
          </span>
        </Container>
      </div>

      <Services />

      <ParallaxPhoto />
      <Collaboration />
      <InteractiveTests />
      <LargeButtons />
      <Testimonials />

      <Contact />
    </Layout>
  );
}
