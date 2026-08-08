import AboutSection from "@/components/Anondobhubon/AboutSection";
import AmenitiesSection from "@/components/Anondobhubon/AmenitiesSection";
import BenefitsSection from "@/components/Anondobhubon/BenefitsSection";
import ContactSection from "@/components/Anondobhubon/ContactSection";
import EconomicZonesSection from "@/components/Anondobhubon/EconomicZonesSection";
import HeroSection from "@/components/Anondobhubon/HeroSection";
import InfrastructureSection from "@/components/Anondobhubon/InfrastructureSection";
import LifestyleSection from "@/components/Anondobhubon/LifestyleSection";
import LocationAdvantageSection from "@/components/Anondobhubon/LocationAdvantageSection";
import MasterplanSection from "@/components/Anondobhubon/MasterplanSection";
import ResidencesSection from "@/components/Anondobhubon/ResidencesSection";
import TimelineSection from "@/components/Anondobhubon/TimelineSection";
import Head from "next/head";

export default function Home() {
  const meta = {
    title: "Anondo Bhubon | Eco-Friendly Township Near Purbachal",
    description:
      "Explore Anondo Bhubon, an eco-conscious master-planned township near Purbachal with modern residences, green spaces, water networks, community facilities, and smart infrastructure.",
    url: "https://www.anondocityscapers.com/anondo-bhubon",
    image: "https://www.anondocityscapers.com/slider/slider2.jpg",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content="Anondo Cityscapers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <LocationAdvantageSection />
        <MasterplanSection />
        <ResidencesSection />
        <InfrastructureSection />
        <AmenitiesSection />
        <EconomicZonesSection />
        <BenefitsSection />
        <TimelineSection />
        <LifestyleSection />
        <ContactSection />
      </div>
    </>
  );
}
