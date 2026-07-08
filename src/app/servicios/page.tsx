import type { Metadata } from "next";
import Packages from "@/components/Packages";

export const metadata: Metadata = {
  title: "Servicios | Fotolab - Producción Audiovisual para Marcas",
  description:
    "Paquetes de contenido fotográfico y audiovisual para marcas, emprendedores y creadores.",
};

export default function ServiciosPage() {
  return (
    <div className="pt-24">
      <div className="py-16 md:py-24 px-4 md:px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-4">
          NUESTROS <span className="gradient-text">SERVICIOS</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
          Soluciones audiovisuales diseñadas para potenciar tu marca en el mundo
          digital.
        </p>
      </div>
      <Packages />
    </div>
  );
}
