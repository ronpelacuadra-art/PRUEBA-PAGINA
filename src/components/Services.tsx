import { Film, Camera, CalendarRange, Lightbulb } from "lucide-react";

const SERVICES = [
  {
    icon: Film,
    title: "Videos de Alto Impacto",
    desc: "Para Instagram, TikTok y YouTube Shorts",
  },
  {
    icon: Camera,
    title: "Fotografía Profesional",
    desc: "De producto, marca y lifestyle",
  },
  {
    icon: CalendarRange,
    title: "Contenido Mensual",
    desc: "Para redes sociales",
  },
  {
    icon: Lightbulb,
    title: "Dirección Creativa",
    desc: "Y acompañamiento estratégico",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6">
            LO QUE HACEMOS
          </h2>
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Ayudamos a marcas, emprendedores y creadores a verse profesionales,
            relevantes y memorables en redes sociales y plataformas digitales.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-neutral-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
