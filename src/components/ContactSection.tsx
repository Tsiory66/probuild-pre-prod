import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "261344212660";
const EMAIL = "pragmatec.construction@gmail.com";

const ContactSection = () => {
  const [form, setForm] = useState({
    typeProjet: "",
    surface: "",
    budget: "",
    delai: "",
    telephone: "",
    email: "",
    description: "",
  });
  const [sendMode, setSendMode] = useState<"whatsapp" | "email">("whatsapp");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildMessage = () => {
    return `Bonjour PRAGMATEC Construction,

Demande de devis :
- Type de projet : ${form.typeProjet}
- Surface estimée : ${form.surface}
- Délai souhaité : ${form.delai}
- Téléphone : ${form.telephone}
- Email : ${form.email}

Description :
${form.description}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildMessage();

    if (sendMode === "whatsapp") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      const subject = encodeURIComponent(`Demande de devis – ${form.typeProjet}`);
      const body = encodeURIComponent(msg);
      window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    }
  };

  const inputClass = "w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue transition-colors";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="line-accent mb-8" />
          <h2 className="heading-section mb-6">
            Démarrez votre <span className="text-brand-yellow">projet.</span>
          </h2>
          <p className="text-editorial mb-8">
            Remplissez ce formulaire et envoyez-le directement via WhatsApp ou Email.
            Notre équipe vous recontactera sous 24h ouvrées.
          </p>
          <div className="space-y-4">
            <div className="bg-surface-elevated border border-border p-6 inline-block">
              <p className="text-sm text-muted-foreground">
                ✉ Réponse garantie sous <strong className="text-foreground">24h ouvrées</strong>
              </p>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>📍 Mitsinjo-Betanimena, Tuléar 601, Madagascar</p>
              <p>📞 034 42 126 60</p>
              <p>✉ pragmatec.construction@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-5">
            <select name="typeProjet" value={form.typeProjet} onChange={handleChange} required className={`col-span-2 ${inputClass}`}>
              <option value="">Type de projet</option>
              <option value="Villa haut standing">Villa haut standing</option>
              <option value="Immeuble résidentiel">Immeuble résidentiel</option>
              <option value="Espace commercial">Espace commercial</option>
              <option value="Rénovation de prestige">Rénovation de prestige</option>
              <option value="Clé en main">Clé en main</option>
            </select>
            <input name="surface" value={form.surface} onChange={handleChange} placeholder="Surface estimée (m²)" className={inputClass} />
           
            <select name="delai" value={form.delai} onChange={handleChange} className={inputClass}>
              <option value="">Délai souhaité</option>
              <option value="6 mois">6 mois</option>
              <option value="12 mois">12 mois</option>
              <option value="18 mois">18 mois</option>
              <option value="24 mois +">24 mois +</option>
            </select>
            <input name="telephone" value={form.telephone} onChange={handleChange} type="tel" required placeholder="Téléphone" className={inputClass} />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className={`col-span-2 ${inputClass}`} />
          </div>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Décrivez votre projet..."
            className={`${inputClass} resize-none`}
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setSendMode("whatsapp")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border transition-colors ${
                sendMode === "whatsapp"
                  ? "border-brand-blue bg-brand-blue text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-brand-blue"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setSendMode("email")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border transition-colors ${
                sendMode === "email"
                  ? "border-brand-blue bg-brand-blue text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-brand-blue"
              }`}
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-yellow text-foreground py-4 text-sm font-semibold tracking-widest uppercase hover:bg-brand-yellow-light transition-colors flex items-center justify-center gap-2"
          >
            {sendMode === "whatsapp" ? <MessageCircle className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
            {sendMode === "whatsapp" ? "Envoyer via WhatsApp" : "Envoyer par Email"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
