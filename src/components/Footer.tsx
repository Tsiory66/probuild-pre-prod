import logo from "@/assets/logo-pragmatec.jpeg";

const Footer = () => (
  <footer className="bg-surface-dark px-6 md:px-12 lg:px-24 py-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="PRAGMATEC" className="h-10 w-10 object-cover rounded" />
            <div>
              <h3 className="font-sans text-xl font-bold">PRAGMATEC</h3>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">Construction</span>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/50 leading-relaxed">
            Architecture contemporaine et construction de qualité à Madagascar.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-brand-yellow">Navigation</h4>
          <div className="space-y-3">
            {[
              { label: "Réalisations", href: "#portfolio" },
              { label: "Services", href: "#services" },
              { label: "À propos", href: "#manifeste" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-primary-foreground/50 hover:text-brand-yellow transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-brand-yellow">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/50">
            <p>Mitsinjo-Betanimena, Tuléar 601</p>
            <p>Madagascar</p>
            <p>034 42 126 60</p>
            <p>pragmatec.construction@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} PRAGMATEC Construction. Tous droits réservés.
        </p>
        <p className="text-xs text-primary-foreground/30">
          RCS N°2020B00030 — NIF 2004170313
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
