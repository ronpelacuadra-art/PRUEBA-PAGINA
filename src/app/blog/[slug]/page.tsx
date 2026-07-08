import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const POSTS: Record<
  string,
  {
    title: string;
    content: string[];
    date: string;
    readTime: string;
    category: string;
  }
> = {
  "como-preparar-tu-marca-para-una-sesion-fotografica": {
    title: "Cómo preparar tu marca para una sesión fotográfica profesional",
    date: "2026-06-15",
    readTime: "5 min",
    category: "Fotografía",
    content: [
      "Una sesión fotográfica profesional es una inversión en la imagen de tu marca. Para aprovecharla al máximo, la preparación es clave. Aquí te comparto los pasos esenciales.",
      "1. Define el objetivo de la sesión: ¿Es para redes sociales? ¿Para tu web? ¿Para una campaña publicitaria? Cada objetivo requiere un enfoque distinto en términos de composición, iluminación y dirección de arte.",
      "2. Prepara tu wardrobe: Si tu marca incluye prendas, planifica los looks con anticipación. Plancha, organiza y lleva opciones adicionales. Para producto, asegúrate de tener unidades impecables, sin etiquetas visibles ni daños.",
      "3. Crea un moodboard: Reúne referencias visuales que comuniquen el estilo que buscas. Esto ayuda a alinear expectativas con el equipo creativo y agiliza la producción.",
      "4. Llega con tiempo: El día de la sesión, programa llegar 30 minutos antes. Esto permite resolver imprevistos y empezar sin estrés.",
      "5. Confía en el proceso: La dirección creativa está para guiarte. Relájate, disfruta el momento y deja que los profesionales hagan su trabajo. Los mejores resultados siempre salen cuando hay confianza.",
      "¿Listo para tu próxima sesión? Contáctanos y hagamos algo increíble juntos.",
    ],
  },
  "por-que-el-video-vertical-domina-las-redes-sociales": {
    title: "Por qué el video vertical domina las redes sociales en 2026",
    date: "2026-06-01",
    readTime: "4 min",
    category: "Video",
    content: [
      "El formato vertical pasó de ser una tendencia a convertirse en el estándar. Hoy, plataformas como Instagram, TikTok y YouTube Shorts priorizan contenido en 9:16.",
      "¿Por qué funciona mejor? Simple: ocupa toda la pantalla del móvil. Sin distracciones, el usuario se enfoca completamente en tu mensaje. Los algoritmos favorecen este formato porque retiene más la atención.",
      "Para tu marca, esto significa que cada pieza de contenido debe pensarse en vertical desde la conceptualización. Ya no se trata de recortar un video horizontal, sino de componer pensando en el móvil.",
      "Tips para video vertical efectivo:",
      "- Texto grande y legible: En móvil, menos es más. Usa titulares cortos y contundentes.",
      "- Ritmo rápido: Los primeros 3 segundos son críticos. Capta la atención de inmediato.",
      "- Call to action claro: Dile al usuario qué hacer: dar like, seguir, comentar, visitar tu web.",
      "- Iluminación cuidada: Un video bien iluminado se ve profesional aunque se grabe con celular.",
      "En Fotolab producimos contenido vertical con intención estratégica. Cada reels, cada short, está pensado para conectar con tu audiencia y generar resultados.",
    ],
  },
  "que-incluye-un-paquete-de-contenido-mensual": {
    title: "¿Qué incluye un paquete de contenido mensual para tu marca?",
    date: "2026-05-20",
    readTime: "6 min",
    category: "Contenido",
    content: [
      "Mantener una presencia activa y consistente en redes sociales es uno de los mayores retos para las marcas. Aquí es donde un paquete de contenido mensual marca la diferencia.",
      "Nuestro Creator Pack está diseñado para darte contenido de calidad durante todo el mes, eliminando el estrés de tener que producir semana a semana.",
      "¿Qué incluye exactamente?",
      "1. Asesoría creativa mensual: Antes de empezar, nos sentamos (virtual o presencialmente) a planificar la estrategia del mes. Analizamos fechas clave, lanzamientos y tendencias.",
      "2. Producción de 8 a 10 videos cortos: Reels, TikToks y Shorts optimizados para cada plataforma. Con dirección creativa, buena iluminación y edición profesional.",
      "3. Sesión fotográfica profesional: Una sesión completa para generar fotos de producto, lifestyle o marca que complementan el contenido del mes.",
      "4. Guía de presencia frente a cámara: Incluimos tips y entrenamiento básico para que te sientas cómodo frente a la cámara. La naturalidad es clave para conectar con tu audiencia.",
      "Resultado: Contenido suficiente para 1 mes completo en redes sociales. Publica con consistencia sin volverte loco produciendo.",
      "¿Quieres ver cómo funciona? Escríbenos y te contamos los detalles.",
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div className="pt-24 text-center py-16">
        <h1 className="font-display text-4xl mb-4">Artículo no encontrado</h1>
        <p className="text-neutral-400 mb-8">
          El artículo que buscas no existe o ha sido eliminado.
        </p>
        <Link
          href="/blog"
          className="btn-primary px-6 py-3 rounded-full font-semibold text-neutral-900"
        >
          Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <article className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al blog
          </Link>

          <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
            <span className="bg-pink-500/10 text-pink-400 px-2 py-1 rounded-full">
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

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
            {post.title}
          </h1>

          <div className="prose prose-invert max-w-none space-y-4 text-neutral-300 leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-neutral-400 mb-4">
              ¿Te gustó este artículo? Compártelo o contáctanos para llevar tu
              marca al siguiente nivel.
            </p>
            <a
              href="https://wa.me/573027365200"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-full font-semibold text-neutral-900 inline-block"
            >
              Hablemos de tu marca
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
