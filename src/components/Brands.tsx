const BRANDS = [
  { name: "FOREVER 21", sub: null, style: "gradient-text" },
  { name: "TECNO", sub: "MOBILE", style: "" },
  { name: "XIAOMI", sub: null, style: "" },
  { name: "JAC", sub: null, style: "" },
  { name: "JETOUR", sub: null, style: "" },
  { name: "KIA", sub: null, style: "" },
  { name: "BAJAJ", sub: null, style: "" },
  { name: "CHEVYPLAN", sub: null, style: "text-base md:text-xl" },
  { name: "FUJIFILM", sub: null, style: "text-base md:text-xl" },
  { name: "CANAL TRO", sub: null, style: "gradient-text" },
  { name: "MITSUBISHI", sub: null, style: "text-base md:text-xl" },
  { name: "PRESTO", sub: null, style: "" },
  { name: "NUTRIBELA", sub: null, style: "text-base md:text-xl" },
  { name: "SKYDROPX", sub: null, style: "text-base md:text-xl" },
  { name: "FLUENCY", sub: null, style: "" },
  { name: "AMPER", sub: null, style: "" },
  { name: "YUPI", sub: null, style: "gradient-text" },
  { name: "RIKOMATE", sub: null, style: "text-base md:text-xl" },
  { name: "DISFARMA", sub: null, style: "text-base md:text-xl" },
  { name: "CARBO BRIK", sub: null, style: "text-base md:text-xl" },
];

export default function Brands() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-neutral-500 font-medium tracking-widest uppercase mb-3 md:mb-4 text-2xs md:text-sm">
            Confianza que respalda
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6">
            MARCAS CON LAS QUE HEMOS TRABAJADO
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
          {BRANDS.map((brand, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center justify-center hover:bg-white/[0.05] hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <p
                  className={`font-display text-lg md:text-2xl tracking-tight ${brand.style}`}
                >
                  {brand.name}
                </p>
                {brand.sub && (
                  <p className="text-2xs md:text-xs text-neutral-500 mt-0.5 md:mt-1">
                    {brand.sub}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
