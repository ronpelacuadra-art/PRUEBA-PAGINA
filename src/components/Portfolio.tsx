"use client";

import { useEffect } from "react";

const CATEGORIES = [
  {
    title: "Videos Verticales",
    posts: [
      { url: "https://www.instagram.com/p/DVHrGBDjsey" },
      { url: "https://www.instagram.com/p/DP4MU-zkUmi" },
      { url: "https://www.instagram.com/p/DNRjNxMJGZq" },
      { url: "https://www.instagram.com/p/DCKkdn4JfYj" },
    ],
  },
  {
    title: "Videos Horizontales",
    posts: [
      { url: "https://www.instagram.com/p/DMi0IaKy1sS" },
      { url: "https://www.instagram.com/p/DNbhnBGuUQu" },
      { url: "https://www.instagram.com/p/DINI5Ypt0Lo" },
    ],
  },
  {
    title: "Fotos",
    posts: [
      { url: "https://www.instagram.com/p/DKvKTpoJc6Y" },
      { url: "https://www.instagram.com/p/C2imwZPxTRb" },
      { url: "https://www.instagram.com/p/CzryojugmtO" },
    ],
  },
];

export default function Portfolio() {
  useEffect(() => {
    if (!document.getElementById("instagram-embed-script")) {
      const s = document.createElement("script");
      s.id = "instagram-embed-script";
      s.src = "https://platform.instagram.com/en_US/embeds.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="portafolio" className="bg-neutral-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6 text-center">
          NUESTRO TRABAJO
        </h2>
        <p className="text-neutral-400 text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-8 md:mb-12">
          Cada proyecto es una oportunidad para contar una historia visual
          única.
        </p>

        {CATEGORIES.map((section, si) => (
          <div key={si} className="mb-10 md:mb-16">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-neutral-200">
              {section.title}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {section.posts.map((post, pi) => (
                <div
                  key={pi}
                  className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden hover:border-pink-500/40 transition-all duration-500"
                >
                  <iframe
                    src={`${post.url}/embed`}
                    className="w-full"
                    style={{
                      minWidth: "100%",
                      border: "none",
                      display: "block",
                    }}
                    scrolling="no"
                    allowTransparency
                    loading="lazy"
                    height={480}
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
