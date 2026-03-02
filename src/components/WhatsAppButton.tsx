import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "261344212660";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour PRAGMATEC Construction, je souhaite obtenir un devis.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Contacter via WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-white fill-white" />
  </a>
);

export default WhatsAppButton;
