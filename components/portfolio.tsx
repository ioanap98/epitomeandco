"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Project = {
  title: string;
  subtitle: string;
  images: string[];
  url?: string;
  tags?: string[];
};

export default function PortfolioSection() {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "Photography Portfolio Website",
        subtitle: "Portfolio site for a professional photographer",
        images: [
          "/photography-website.jpeg",
          "/photography-website-1.png",
          "/photography-website-2.png",
          "/photography-website-3.png",
          "/photography-website-4.png",
          "/photography-website-5.png",
          "/photography-website-6.png",
          "/photography-website-7.png",
          "/photography-website-8.png",
          "/photography-website-9.png",
        ],
        tags: ["Service hero", "Lead CTA", "Gallery"],
      },
      {
        title: "Pilates Instructor Website",
        subtitle: "Website for a local pilates instructor",
        images: [
          "/pilates-website.jpeg",
          "/pilates_image_1.png",
          "/pilates_image_2.png",
          "/pilates_image_3.png",
          "/pilates_image_4.png",
          "/pilates_image_5.png",
          "/pilates_image_6.png",
          "/pilates_image_7.png",
        ],
        tags: ["Local services", "Booking flow", "Testimonials"],
      },
      {
        title: "About Page Design",
        subtitle: "Bio & values section mockup",
        images: [
          "/islamic-website.jpeg",
          "/islamic-website-1.png",
          "/islamic-website-2.png",
          "/islamic-website-3.png",
          "/islamic-website-4.png",
        ],
        tags: ["Founder story", "Values", "Soft motion"],
      },
    ],
    []
  );

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
      },
    }),
    []
  );

  const portfolioVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      visible: { opacity: 1, y: 0 },
      hover: { y: -4 },
    }),
    []
  );

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [initialSlide, setInitialSlide] = useState<number>(0);
  const [swiperKey, setSwiperKey] = useState<number>(0);

  const openProject = (project: Project, startIndex = 0) => {
    setInitialSlide(startIndex);
    setActiveProject(project);
    setSwiperKey((k) => k + 1); // remount Swiper so initialSlide takes effect
  };

  const closeProject = () => setActiveProject(null);

  // ESC closes modal
  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!activeProject) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeProject]);

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recent client-ready layouts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A few examples of benefit-focused pages: clear heroes, concise service blocks, and easy ways to get in touch.
          </p>
        </motion.div>

        {/* Grid of 3 Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {projects.slice(0, 3).map((project, idx) => {
            const cover = project.images?.[0];
            const extraCount = Math.max(0, project.images.length - 1);

            return (
              <motion.button
                key={`${project.title}-${idx}`}
                type="button"
                variants={portfolioVariants}
                whileHover="hover"
                onClick={() => openProject(project, 0)}
                className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white text-left focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                aria-label={`Open ${project.title} gallery`}
              >
                {/* Cover image */}
                <div className="relative aspect-[16/10] w-full bg-gray-50">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={`${project.title} cover`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      No cover image
                    </div>
                  )}

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

                  {/* +N badge */}
                  {extraCount > 0 && (
                    <div className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur">
                      +{extraCount}
                    </div>
                  )}

                  {/* Title block */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-serif text-lg font-bold leading-snug">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.subtitle}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 space-y-3">
                  <div className="inline-flex items-center text-sm font-medium text-gray-900">
                    View gallery
                    <span className="ml-2 text-gray-500">({project.images.length} images)</span>
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-14 text-center"
        >
          <p className="text-base text-gray-600 mb-4">
            Want a site like these, tailored to your offer? I can design and build it end-to-end.
          </p>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#contact">Request a Website</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal Gallery */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            aria-label={`${activeProject.title} gallery`}
          >
            {/* Backdrop (click to close) */}
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              onClick={closeProject}
              aria-label="Close gallery backdrop"
            />

            {/* Modal panel (height constrained) */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                relative w-full max-w-5xl
                max-h-[100vh]
                overflow-hidden rounded-2xl bg-white shadow-2xl
                flex flex-col
              "
            >
              {/* Header (fixed height area) */}
              <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-4 sm:p-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900">{activeProject.title}</h3>
                  <p className="text-sm text-gray-600">{activeProject.subtitle}</p>
                </div>

                <div className="flex items-center gap-2">
                  {activeProject.url && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      View Live
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={closeProject}
                    className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Body (scroll-safe if needed) */}
              <div className="p-3 sm:p-4 overflow-auto">
                {/* Swiper stage: smaller + fixed height */}
                <div className="relative overflow-hidden rounded-xl bg-gray-50 h-[46vh] sm:h-[52vh] lg:h-[56vh]">
                  <Swiper
                    key={swiperKey}
                    modules={[Navigation, Pagination, Keyboard]}
                    navigation
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    loop={activeProject.images.length > 1}
                    initialSlide={initialSlide}
                    spaceBetween={12}
                    slidesPerView={1}
                    className="w-full h-full"
                  >
                    {activeProject.images.map((img, i) => (
                      <SwiperSlide key={`${img}-${i}`} className="h-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={img}
                            alt={`${activeProject.title} image ${i + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 80vw"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Thumbnails row */}
                <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {activeProject.images.slice(0, 6).map((img, i) => (
                    <button
                      key={`thumb-${img}-${i}`}
                      type="button"
                      onClick={() => openProject(activeProject, i)}
                      className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 hover:border-gray-300"
                      aria-label={`Open image ${i + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`${activeProject.title} thumbnail ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="140px"
                      />
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Tip: Use keyboard arrows to navigate, ESC to close.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
