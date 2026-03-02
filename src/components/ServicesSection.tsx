import { motion } from "framer-motion";
import { Building2, Building, Store, Hammer, KeyRound, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Villas & résidences haut standing",
    benefit: "Espaces de vie exceptionnels conçus sur mesure",
    approach: "Architecture bioclimatique adaptée au tropique",
  },
  {
    icon: Building,
    title: "Immeubles résidentiels",
    benefit: "Rendement locatif optimisé avec finitions premium",
    approach: "Études de marché et conception fonctionnelle",
  },
  {
    icon: Store,
    title: "Espaces commerciaux premium",
    benefit: "Environnements qui valorisent votre activité",
    approach: "Flux client et identité de marque intégrés",
  },
  {
    icon: Hammer,
    title: "Rénovation de prestige",
    benefit: "Redonner vie aux structures avec élégance",
    approach: "Diagnostic complet et réhabilitation respectueuse",
  },
  {
    icon: KeyRound,
    title: "Production de parpaings & équipements de production complets",
    benefit: "Fourniture de parpaings sur site et d'une ligne de production clé en main",
    approach: "Installation, formation et maintenance pour une production autonome",
  },
  {
    icon: ClipboardList,
    title: "Études techniques & planification",
    benefit: "Fondations solides pour des projets réussis",
    approach: "Ingénierie de précision et études de sol avancées",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-surface-elevated">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="line-accent mb-8" />
        <h2 className="heading-section">Nos expertises</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-background p-8 border border-border hover-lift cursor-default"
          >
            <s.icon className="w-8 h-8 text-brand-yellow mb-6 transition-transform duration-500 group-hover:scale-110" />
            <h3 className="font-serif text-xl font-medium mb-3 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{s.benefit}</p>
            <div className="pt-4 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-brand-blue">{s.approach}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
