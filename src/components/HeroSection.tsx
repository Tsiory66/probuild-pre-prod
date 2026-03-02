import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "@/assets/hero-architecture.png";

const WHATSAPP_NUMBER = "261344212660";

const HeroSection = () => {
  const [formData, setFormData] = useState({ nom: "", telephone: "", typeProjet: "" });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour PRAGMATEC Construction,\n\nJe suis ${formData.nom}.\nTéléphone : ${formData.telephone}\nType de projet : ${formData.typeProjet}\n\nMerci de me recontacter.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Architecture contemporaine premium à Madagascar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225,60%,12%)]/90 via-[hsl(225,60%,20%)]/60 to-[hsl(225,60%,26%)]/30" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-32 md:py-40">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-16 h-px bg-brand-yellow mb-8" />
              <h1 className="heading-display text-primary-foreground mb-6">
                Votre projet<br />
    
                <span className="text-brand-yellow">Notre réalité !</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 font-sans leading-relaxed">
                Construction contemporaine et de qualité à Madagascar.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-brand-yellow text-foreground text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-brand-yellow-light"
                >
                  Obtenir un devis privé
                </a>
                <a
                  href="#portfolio"
                  className="inline-block px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:border-brand-yellow hover:bg-primary-foreground/5"
                >
                  Explorer nos réalisations
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <form onSubmit={handleQuickSubmit} className="bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/10 p-8">
              <h3 className="font-serif text-lg text-primary-foreground mb-6">Demande rapide</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-brand-yellow transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-brand-yellow transition-colors"
                />
                <select
                  required
                  value={formData.typeProjet}
                  onChange={(e) => setFormData({ ...formData, typeProjet: e.target.value })}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 px-4 py-3 text-sm text-primary-foreground/70 focus:outline-none focus:border-brand-yellow transition-colors"
                >
                  <option value="">Type de projet</option>
                  <option value="Villa haut standing">Villa haut standing</option>
                  <option value="Immeuble résidentiel">Immeuble résidentiel</option>
                  <option value="Espace commercial">Espace commercial</option>
                  <option value="Rénovation">Rénovation</option>
                </select>
                <button type="submit" className="w-full bg-brand-yellow text-foreground py-3 text-sm font-semibold tracking-widest uppercase hover:bg-brand-yellow-light transition-all">
                  Envoyer via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
