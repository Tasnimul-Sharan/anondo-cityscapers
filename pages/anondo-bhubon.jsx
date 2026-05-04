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

export default function Home() {
  return (
    <main className="overflow-hidden">
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
    </main>
  );
}
