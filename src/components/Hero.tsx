"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (id: string, config: Record<string, unknown>) => YTPlayer;
      PlayerState: { PLAYING: number };
    };
  }
}

interface YTPlayer {
  playVideo: () => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (v: number) => void;
}

export default function Hero() {
  const playerRef = useRef<YTPlayer | null>(null);
  const [muted, setMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    if (typeof window.YT === "undefined") {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(tag, firstScript);
    }

    const createPlayer = () => {
      if (!window.YT?.Player) return;
      const p = new window.YT.Player("hero-youtube-player", {
        videoId: "71H-4FokXB4",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "71H-4FokXB4",
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            setPlayerReady(true);
            p.playVideo();
          },
        },
      });
      playerRef.current = p;
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    const unmuteOnInteraction = () => {
      if (playerRef.current) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        setMuted(false);
      }
      document.removeEventListener("touchstart", unmuteOnInteraction);
      document.removeEventListener("click", unmuteOnInteraction);
    };

    document.addEventListener("touchstart", unmuteOnInteraction, {
      once: true,
    });
    document.addEventListener("click", unmuteOnInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", unmuteOnInteraction);
      document.removeEventListener("click", unmuteOnInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (muted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col">
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 w-full h-full">
          <div id="hero-youtube-player" className="absolute inset-0 w-full h-full" />
          {!playerReady && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://img.youtube.com/vi/71H-4FokXB4/maxresdefault.jpg)",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10 pointer-events-none" />
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-32 md:bottom-40 right-6 z-30 bg-white/10 hover:bg-white/20 backdrop-blur p-3 rounded-full transition-all"
          aria-label={muted ? "Activar sonido" : "Silenciar"}
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-20 w-full max-w-5xl px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-none tracking-tight mb-4">
            EL <span className="gradient-text">LABORATORIO</span> DONDE TU
            MARCA COBRA VIDA
          </h1>
          <p className="text-neutral-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            En Fotolab creamos fotografía y video con intención: piezas pensadas
            para llamar la atención, generar conexión y convertir vistas en
            clientes.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-neutral-950 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="https://wa.me/573027365200"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-pulse bg-green-500 hover:bg-green-600 inline-flex items-center justify-center gap-3 px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold text-white shadow-2xl hover:scale-105 transition-all text-base md:text-lg w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablemos de tu marca
            </a>
            <Link
              href="/#servicios"
              className="px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold border border-white/30 hover:bg-white/10 transition-colors text-white text-base md:text-lg w-full sm:w-auto"
            >
              Lo que hacemos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
