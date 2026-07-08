import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

const SPACES = [
  {
    name: "Podcast Studio",
    emoji: "🎙️",
    desc: "Espacio profesional para grabación de podcasts con tratamiento acústico, 3 cámaras, micrófonos de alta gama y mesa de mezcla.",
    details: [
      "Aislamiento acústico profesional",
      "3 cámaras Sony A7IV",
      "Micrófonos Shure SM7B",
      "Mesa de sonido Rodecaster Pro II",
      "Monitorización en tiempo real",
      "Hasta 4 invitados",
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    name: "Photo Studio",
    emoji: "📸",
    desc: "Set fotográfico completo con fondos infinitos, luz continua y flash. Ideal para sesiones de producto, marca y retrato.",
    details: [
      "Fondos de papel infinito (blanco/negro)",
      "Flash Godox AD600 Pro",
      "Luz continua LED COB 300W",
      "Modificadores: beauty dish, softboxes",
      "Vestidor con espejo",
      "Croma key verde/azul",
    ],
    gradient: "from-pink-500/20 to-orange-500/20",
  },
  {
    name: "Event Room",
    emoji: "🎪",
    desc: "Sala versátil para talleres, networking, lanzamientos de producto, sesiones de escucha y eventos corporativos.",
    details: [
      "Capacidad para 30 personas",
      "Proyector 4K Laser 3000 lúmenes",
      "Sistema de sonido Bose",
      "Sillas y mesas modulares",
      "Climatización",
      "Catering disponible",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Live Session Room",
    emoji: "🎵",
    desc: "Espacio diseñado para sesiones musicales en vivo con iluminación artística y grabación multicámara.",
    details: [
      "Iluminación artística DMX",
      "Pared acústica",
      "Grabación 4 cámaras",
      "Monitorización IEM",
      "Backline básico disponible",
      "Capacidad para banda completa",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function EstudioPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
          FOTOLAB <span className="gradient-text">STUDIO</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Un laboratorio creativo equipado con tecnología profesional para que
          tu marca, proyecto o evento cobre vida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/573027365200?text=Hola,%20quiero%20reservar%20un%20espacio%20en%20Fotolab%20Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded-full font-semibold text-neutral-900 inline-flex items-center gap-2"
          >
            <Calendar size={18} />
            Reservar espacio
          </a>
          <a
            href="https://www.google.com/maps/search/Fotolab+Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/10 transition-colors inline-flex items-center gap-2"
          >
            <MapPin size={18} />
            ¿Dónde estamos?
          </a>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          {SPACES.map((space, i) => (
            <div
              key={i}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${space.gradient} flex items-center justify-center mb-4 text-3xl`}
                  >
                    {space.emoji}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-3">
                    {space.name}
                  </h2>
                  <p className="text-neutral-400 mb-6">{space.desc}</p>
                  <a
                    href={`https://wa.me/573027365200?text=Hola,%20me%20interesa%20el%20espacio%20${space.name.replace(/\s/g, "%20")}%20en%20Fotolab%20Studio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-medium"
                  >
                    <Calendar size={16} />
                    Consultar disponibilidad
                  </a>
                </div>
                <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-4">
                    Equipamiento:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {space.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-neutral-300"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-green-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 md:p-16">
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            ¿Listo para crear?
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Reserva tu espacio y empecemos a producir. También puedes agendar
            una visita guiada para conocer el estudio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573027365200?text=Hola,%20quiero%20reservar%20un%20espacio%20en%20Fotolab%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 rounded-full font-semibold text-neutral-900"
            >
              Reservar ahora
            </a>
            <Link
              href="/contacto"
              className="px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/10 transition-colors"
            >
              Agendar visita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
