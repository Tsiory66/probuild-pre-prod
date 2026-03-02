import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images d'équipement (toutes les images dans src/real/equip)
import equip1 from "@/real/equip/WhatsApp Image 2026-03-02 at 11.24.36c.jpeg";
import equip2 from "@/real/equip/WhatsApp Image 2026-03-02 at 11.24.38dd.jpeg";
import equip3 from "@/real/equip/WhatsApp Image 2026-03-02 at 11.24.37d.jpeg";
import equip4 from "@/real/equip/WhatsApp Image 2026-03-02 at 11.24.37.jpeg";
import equip5 from "@/real/equip/WhatsApp Image 2026-03-02 at 11.24.18.jpeg";
import equip6 from "@/real/equip/WhatsApp Image 2026-03-02 at 11.24.11.jpeg";

const images = [equip1, equip2, equip3, equip4, equip5, equip6];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = ((page % images.length) + images.length) % images.length;
  const timeoutRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (isPaused) return;
    // autoplay every 3s
    timeoutRef.current = window.setTimeout(() => paginate(1), 3000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isPaused]);

  return (
    <section className="section-padding bg-surface-elevated">
      <div className="max-w-4xl mx-auto text-center">
        <div className="line-accent mx-auto mb-8" />
        <h2 className="heading-section mb-8">Équipements & Mode de travail</h2>

        <div
          className="relative mx-auto w-full max-w-3xl rounded-md overflow-hidden shadow-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <div className="relative h-64 md:h-96 bg-black/5 flex items-center justify-center">
            <motion.img
              key={page}
              src={images[index]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Controls */}
          <button
            aria-label="Précédent"
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Suivant"
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > index ? 1 : -1])}
                className={`w-12 h-8 overflow-hidden rounded border transition-opacity ${
                  i === index ? "opacity-100 border-brand-yellow" : "opacity-50"
                }`}
              >
                <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
