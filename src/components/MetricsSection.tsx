import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 7, suffix: "+", label: "ans d'excellence" },
  { value: 15, suffix: "+", label: "projets livrés" },
  { value: 50, suffix: "", label: "employés" },
  { value: 98, suffix: "%", label: "satisfaction client" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl font-medium text-brand-blue">
      {count}{suffix}
    </span>
  );
};

const MetricsSection = () => (
  <section className="section-padding bg-surface-elevated">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center md:border-r last:border-r-0 border-border"
          >
            <AnimatedNumber target={m.value} suffix={m.suffix} />
            <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
