import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = localFont({
  src: [
    {
      path: "../../public/fonts/BebasNeue-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Fotolab - Agencia Creativa | Fotografía, Video y Contenido para Marcas",
  description:
    "En Fotolab creamos fotografía y video con intención. Producción audiovisual, fotografía profesional y contenido estratégico para marcas en Colombia.",
  keywords: [
    "fotografía profesional",
    "video para marcas",
    "contenido redes sociales",
    "producción audiovisual",
    "agencia creativa",
    "Fotolab",
  ],
  openGraph: {
    title: "Fotolab - Agencia Creativa",
    description:
      "El laboratorio donde tu marca cobra vida. Fotografía, video y contenido estratégico.",
    siteName: "Fotolab Studio",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${bebasNeue.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-neutral-950 text-white scroll-smooth overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
