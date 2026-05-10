"use client";

import { useRouter } from "next/router";
import Head from "next/head";
import { RiLoader2Fill } from "react-icons/ri";
import HeroSection from "@/components/HeroSection";
import ProjectDetails from "@/components/ProjectDetails";
import { projectDetailsData } from "@/data/projectDetailsData";

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!currentSlug) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-secondary">
        <RiLoader2Fill className="h-6 w-6 animate-spin" />
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  const { projects } = projectDetailsData;
  const project = projects.find((item) => item.slug === currentSlug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium text-secondary">
          Project details not found.
        </p>
      </div>
    );
  }

  const projectData = project?.projectData || {};

  const siteName = "Anondo Cityscapers Ltd";
  const siteUrl = "https://anondocityscapers.com";

  const projectTitle = project.title || projectData.title || "Project Details";

  const projectDescription =
    typeof project.description === "string"
      ? project.description
      : projectData.description ||
        `${projectTitle} by Anondo Cityscapers. Explore project overview, master plan, amenities, gallery, location advantages, and investment opportunities.`;

  const heroImage =
    project.banner || projectData.image || "/projects/project-bg.jpg";

  const absoluteImage = heroImage.startsWith("http")
    ? heroImage
    : `${siteUrl}${heroImage.startsWith("/") ? heroImage : `/${heroImage}`}`;

  const pageUrl = `${siteUrl}/projects/${project.slug}`;

  const meta = {
    title: `${projectTitle} | Premium Real Estate Project by ${siteName}`,
    description: projectDescription,
    keywords: [
      projectTitle,
      siteName,
      "Anondo Cityscapers Ltd",
      "Anondo Real Estate",
      "real estate project Bangladesh",
      "housing project Bangladesh",
      "township project Bangladesh",
      "Purbachal real estate",
      "eco-friendly township",
      "smart city Bangladesh",
      "residential project Dhaka",
      "property investment Bangladesh",
      ...(projectData.postTags || []),
      ...(project.keywords || []),
    ].join(", "),
    author: siteName,
    url: pageUrl,
    image: absoluteImage,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteName,
    url: siteUrl,
    image: meta.image,
    description: meta.description,
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Residence",
        name: projectTitle,
        description: meta.description,
        image: meta.image,
        url: meta.url,
      },
    },
  };

  return (
    <div>
      <Head>
        {/* Primary SEO */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.url} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={projectTitle} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_BD" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={projectTitle} />

        {/* Extra Project Info */}
        {projectData.date && (
          <meta property="article:published_time" content={projectData.date} />
        )}

        {projectData.author && (
          <meta name="article:author" content={projectData.author} />
        )}

        {projectData.postTags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <HeroSection
        hero={{
          title: projectTitle,
          backgroundImage: heroImage,
        }}
      />

      <ProjectDetails project={project} />
    </div>
  );
}
