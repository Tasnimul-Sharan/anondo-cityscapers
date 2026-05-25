"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaImages,
  FaMapMarkerAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import ProjectLocation from "./ProjectLocation";

function normalizeImage(item, index) {
  if (!item) return null;

  if (typeof item === "string") {
    return {
      src: item,
      title: `Project Visual ${index + 1}`,
      label: "Gallery",
    };
  }

  return {
    src: item.src || item.image || item.url,
    title: item.title || `Project Visual ${index + 1}`,
    label: item.label || "Gallery",
  };
}

function getGalleryImages(project, projectData) {
  const rawImages = [
    project?.banner || projectData?.image,
    ...(project?.images || []),
    ...(projectData?.images || []),
    ...(projectData?.gallery || []),
  ];

  const seen = new Set();

  return rawImages
    .map((item, index) => normalizeImage(item, index))
    .filter((item) => {
      if (!item?.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
}

export default function ProjectDetails({ project }) {
  const { title, description, notes } = project;

  const projectData = project?.projectData;
  const sections = project?.sections || [];
  const isComingSoon = Boolean(project?.comingSoon);

  const projectTitle = title || projectData?.title || "Project Details";
  const projectDescription =
    projectData?.description ||
    "A thoughtfully planned real estate project designed for modern lifestyle, long-term value, and sustainable community living.";

  const galleryImages = getGalleryImages(
    isComingSoon ? { ...project, images: [] } : project,
    projectData,
  );
  const heroImage = galleryImages[0]?.src || "/slider/slider2.jpg";
  const showcaseImages = galleryImages.slice(1, 5);
  const allGalleryImages = galleryImages;
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const activeImage =
    activeImageIndex === null ? null : allGalleryImages[activeImageIndex];

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeViewer = () => setActiveImageIndex(null);
    const showPrevious = () =>
      setActiveImageIndex((current) =>
        current === null
          ? current
          : (current - 1 + allGalleryImages.length) % allGalleryImages.length,
      );
    const showNext = () =>
      setActiveImageIndex((current) =>
        current === null ? current : (current + 1) % allGalleryImages.length,
      );

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, allGalleryImages.length]);

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === null
        ? current
        : (current - 1 + allGalleryImages.length) % allGalleryImages.length,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === null ? current : (current + 1) % allGalleryImages.length,
    );
  };

  const overviewStats = [
    {
      label: "Detail Sections",
      value: String(sections.length).padStart(2, "0"),
    },
    {
      label: "Gallery Visuals",
      value: String(allGalleryImages.length).padStart(2, "0"),
    },
    {
      label: "Project Type",
      value: projectData?.postTags?.[0] || "Township",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#F5F7FB]">
      <section className="relative px-4 pb-12 pt-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] bg-[#07111F] shadow-[0_34px_90px_rgba(8,17,31,0.24)]">
            <div className="relative min-h-[620px] w-full md:min-h-[680px]">
              <Image
                src={heroImage}
                alt={projectTitle}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/70 to-[#07111F]/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/95 via-[#07111F]/35 to-transparent" />

              <div className="absolute inset-0 flex items-end">
                <div className="grid w-full gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_380px] lg:items-end lg:p-14">
                  <div className="max-w-3xl text-white">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                      <span className="h-2 w-2 rounded-full bg-[#F48220]" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">
                        {isComingSoon ? "Coming Soon" : "Premium Project"}
                      </p>
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                      {projectTitle}
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                      {projectDescription}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {projectData?.date && (
                        <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                          <FaCalendarAlt className="text-[#F48220]" />
                          {projectData.date}
                        </div>
                      )}

                      {projectData?.author && (
                        <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                          <FaUser className="text-[#F48220]" />
                          {projectData.author}
                        </div>
                      )}

                      {!isComingSoon && (
                        <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                          <FaImages className="text-[#F48220]" />
                          {galleryImages.length} Visuals
                        </div>
                      )}
                    </div>

                    {!isComingSoon && (
                      <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-3 rounded-md bg-[#F48220] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(244,130,32,0.28)] transition hover:bg-primary"
                        >
                          Talk to Advisor
                          <FaArrowRight className="text-xs" />
                        </Link>

                        {allGalleryImages.length > 1 && (
                          <a
                            href="#project-gallery"
                            className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:border-white/50 hover:bg-white/18"
                          >
                            View Gallery
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!isComingSoon && (
        <>
          <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {overviewStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.07)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F48220]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-bold text-[#07111F]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {allGalleryImages.length > 1 && (
            <section
              id="project-gallery"
              className="mx-auto max-w-7xl px-4 py-12 sm:px-6"
            >
              <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#F48220]">
                    Visual Gallery
                  </p>

                  <h2 className="mt-3 max-w-2xl text-3xl font-bold text-[#111827] sm:text-4xl">
                    A closer look at the project experience.
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#1F2937]/65">
                  Curated visuals covering landscape, community life, commercial
                  zones, civic facilities, and lifestyle amenities.
                </p>
              </div>

              <div className="grid auto-rows-[220px] gap-5 md:grid-cols-4">
                {allGalleryImages.slice(0, 8).map((img, index) => {
                  const featureClass =
                    index === 0
                      ? "md:col-span-2 md:row-span-2"
                      : index === 3
                        ? "md:col-span-2"
                        : "";

                  return (
                    <figure
                      key={img.src}
                      className={`group relative overflow-hidden rounded-lg bg-white shadow-[0_18px_55px_rgba(15,23,42,0.1)] ${featureClass}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 768px) 100vw, 640px"
                            : "(max-width: 768px) 100vw, 320px"
                        }
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/78 via-[#07111F]/12 to-transparent" />

                      <button
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`View ${img.title}`}
                        className="absolute inset-0 z-10 flex items-center justify-center bg-[#07111F]/0 opacity-0 transition duration-300 group-hover:bg-[#07111F]/30 group-hover:opacity-100 focus:bg-[#07111F]/30 focus:opacity-100"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg text-[#07111F] shadow-[0_16px_35px_rgba(0,0,0,0.28)]">
                          <FaEye />
                        </span>
                      </button>

                      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                          {img.label}
                        </p>
                        <h3 className="mt-1 text-base font-bold text-white">
                          {img.title}
                        </h3>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>

              {allGalleryImages.length > 8 && (
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {allGalleryImages.slice(8).map((img, index) => (
                    <figure
                      key={img.src}
                      className="group relative h-56 overflow-hidden rounded-lg bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 280px"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/62 to-transparent" />

                      <button
                        type="button"
                        onClick={() => setActiveImageIndex(index + 8)}
                        aria-label={`View ${img.title}`}
                        className="absolute inset-0 z-10 flex items-center justify-center bg-[#07111F]/0 opacity-0 transition duration-300 group-hover:bg-[#07111F]/30 group-hover:opacity-100 focus:bg-[#07111F]/30 focus:opacity-100"
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#07111F] shadow-[0_16px_35px_rgba(0,0,0,0.28)]">
                          <FaEye />
                        </span>
                      </button>

                      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F48220]">
                          {img.label}
                        </p>
                        <h3 className="mt-1 text-sm font-bold text-white">
                          {img.title}
                        </h3>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          )}

          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
              <aside className="lg:sticky lg:top-24 lg:h-fit">
                <div className="overflow-hidden rounded-lg bg-[#07111F] p-8 text-white shadow-[0_24px_70px_rgba(8,17,31,0.2)]">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#F48220]">
                    Project Overview
                  </p>

                  <h3 className="mt-4 text-3xl font-bold">
                    Designed for future-focused living.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/65">
                    Explore planning, lifestyle, infrastructure, investment, and
                    location advantages in a more focused view.
                  </p>

                  {projectData?.postTags?.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {projectData.postTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#F48220] text-white">
                        <FaMapMarkerAlt />
                      </span>

                      <div>
                        <h4 className="font-bold">Location Advantage</h4>
                        <p className="mt-1 text-sm leading-6 text-white/60">
                          Strategic location with strong connectivity and
                          long-term growth potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                {description && description.length > 0 && (
                  <div className="rounded-lg border border-white bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
                    <h2 className="text-2xl font-bold text-[#111827]">
                      Key Highlights
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {description.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 rounded-md bg-[#F8F9FC] p-4"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                          <span className="text-sm leading-7 text-[#1F2937]/75">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {sections.map((section, index) => (
                  <article
                    key={section.title}
                    className="group relative overflow-hidden rounded-lg border border-white bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] sm:p-8"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#F48220] opacity-80" />

                    <div className="relative">
                      <div className="mb-5 flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-sm font-bold text-white shadow-[0_14px_35px_rgba(1,63,113,0.24)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F48220]">
                          Project Detail
                        </p>
                      </div>

                      <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                        {section.title}
                      </h2>

                      {section.content && (
                        <p className="mt-4 text-base leading-8 text-[#1F2937]/68">
                          {section.content}
                        </p>
                      )}

                      {section.list && (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {section.list.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 rounded-md bg-[#F8F9FC] p-4 transition duration-300 group-hover:bg-[#F4F6FB]"
                            >
                              <FaCheckCircle className="mt-1 shrink-0 text-primary" />

                              <span className="text-sm leading-7 text-[#1F2937]/75">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}

                {notes && notes.length > 0 && (
                  <div className="rounded-lg border border-[#F48220]/20 bg-[#FFF7ED] p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
                    <h3 className="text-xl font-bold text-[#111827]">
                      Important Notes
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {notes.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-7 text-[#1F2937]/75"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-[#F48220]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#F48220]">
                Location
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">
                Project location and connectivity.
              </h2>
            </div>

            <ProjectLocation />
          </section>
        </>
      )}

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07111F]/92 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#07111F] shadow-lg transition hover:bg-[#F48220] hover:text-white sm:right-6 sm:top-6"
          >
            <FaTimes />
          </button>

          {allGalleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#07111F] shadow-lg transition hover:bg-[#F48220] hover:text-white sm:left-6"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#07111F] shadow-lg transition hover:bg-[#F48220] hover:text-white sm:right-6"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div className="relative h-[78vh] w-full max-w-6xl">
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-5 left-4 right-4 text-center text-white sm:bottom-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
              {activeImage.label}
            </p>
            <h3 className="mt-1 text-base font-bold sm:text-lg">
              {activeImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
