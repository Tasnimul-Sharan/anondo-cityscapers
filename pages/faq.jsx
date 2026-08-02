import Head from "next/head";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";

export default function FAQPage() {
  const meta = {
    title: "FAQ | Anondo Cityscapers",
    description:
      "Find answers to frequently asked questions about Anondo Cityscapers projects, villa ownership, facilities, security, registration, possession, and investment.",
    keywords:
      "Anondo Cityscapers FAQ, villa ownership Bangladesh, housing project questions, real estate investment Bangladesh, property registration FAQ",
    author: "Anondo Cityscapers",
    url: "https://anondocityscapers.com/faq",
    image: "https://anondocityscapers.com/slider/slider2.jpg",
  };

  return (
    <div className="relative w-full">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
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

      <HeroSection
        hero={{
          title: "Frequently Asked Questions",
          backgroundImage: "/slider/slider2.jpg",
        }}
      />
      <FAQSection />
    </div>
  );
}
