import Link from "next/link";

const SPACES = [
  {
    name: "Podcast Studio",
    desc: "Espacio acústicamente tratado para grabación de podcasts con equipamiento profesional.",
    features: ["2-3 cámaras", "Audio profesional", "Iluminación RGB"],
    emoji: "🎙️",
  },
  {
    name: "Set de Fotografía",
    desc: "Estudio con fondos intercambiables, luz continua y flash para sesiones fotográficas.",
    features: ["Fondos infinitos", "Luz continua/flash", "Vestidor"],
    emoji: "📸",
  },
  {
    name: "Sala de Eventos",
    desc: "Espacio versátil para talleres, networking, lanzamientos y sesiones de escucha.",
    features: ["Capacidad 30 pers.", "Proyector 4K", "Sonido envolvente"],
    emoji: "🎪",
  },
  {
    name: "Live Session Room",
    desc: "Set diseñado para grabaciones musicales en vivo con iluminación artística.",
    features: ["Multicámara", "Iluminación artística", "Aislamiento acústico"],
    emoji: "🎵",
  },
];

export default function StudioPreview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6">
            PRÓXIMAMENTE: <span className="gradient-text">FOTOLAB STUDIO</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Un espacio creativo equipado para producir contenido audiovisual de
            alto nivel. Sets de foto, estudio de podcast, sala de eventos y más.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {SPACES.map((space, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-500 card-hover"
            >
              <div className="text-3xl mb-4">{space.emoji}</div>
              <h3 className="font-display text-xl mb-2">{space.name}</h3>
              <p className="text-neutral-400 text-sm mb-4">{space.desc}</p>
              <ul className="space-y-1">
                {space.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-1.5 text-xs text-neutral-500"
                  >
                    <svg
                      className="w-3 h-3 text-pink-400 flex-shrink-0"
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
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/estudio"
            className="btn-primary px-8 py-3 rounded-full font-semibold text-neutral-900 inline-block"
          >
            Conoce más del estudio
          </Link>
        </div>
      </div>
    </section>
  );
}
