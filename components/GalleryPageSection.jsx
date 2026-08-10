"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { FiEye } from "react-icons/fi";

const anondoBhubonImages = [
  "anondo bhubon site office.jpg",
  "anondo bhubon site 1.jpg",
  "anondo bhubon site 2.jpg",
  "anondo bhubon site 3.jpg",
  "FULL TOP MAP V2 SIDE.jpg",
  "FULL MAP.jpg",
  "CBD DOWNTOWN (1)x.jpg",
  "CBD DOWNTOWN (2)x.jpg",
  "CBD DOWNTOWN (3)x.jpg",
  "CENTRAL AMENITIES PREMIUM 1 (1)x.1.jpg",
  "CENTRAL AMENITIES PREMIUM 1 (1)x.jpg",
  "CENTRAL AMENITIES PREMIUM 1 (3)x.jpg",
  "CENTRAL AMENITIES PREMIUM 1 (4)x.jpg",
  "CENTRAL AMENITIES PREMIUM 1 (5)x.jpg",
  "CENTRAL MOSQUE PREMIUM 1 (1)x.jpg",
  "COMMUNITY FARMING (1)x.1.jpg",
  "COMMUNITY FARMING (2)x.jpg",
  "COMMUNITY LAKE 1x.jpg",
  "COMMUNITY LAKE 3x.jpg",
  "COMMUNITY MOSQUE 4x.jpg",
  "COURTYARD PLOT (1)x.jpg",
  "COURTYARD PLOT (4)x-2.jpg",
  "COURTYARD PLOT (5)x.jpg",
  "FOREST WALK PREMIUM 1  (1)xx.jpg",
  "HIGH SCHOOL (1)x.jpg",
  "HIGH SCHOOL (2)x.jpg",
  "MEGA MALL 1x.jpg",
  "MEGA MALL 6x.jpg",
  "RIVER SIDE 1x.jpg",
  "RIVER VIEW PREMIUM PLUS (1)x.jpg",
  "RIVER VIEW PREMIUM PLUS (2)x.jpg",
  "STADIUM PREMIUM 1 (1)x.jpg",
  "STADIUM PREMIUM 1 (2)x.jpg",
  "STADIUM PREMIUM PLUSx.jpg",
  "UNIVERSITY 3x.jpg",
  "UNIVERSITY LIBRARYx.jpg",
];

const getImageTitle = (fileName) =>
  fileName
    .replace(/\.jpg$/i, "")
    .replace(/x+(?:\.1|-2)?$/i, "")
    .trim();

const anondoBhubonGallery = anondoBhubonImages.map((fileName) => ({
  img: `/anondo-bhubon/${fileName}`,
  title: getImageTitle(fileName),
  alt: `Anondo Bhubon - ${getImageTitle(fileName)}`,
}));

const previousGallery = [
  { img: "/gallery/gallery1.jpg", date: "12 January 2025" },
  { img: "/gallery/gallery2.jpg", date: "18 January 2025" },
  { img: "/gallery/gallery3.jpg", date: "02 February 2025" },
  { img: "/gallery/gallery4.jpg", date: "05 February 2025" },
  { img: "/gallery/gallery5.jpg", date: "10 February 2025" },
  { img: "/gallery/gallery6.jpg", date: "15 February 2025" },
  { img: "/gallery/gallery7.jpg", date: "18 February 2025" },
  { img: "/gallery/gallery8.jpg", date: "20 February 2025" },
].map((item, index) => ({
  ...item,
  title: `Date: ${item.date}`,
  alt: `Anondo Cityscapers gallery image ${index + 1}`,
}));

const gallery = [...anondoBhubonGallery, ...previousGallery];

function GalleryGrid({ items, startIndex }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {items.map((item, index) => {
        const galleryIndex = startIndex + index;

        return (
          <button
            type="button"
            key={item.img}
            onClick={() => item.onOpen(galleryIndex)}
            aria-label={`View ${item.alt}`}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-gray-100 text-left"
          >
            <Image
              src={item.img}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/35 via-transparent to-transparent p-4">
              <span className="flex translate-y-6 items-center gap-2 rounded-md bg-primary px-6 py-3 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <FiEye className="text-lg" />
                View Image
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function GalleryPageSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const withOpenHandler = (items) =>
    items.map((item) => ({ ...item, onOpen: handleOpen }));

  return (
    <div className="custom-container mx-auto space-y-16 py-16">
      <section aria-labelledby="anondo-bhubon-gallery">
        <div className="mb-8">
          <p className="font-medium uppercase tracking-[0.2em] text-primary">
            Latest Collection
          </p>
          <h2
            id="anondo-bhubon-gallery"
            className="mt-2 text-3xl font-bold text-soft_black"
          >
            Anondo Bhubon
          </h2>
        </div>

        <GalleryGrid items={withOpenHandler(anondoBhubonGallery)} startIndex={0} />
      </section>

      <section aria-labelledby="previous-gallery">
        <div className="mb-8">
          <p className="font-medium uppercase tracking-[0.2em] text-primary">
            More Moments
          </p>
          <h2
            id="previous-gallery"
            className="mt-2 text-3xl font-bold text-soft_black"
          >
            Previous Gallery
          </h2>
        </div>

        <GalleryGrid
          items={withOpenHandler(previousGallery)}
          startIndex={anondoBhubonGallery.length}
        />
      </section>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={gallery.map((item) => ({
            src: item.img,
            title: item.title,
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          captions={{ titleTextAlign: "center" }}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
        />
      )}
    </div>
  );
}
