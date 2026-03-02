import { motion } from "framer-motion";

const UrgencySection = () => (
  <section className="bg-surface-dark section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-px bg-brand-yellow mx-auto mb-8" />
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
          Nous sélectionnons un nombre limité de projets par trimestre afin de{" "}
          <span className="text-brand-yellow">garantir l'excellence.</span>
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-brand-yellow text-foreground text-sm font-semibold tracking-widest uppercase hover:bg-brand-yellow-light transition-colors"
        >
          Planifier une consultation privée
        </a>
      </motion.div>
    </div>
  </section>
);

export default UrgencySection;
