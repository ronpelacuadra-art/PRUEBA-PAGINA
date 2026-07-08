"use client";

import { useEffect } from "react";

const INSTAGRAM_POSTS = [
  {
    category: "Videos Verticales",
    posts: [
      { url: "https://www.instagram.com/p/DVHrGBDjsey", caption: "" },
      { url: "https://www.instagram.com/p/DP4MU-zkUmi", caption: "" },
      { url: "https://www.instagram.com/p/DNRjNxMJGZq", caption: "" },
      { url: "https://www.instagram.com/p/DCKkdn4JfYj", caption: "" },
    ],
  },
  {
    category: "Videos Horizontales",
    posts: [
      { url: "https://www.instagram.com/p/DMi0IaKy1sS", caption: "" },
      { url: "https://www.instagram.com/p/DNbhnBGuUQu", caption: "" },
      { url: "https://www.instagram.com/p/DINI5Ypt0Lo", caption: "" },
    ],
  },
  {
    category: "Fotos",
    posts: [
      { url: "https://www.instagram.com/p/DKvKTpoJc6Y", caption: "Proyectos 1" },
      { url: "https://www.instagram.com/p/C2imwZPxTRb", caption: "" },
      { url: "https://www.instagram.com/p/CzryojugmtO", caption: "" },
    ],
  },
];

export default function Portfolio() {
  useEffect(() => {
    const loadInstagram = () => {
      const script = document.getElementById("instagram-embed-script");
      if (!script) {
        const s = document.createElement("script");
        s.id = "instagram-embed-script";
        s.src = "https://platform.instagram.com/en_US/embeds.js";
        s.async = true;
        document.body.appendChild(s);
      }
    };
    const timeout = setTimeout(loadInstagram, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="portafolio" className="bg-neutral-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6 text-center">
          NUESTRO TRABAJO
        </h2>
        <p className="text-neutral-400 text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16">
          Cada proyecto es una oportunidad para contar una historia visual
          única.
        </p>

        {INSTAGRAM_POSTS.map((section, si) => (
          <div key={si} className="mb-16 md:mb-20">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-neutral-200">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {section.posts.map((post, pi) => (
                <div
                  key={pi}
                  className="bg-white/[0.02] border border-white/10 rounded-xl p-2 hover:border-pink-500/40 transition-all duration-500"
                >
                  {post.caption && (
                    <h4 className="text-white font-semibold mb-2 px-2 pt-2">
                      {post.caption}
                    </h4>
                  )}
                  <iframe
                    src={`${post.url}/embed`}
                    className="w-full rounded-lg"
                    style={{
                      minWidth: "100%",
                      border: "none",
                      overflow: "hidden",
                    }}
                    scrolling="no"
                    allowTransparency
                    loading="lazy"
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
