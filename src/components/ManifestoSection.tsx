import { motion } from "framer-motion";

const ManifestoSection = () => (
  <section id="manifeste" className="section-padding">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="line-accent mb-8" />
        <h2 className="heading-section mb-8">
          L'architecture<br />comme <span className="text-brand-yellow">héritage.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <p className="text-editorial">
          Chaque structure que nous érigeons est pensée pour traverser le temps. Notre vision à long terme
          transforme chaque projet en un patrimoine durable, alliant excellence structurelle et esthétique
          architecturale de classe internationale.
        </p>
        <p className="text-editorial">
          Respect absolu des délais, transparence budgétaire totale, matériaux premium soigneusement sélectionnés —
          nous ne construisons pas simplement des bâtiments, nous créons des héritages.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
          {["Vision long terme", "Excellence structurelle", "Transparence budgétaire", "Matériaux premium"].map(
            (item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ManifestoSection;
