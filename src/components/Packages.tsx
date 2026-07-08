import Link from "next/link";

const PACKAGES = [
  {
    emoji: "📱",
    title: "Reels Experience",
    subtitle: "Contenido visual para redes sociales",
    includes: [
      "Dirección creativa",
      "Grabación de 3 a 5 reels",
      "Sesión fotográfica",
      "10 a 15 fotografías editadas",
    ],
    ideal: "Marcas de moda, restaurantes, productos, emprendimientos",
    gradient: "from-pink-500/10 to-transparent",
    accentColor: "text-pink-400",
    iconBg: "from-pink-500/20 to-blue-500/20",
    waText: "Hola,%20me%20interesa%20Fotolab%20Reels%20Experience",
  },
  {
    emoji: "🎙️",
    title: "Podcast Studio",
    subtitle: "Grabación profesional de podcasts",
    includes: [
      "Grabación con 2 o 3 cámaras",
      "Audio profesional",
      "Edición completa del episodio",
      "3 clips verticales para redes",
    ],
    ideal: "Creadores de contenido, educadores, empresarios, entrevistas",
    gradient: "from-blue-500/10 to-transparent",
    accentColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-purple-500/20",
    waText: "Hola,%20me%20interesa%20Fotolab%20Podcast%20Studio",
    extra: "Duración: Hasta 1 hora",
  },
  {
    emoji: "🎵",
    title: "Live Sessions",
    subtitle: "Experiencia audiovisual musical",
    includes: [
      "Grabación multicámara",
      "Iluminación artística",
      "Edición cinematográfica",
      "Video para YouTube + 3 clips verticales",
    ],
    ideal: "Músicos, bandas, cantantes, DJs, proyectos musicales",
    gradient: "from-purple-500/10 to-transparent",
    accentColor: "text-purple-400",
    iconBg: "from-purple-500/20 to-pink-500/20",
    waText: "Hola,%20me%20interesa%20Fotolab%20Live%20Sessions",
  },
  {
    emoji: "🚀",
    title: "Creator Pack",
    subtitle: "Contenido estratégico mensual",
    includes: [
      "Asesoría creativa de contenido",
      "8 a 10 videos cortos",
      "Sesión fotográfica profesional",
      "Guía de presencia frente a cámara",
    ],
    ideal: "",
    gradient: "from-orange-500/10 to-transparent",
    accentColor: "text-orange-400",
    iconBg: "from-orange-500/20 to-yellow-500/20",
    waText: "Hola,%20me%20interesa%20Fotolab%20Creator%20Pack",
    result: "Contenido suficiente para 1 mes en redes sociales",
  },
  {
    emoji: "🎬",
    title: "Event Experience",
    subtitle: "Cobertura audiovisual de eventos",
    includes: [
      "Cobertura fotográfica completa",
      "Grabación de video",
      "Reel del evento",
      "20 a 40 fotografías editadas",
    ],
    ideal: "Eventos culturales, lanzamientos, charlas, networking",
    gradient: "from-cyan-500/10 to-transparent",
    accentColor: "text-cyan-400",
    iconBg: "from-cyan-500/20 to-blue-500/20",
    waText: "Hola,%20me%20interesa%20Fotolab%20Event%20Experience",
  },
];

const PREMIUM = {
  emoji: "🌟",
  title: "Premium Brand Production",
  subtitle: "Producción audiovisual completa",
  includes: [
    "Estrategia visual de campaña",
    "1 video comercial principal",
    "5 a 8 reels profesionales",
    "Sesión fotográfica completa",
    "Edición avanzada y color grading",
  ],
  ideal: "Campañas de marca, lanzamientos, empresas consolidadas",
  waText: "Hola,%20me%20interesa%20Fotolab%20Premium%20Brand%20Production",
  gradient: "from-pink-500/20 to-transparent",
  accentColor: "text-pink-400",
  iconBg: "from-pink-500/30 to-blue-500/30",
};

function PackageCard({
  pkg,
  isPremium,
}: {
  pkg: (typeof PACKAGES)[0];
  isPremium?: boolean;
}) {
  return (
    <div
      className={`card-hover ${
        isPremium
          ? "bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/20"
          : "bg-white/[0.03] border border-white/10"
      } rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden group`}
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pkg.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="relative z-10">
        <div
          className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${pkg.iconBg} flex items-center justify-center`}
        >
          <span className="text-2xl">{pkg.emoji}</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl mb-2">{pkg.title}</h3>
        <p className="text-neutral-500 mb-4 text-xs md:text-sm">
          {pkg.subtitle}
        </p>
        <div className="space-y-4 mb-6 md:mb-8 text-xs md:text-sm">
          <div>
            <p className="text-neutral-400 font-semibold mb-2 md:mb-3">
              Incluye:
            </p>
            <ul className="space-y-1 md:space-y-2">
              {pkg.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-neutral-300"
                >
                  <svg
                    className={`w-4 h-4 ${pkg.accentColor} flex-shrink-0 mt-0.5`}
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {"extra" in pkg && pkg.extra && (
            <p className="text-neutral-400 font-semibold">{pkg.extra}</p>
          )}
          {pkg.ideal && (
            <div>
              <p className="text-neutral-400 font-semibold mb-1 md:mb-2">
                Ideal para:
              </p>
              <p className="text-neutral-300 text-xs">{pkg.ideal}</p>
            </div>
          )}
          {"result" in pkg && pkg.result && (
            <div>
              <p className="text-neutral-400 font-semibold mb-1 md:mb-2">
                Resultado:
              </p>
              <p className="text-neutral-300 text-xs">{pkg.result}</p>
            </div>
          )}
        </div>
        <a
          href={`https://wa.me/573027365200?text=${pkg.waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-2.5 md:py-3 text-center ${
            isPremium
              ? "btn-primary text-white"
              : "border border-white/20 hover:bg-white/5"
          } rounded-full font-semibold transition-colors text-xs md:text-sm`}
        >
          {isPremium ? "Solicitar ahora" : "Solicitar información"}
        </a>
      </div>
    </div>
  );
}

export default function Packages() {
  return (
    <section id="paquetes" className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[2px] bg-purple-600 mb-12 md:mb-16" />
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Laboratorio de Experiencias Creativas
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Producción audiovisual, fotografía y contenido profesional para
            marcas, creadores y artistas que quieren destacar.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} />
          ))}
          <div className="relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-3 md:px-4 py-0.5 md:py-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-b-lg text-2xs md:text-xs font-bold text-white tracking-wider uppercase z-10">
              Premium
            </div>
            <PackageCard pkg={PREMIUM} isPremium />
          </div>
        </div>
      </div>
    </section>
  );
}
