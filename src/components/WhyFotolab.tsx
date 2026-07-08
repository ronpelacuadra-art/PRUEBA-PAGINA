export default function WhyFotolab() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6">
            ¿POR QUÉ FOTOLAB?
          </h2>
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Porque no solo grabamos y tomamos fotos. Pensamos, creamos y
            ejecutamos contenido con estrategia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            {
              emoji: "🎬",
              title: "+13 Años",
              desc: "Creando contenido audiovisual",
            },
            {
              emoji: "📱",
              title: "Enfoque Real",
              desc: "En redes sociales y resultados",
            },
            {
              emoji: "✨",
              title: "Estética Cuidada",
              desc: "Y storytelling visual",
            },
            {
              emoji: "🔥",
              title: "Procesos Claros",
              desc: "Y entregas rápidas",
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">
                {item.emoji}
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <p className="text-neutral-400 text-base md:text-lg">
            Trabajamos como el equipo creativo de tu marca.
          </p>
        </div>
      </div>
    </section>
  );
}
