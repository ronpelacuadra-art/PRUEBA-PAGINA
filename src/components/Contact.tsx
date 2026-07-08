"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/fotolabstudio.co@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  if (submitted) {
    return (
      <section id="contacto" className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            ¡MENSAJE ENVIADO!
          </h2>
          <p className="text-neutral-400 text-lg">
            Te responderemos pronto. ¡Gracias por contactarnos!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6">
            HABLEMOS
          </h2>
          <p className="text-neutral-400 text-base md:text-lg">
            Si llegaste hasta aquí, tu marca ya va un paso adelante.
          </p>
          <p className="text-neutral-500 text-sm md:text-base mt-2">
            Escríbenos y cuéntanos tu idea
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="hidden"
            name="_captcha"
            value="false"
          />
          <input
            type="hidden"
            name="_template"
            value="table"
          />
          <input
            type="hidden"
            name="_next"
            value=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-white placeholder-neutral-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-white placeholder-neutral-500 transition-colors"
            />
          </div>

          <select
            name="servicio"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-white transition-colors"
          >
            <option value="" disabled selected className="text-neutral-500">
              ¿Qué servicio te interesa?
            </option>
            <option value="basico" className="text-black">
              Paquete Básico
            </option>
            <option value="pro" className="text-black">
              Paquete Pro
            </option>
            <option value="premium" className="text-black">
              Paquete Premium
            </option>
            <option value="otro" className="text-black">
              Otro / Proyecto especial
            </option>
          </select>

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={5}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-white placeholder-neutral-500 transition-colors resize-none"
          />

          <button
            type="submit"
            className="btn-primary w-full py-3 md:py-4 rounded-xl font-semibold text-neutral-900 flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Enviar mensaje
          </button>
        </form>

        <div className="mt-12 text-center space-y-3">
          <a
            href="mailto:fotolabstudio.co@gmail.com"
            className="block text-neutral-400 hover:text-white transition-colors"
          >
            fotolabstudio.co@gmail.com
          </a>
          <a
            href="https://instagram.com/fotolabstudio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-neutral-400 hover:text-white transition-colors"
          >
            @fotolabstudio.co
          </a>
        </div>
      </div>
    </section>
  );
}
