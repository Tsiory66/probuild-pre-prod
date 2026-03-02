import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Film } from "lucide-react";
import villaHorizon from "@/assets/project-villa-horizon.jpg";
import businessTower from "@/assets/project-business-tower.jpg";
import residencePalmier from "@/assets/project-residence-palmier.jpg";
import novaCommercial from "@/assets/project-nova-commercial.jpg";
import videoVilla from "@/assets/video-villa-horizon.mp4";
import videoBusiness from "@/assets/video-business-tower.mp4";



import Ramary_villa from "@/real/Villa RAMARY Betsingilo/1 (1).jpeg";
import Ramary_villa1 from "@/real/Villa RAMARY Betsingilo/1 (2).jpeg";
import Ramary_villa2 from "@/real/Villa RAMARY Betsingilo/1 (3).jpeg";
import Ramary_villa3 from "@/real/Villa RAMARY Betsingilo/1 (5).jpeg";
import Ramary_villa5 from "@/real/Villa RAMARY Betsingilo/1 (7).jpeg";

import Ramary_villa6 from "@/real/Villa RAMARY Betsingilo/WhatsApp Video 2026-03-02 at 10.26.43.mp4";
import Ramary_villa7 from "@/real/Villa RAMARY Betsingilo/WhatsApp Video 2026-03-02 at 10.26.44.mp4";
import Ramary_villa8 from "@/real/Villa RAMARY Betsingilo/WhatsApp Video 2026-03-02 at 10.26.44h.mp4";

import piscine1 from "@/real/piscine betania/WhatsApp Image 2026-03-02 at 10.28.55.jpeg";
import piscine2 from "@/real/piscine betania/WhatsApp Image 2026-03-02 at 10.29.30.jpeg";
import piscine3 from "@/real/piscine betania/WhatsApp Image 2026-03-02 at 10.30.01.jpeg";
import piscine4 from "@/real/piscine betania/WhatsApp Image 2026-03-02 at 10.36.26.jpeg";

import Ramary_villa4 from "@/real/Villa RAMARY Betsingilo/1 (6).jpeg";

import kaboss1 from "@/real/Kaboss/WhatsApp Image 2026-03-02 at 10.55.29.jpeg";
import kaboss2 from "@/real/Kaboss/1 (4).jpeg";


import regina1 from "@/real/regina/WhatsApp Image 2026-03-02 at 13.27.03.jpeg";
import regina2 from "@/real/regina/WhatsApp Image 2026-03-02 at 13.27.04.jpeg";
import regina3 from "@/real/regina/WhatsApp Image 2026-03-02 at 13.27.05.jpeg";
import regina4 from "@/real/regina/WhatsApp Image 2026-03-02 at 13.27.06.jpeg";
import regina5 from "@/real/regina/WhatsApp Image 2026-03-02 at 13.27.21.jpeg";


import vigie1 from "@/real/Vigie toliara/WhatsApp Video 2026-03-02 at 10.54.17.mp4";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type Project = {
  media: MediaItem[];
  title: string;
  location: string;
  surface: string;
  duration: string;
  concept: string;
};

const projects: Project[] = [
  {
    media: [
      { type: "video", src: Ramary_villa7 },
        { type: "image", src: Ramary_villa },
        { type: "image", src: Ramary_villa1 },
        { type: "image", src: Ramary_villa2 },
        { type: "image", src: Ramary_villa3 },
       
    
        { type: "video", src: Ramary_villa6 },
        
        { type: "video", src: Ramary_villa8 },
       
    ],
    title: "Villa RAMARY",
    location: "Betsingilo",
    surface: "450 m²",
    duration: "",
    concept: " ",
  },
  {
    media: [
      { type: "image", src: piscine1 },
      { type: "image", src: piscine2 },
      { type: "image", src: piscine3 },
      { type: "image", src: piscine4 },
    ],
    title: "Piscine Betania",
    location: "Betanoa",
    surface: "20 m²",
    duration: "1 mois",
    concept: "Piscine haut de gamme avec espaces verts",
  },
  {
    media: [
      { type: "image", src: kaboss1 },
      { type: "image", src: kaboss2  },
    ],
    title: "Le Kaboss",
    location: "Ifaty",
    surface: " 800 m²",
    duration: "18 mois",
    concept: "Résidence haut standing avec espaces verts intégrés",
  },
  {
    media: [
      { type: "video", src: vigie1 },
    ],
    title: "Bureau Vigie Toliara",
    location: "Toliara",
    surface: "300 m²",
    duration: "20 mois",
    concept: "Centre de télésurveillance moderne",
  },
  {
  media: [
      { type: "image", src: regina1 },
      { type: "image", src: regina2 },
      { type: "image", src: regina3 },
      { type: "image", src: regina4 },
      { type: "image", src: regina5 },
    ],
    title: "Regina Lodge",
    location: "Mamirano",
    surface: "300 m²",
    duration: "20 mois",
    concept: "",
  }
  
];

