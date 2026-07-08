import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto | Fotolab - Hablemos de tu Marca",
  description:
    "Contáctanos para tu próxima producción audiovisual, sesión fotográfica o proyecto de contenido.",
};

export default function ContactoPage() {
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
