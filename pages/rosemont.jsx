// "use client";

import { ContactBlock } from "@/components/AnondoRosemont/ContactBlock";
import { ContentSections } from "@/components/AnondoRosemont/ContentSections";
import FeaturedVillas from "@/components/AnondoRosemont/FeaturedVillas";
import { FeatureGrid } from "@/components/AnondoRosemont/FeatureGrid";
import { Header } from "@/components/AnondoRosemont/Header";
// import { FeaturedVillas } from "@/components/AnondoRosemont/FeaturedVillas";
import HeroLuxury from "@/components/AnondoRosemont/HeroLuxury";
import { HomeHero } from "@/components/AnondoRosemont/HomeHero";
import { LifestyleAmenities } from "@/components/AnondoRosemont/lifestyleAmenities";
import LifestyleExperience from "@/components/AnondoRosemont/LifestyleExperience";
import MasterplanHighlight from "@/components/AnondoRosemont/MasterplanHighlight";
import MasterPlanPage from "@/components/AnondoRosemont/MasterPlanPage";
import { MetricGrid } from "@/components/AnondoRosemont/MetricGrid";
import ResidentialComponentsPage from "@/components/AnondoRosemont/ResidentialComponentsPage";
import SustainableLiving from "@/components/AnondoRosemont/SustainableLiving";

export default function RosemontEstate() {
  return (
    <div className="bg-white text-gray-900">
      {/* <Header /> */}
      <HeroLuxury />
      <MasterplanHighlight />
      <LifestyleExperience />
      <FeaturedVillas />
      {/* <HomeHero /> */}
      {/* <FeatureGrid items={homeHighlights} dark /> */}
      {/* <MetricGrid metrics={masterPlanMetrics} /> */}
      <LifestyleAmenities />
      <SustainableLiving />
      <ResidentialComponentsPage />
      {/* <MasterPlanPage /> */}
      <ContactBlock />
      <ContentSections />
    </div>
  );
}
