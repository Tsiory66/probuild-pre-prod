import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  "Retards systématiques sur chantier",
  "Dépassements de budget imprévus",
  "Mauvaise gestion des sous-traitants",
  "Absence de suivi et reporting",
];

const solutions = [
  "Planning contractuel précis et engagé",
  "Reporting hebdomadaire transparent",
  "Suivi dédié par chef de projet senior",
  "Contrôle qualité permanent sur site",
];

const ProblemSolutionSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="heading-section max-w-3xl mx-auto">
          Un projet mal encadré coûte plus <span className="text-brand-yellow">qu'il ne vaut.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-foreground/[0.03] border border-border p-8 md:p-10"
        >
          <h3 className="font-serif text-xl font-medium text-foreground mb-6">Les risques fréquents</h3>
          <div className="space-y-5">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{p}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-dark p-8 md:p-10"
        >
          <h3 className="font-serif text-xl font-medium mb-6">Notre garantie</h3>
          <div className="space-y-5">
            {solutions.map((s) => (
              <div key={s} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80">{s}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
