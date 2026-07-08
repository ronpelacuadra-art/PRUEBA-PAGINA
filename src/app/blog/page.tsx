import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const POSTS = [
  {
    slug: "como-preparar-tu-marca-para-una-sesion-fotografica",
    title: "Cómo preparar tu marca para una sesión fotográfica profesional",
    excerpt:
      "Guía práctica para que tu marca llegue lista a tu sesión de fotos y aproveches al máximo el tiempo en estudio.",
    date: "2026-06-15",
    readTime: "5 min",
    category: "Fotografía",
  },
  {
    slug: "por-que-el-video-vertical-domina-las-redes-sociales",
    title: "Por qué el video vertical domina las redes sociales en 2026",
    excerpt:
      "El formato vertical ya no es opcional. Te explicamos cómo adaptar tu contenido para maximizar alcance.",
    date: "2026-06-01",
    readTime: "4 min",
    category: "Video",
  },
  {
    slug: "que-incluye-un-paquete-de-contenido-mensual",
    title: "¿Qué incluye un paquete de contenido mensual para tu marca?",
    excerpt:
      "Descubre cómo un plan de contenido mensual puede transformar la presencia digital de tu negocio.",
    date: "2026-05-20",
    readTime: "6 min",
    category: "Contenido",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-4">
              BLOG
            </h1>
            <p className="text-neutral-400 text-lg">
              Consejos, guías y tendencias sobre contenido audiovisual para
              marcas.
            </p>
          </div>

          <div className="space-y-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-pink-500/40 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                  <span className="bg-pink-500/10 text-pink-400 px-2 py-1 rounded-full text-2xs">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-white group-hover:gradient-text transition-all mb-3">
                  {post.title}
                </h2>
                <p className="text-neutral-400 text-sm md:text-base">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
