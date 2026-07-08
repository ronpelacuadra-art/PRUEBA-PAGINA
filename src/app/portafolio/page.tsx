import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portafolio | Fotolab - Trabajos de Fotografía y Video",
  description:
    "Conoce nuestros proyectos audiovisuales. Producción de contenido para marcas como Forever 21, Xiaomi, JAC y más.",
};

export default function PortafolioPage() {
  return (
    <div className="pt-24">
      <Portfolio />
    </div>
  );
}
