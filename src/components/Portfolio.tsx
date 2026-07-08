"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VERTICAL_VIDEOS = [
  "DAG-_yI6ApE",
  "DAG-_aeQEFw",
  "DAG-_aeQEFw",
  "DAG-_yI6ApE",
];

const HORIZONTAL_VIDEOS = [
  "DAG-_yI6ApE",
  "DAG-_aeQEFw",
  "DAG-_yI6ApE",
  "DAG-_aeQEFw",
];

export default function Portfolio() {
  const verticalRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const slide = (ref: React.RefObject<HTMLDivElement | null>, dir: number) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir * (ref.current.clientWidth * 0.75),
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="portafolio" className="bg-neutral-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6 text-center">
          NUESTRO TRABAJO
        </h2>
        <p className="text-neutral-400 text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16">
          Cada proyecto es una oportunidad para contar una historia visual única.
        </p>

        {/* Vertical Videos */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-neutral-200">
            Videos Verticales
          </h3>
          <div className="relative group">
            <button
              onClick={() => slide(verticalRef, -1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronLeft size={20} />
            </button>
            <div
              ref={verticalRef}
              className="flex gap-2 md:gap-4 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {VERTICAL_VIDEOS.map((id, i) => (
                <div
                  key={i}
                  className="min-w-[70%] sm:min-w-[45%] md:min-w-[calc(25%-12px)] flex-shrink-0"
                >
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl md:rounded-[1.5rem] p-1.5 md:p-2 hover:border-pink-500/40 transition-all duration-500">
                    <div className="aspect-[9/16] w-full rounded-lg md:rounded-[1rem] overflow-hidden relative">
                      <iframe
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: "none", borderRadius: "0.5rem" }}
                        src={`https://www.canva.com/design/${id}/watch?embed&autoplay=1&mute=1&loop=1`}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture; loop"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => slide(verticalRef, 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Videos */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-neutral-200">
            Videos Horizontales
          </h3>
          <div className="relative group">
            <button
              onClick={() => slide(horizontalRef, -1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronLeft size={20} />
            </button>
            <div
              ref={horizontalRef}
              className="flex gap-2 md:gap-4 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {HORIZONTAL_VIDEOS.map((id, i) => (
                <div
                  key={i}
                  className="min-w-[85%] sm:min-w-[60%] md:min-w-[calc(50%-8px)] flex-shrink-0"
                >
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl md:rounded-[1.5rem] p-1.5 md:p-2 hover:border-blue-500/40 transition-all duration-500">
                    <div className="aspect-video w-full rounded-lg md:rounded-[1rem] overflow-hidden relative">
                      <iframe
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: "none", borderRadius: "0.5rem" }}
                        src={`https://www.canva.com/design/${id}/watch?embed&autoplay=1&mute=1&loop=1`}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture; loop"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => slide(horizontalRef, 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Instagram Embeds */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-neutral-200">
            Fotos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              [
                {
                  url: "https://www.instagram.com/p/DNRjNxMJGZq",
                  caption: "Proyectos 1",
                },
                {
                  url: "https://www.instagram.com/p/DCKkdn4JfYj",
                  caption: "",
                },
                {
                  url: "https://www.instagram.com/p/DKvKTpoJc6Y",
                  caption: "",
                },
              ],
              [
                {
                  url: "https://www.instagram.com/p/DVHrGBDjsey",
                  caption: "Proyectos 2",
                },
                {
                  url: "https://www.instagram.com/p/DP4MU-zkUmi",
                  caption: "",
                },
                {
                  url: "https://www.instagram.com/p/C2imwZPxTRb",
                  caption: "",
                },
              ],
            ].map((group, gi) => (
              <div key={gi} className="instagram-column p-4 space-y-4">
                {group.map((post, pi) => (
                  <div key={pi}>
                    {post.caption && (
                      <h4 className="text-white font-semibold mb-2">
                        {post.caption}
                      </h4>
                    )}
                    <iframe
                      src={`${post.url}/embed`}
                      className="w-full"
                      style={{
                        minWidth: "100%",
                        border: "none",
                        borderRadius: "1rem",
                        overflow: "hidden",
                      }}
                      scrolling="no"
                      allowTransparency
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