const MediaGallery = ({ media }: { media: MediaItem[] }) => {
  const [current, setCurrent] = useState(0);
  const item = media[current];
  const hasMultiple = media.length > 1;

  useEffect(() => {
    // Preload the next image (prefetch) to make navigation snappier
    if (media.length < 2) return;
    const next = (current + 1) % media.length;
    const m = media[next];
    if (m.type === "image") {
      const img = new Image();
      img.src = m.src;
    }
  }, [current, media]);

  return (
    <div
      className="relative overflow-hidden aspect-[4/3]"
      onMouseEnter={() => {
        // On hover, prefetch all image thumbnails for faster lightbox open
        media.forEach((m) => {
          if (m.type === "image") {
            const img = new Image();
            img.src = m.src;
          }
        });
      }}
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <video
          src={item.src}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
        />
      )}

      {/* Media type indicator */}
      <div className="absolute top-3 left-3 flex gap-2">
        {media.map((m, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-8 h-8 flex items-center justify-center rounded transition-all ${
              i === current
                ? "bg-brand-yellow text-foreground"
                : "bg-black/50 text-white/70 hover:bg-black/70"
            }`}
          >
            {m.type === "image" ? <ImageIcon className="w-4 h-4" /> : <Film className="w-4 h-4" />}
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      {hasMultiple && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c === 0 ? media.length - 1 : c - 1)); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c === media.length - 1 ? 0 : c + 1)); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Counter */}
      {hasMultiple && (
        <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
          {current + 1} / {media.length}
        </div>
      )}
    </div>
  );
};

const PortfolioSection = () => {
  const [lightbox, setLightbox] = useState<{ media: MediaItem[]; index: number } | null>(null);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="line-accent mb-8" />
          <h2 className="heading-section">Réalisations</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setLightbox({ media: p.media, index: 0 })}
            >
              <div className="mb-6">
                <MediaGallery media={p.media} />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
                  <p className="text-xs text-brand-blue mt-2">{p.concept}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground space-y-1">
                  <p>{p.surface}</p>
                  <p>{p.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {lightbox.media.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index === 0 ? lightbox.media.length - 1 : lightbox.index - 1 }); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index === lightbox.media.length - 1 ? 0 : lightbox.index + 1 }); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full">
            {lightbox.media[lightbox.index].type === "image" ? (
              <img
                src={lightbox.media[lightbox.index].src}
                alt=""
                className="w-full max-h-[80vh] object-contain"
              />
            ) : (
              <video
                src={lightbox.media[lightbox.index].src}
                autoPlay
                controls
                className="w-full max-h-[80vh]"
              />
            )}
          </div>

          {/* Thumbnails */}
          {lightbox.media.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {lightbox.media.map((m, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: i }); }}
                  className={`w-10 h-10 flex items-center justify-center border transition-colors ${
                    i === lightbox.index
                      ? "border-brand-yellow bg-brand-yellow/20 text-brand-yellow"
                      : "border-white/20 text-white/50 hover:border-white/50"
                  }`}
                >
                  {m.type === "image" ? <ImageIcon className="w-4 h-4" /> : <Film className="w-4 h-4" />}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;
