import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import InteractiveServicesSection from "./components/InteractiveServicesSection";
import SectorsSection from "./components/SectorsSection";
import AboutCTA from "./components/AboutCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SectorsSection />
      <InteractiveServicesSection />
      <AboutCTA />
    </>
  );
}