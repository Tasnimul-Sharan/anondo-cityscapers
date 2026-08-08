import Head from "next/head";
import DocumentsSection from "@/components/DocumentsSection";
import HeroSection from "@/components/HeroSection";

export default function DocumentsPage() {
  const meta = {
    title: "Documents | Anondo Cityscapers",
    description:
      "View and download official Anondo Cityscapers documents and booking forms.",
    keywords:
      "Anondo Cityscapers documents, booking form, property booking form Bangladesh, housing documents",
    author: "Anondo Cityscapers",
    url: "https://www.anondocityscapers.com/documents",
    image: "https://www.anondocityscapers.com/slider/slider2.jpg",
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
          title: "Documents",
          backgroundImage: "/slider/slider2.jpg",
        }}
      />
      <DocumentsSection />
    </div>
  );
}
