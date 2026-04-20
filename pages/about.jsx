import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import Head from "next/head";
import FAQ from "@/components/FAQ";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowToBecomeOwner from "@/components/HowToBecomeOwner";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
export default function AboutPage() {
  const meta = {
    title:
      "About Us | Anondo Housing Society – Trusted Residential & Community Development in Bangladesh",
    description:
      "Learn about Anondo Housing Society, a trusted residential housing and community development organization in Bangladesh. Discover our vision, mission, values, leadership, and commitment to secure, modern, and well-planned living environments.",
    keywords:
      "About Anondo Housing Society, housing society Bangladesh, residential community Bangladesh, real estate development Bangladesh, housing project company Bangladesh, trusted housing developer, gated community Bangladesh, modern housing society",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/about",
    image: "https://anondohousing.com/about/about-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: "About",
          backgroundImage: "/hero-bg.jpg",
        }}
      />
      <AboutUsSection />
      <StatsSection />
      <ProjectsSection />
      <HowToBecomeOwner />
      <WhyChooseUs />
      {/* <TeamSection /> */}
      <FAQSection />
    </div>
  );
}
