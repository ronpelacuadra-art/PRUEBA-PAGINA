import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Brands from "@/components/Brands";
import WhyFotolab from "@/components/WhyFotolab";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import StudioPreview from "@/components/StudioPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <StudioPreview />
      <Brands />
      <WhyFotolab />
      <Portfolio />
      <Contact />
    </>
  );
}
