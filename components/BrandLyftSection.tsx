
import React, { useEffect, useRef } from 'react';

const BrandLyftSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMouseX = useRef<number | null>(null);
  const currentScrollPos = useRef(0);

  const baseImages = [
    { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&auto=format&fit=crop", alt: "Cocina Saludable" },
    { url: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=400&auto=format&fit=crop", alt: "Estilo de Vida Urbano" },
    { url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400&auto=format&fit=crop", alt: "Naturaleza Costera" },
    { url: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=400&auto=format&fit=crop", alt: "Rutina de Bienestar" },
    { url: "https://i.pinimg.com/736x/17/b7/92/17b792b5e95360348f411be4e41d72c5.jpg", alt: "Escena de Vida" },
    { url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop", alt: "Nutrición Equilibrada" },
    { url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400&auto=format&fit=crop", alt: "Viaje en Moto" }
  ];

  // Triplicamos las imágenes para el efecto infinito
  const displayImages = [...baseImages, ...baseImages, ...baseImages];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Centramos el scroll al inicio en la sección del medio
    const oneThird = scrollContainer.scrollWidth / 3;
    currentScrollPos.current = oneThird;
    scrollContainer.scrollLeft = oneThird;
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    if (lastMouseX.current === null) {
      lastMouseX.current = e.clientX;
      return;
    }

    const deltaX = e.clientX - lastMouseX.current;
    lastMouseX.current = e.clientX;

    // El scroll sigue el movimiento del mouse
    currentScrollPos.current -= deltaX * 1.5;

    const totalWidth = scrollContainer.scrollWidth;
    const oneThird = totalWidth / 3;

    // Lógica de loop infinito
    if (currentScrollPos.current >= oneThird * 2) {
      currentScrollPos.current -= oneThird;
    } else if (currentScrollPos.current <= 0) {
      currentScrollPos.current += oneThird;
    }

    scrollContainer.scrollLeft = currentScrollPos.current;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    lastMouseX.current = e.clientX;
  };

  const handleMouseLeave = () => {
    lastMouseX.current = null;
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full bg-[#fdfaf5] flex flex-col items-center justify-between py-8 px-6 overflow-hidden select-none"
    >
      {/* Marco Perimetral decorativo */}
      <div className="absolute inset-4 border-[1px] border-[#e8d5bb]/40 rounded-[40px] pointer-events-none z-0 shadow-sm" />

      <div className="relative z-10 w-full max-w-[1300px] h-full flex flex-col items-center justify-between">
        
        {/* Navbar Compacto */}
        <nav className="w-full flex items-center justify-between px-6 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#1e2329] rounded-lg flex items-center justify-center transform hover:rotate-6 transition-transform cursor-pointer">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M4 4h16v16H4z" />
                <path d="M4 12h16" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tighter text-[#1e2329]">BrandLyft</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">Marcas</a>
            <a href="#" className="hover:text-black transition-colors">Creadores</a>
            <a href="#" className="hover:text-black transition-colors">Precios</a>
          </div>

          <button className="bg-[#1e2329] text-white px-6 py-2 rounded-full text-[12px] font-bold hover:bg-black transition-all shadow-md active:scale-95">
            Registrarse
          </button>
        </nav>

        {/* Hero Section Ajustado */}
        <div className="flex flex-col items-center text-center mt-4">
          <div className="bg-[#fceccf] text-[#8a5e1e] px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
            Más de 100k creadores
          </div>

          <h1 className="text-5xl md:text-[72px] font-black text-[#0a0b10] leading-[0.9] tracking-tighter mb-4">
            Cautiva Audiencias <br />
            con Videos Pro
          </h1>

          <p className="max-w-xl text-gray-500 text-[16px] font-medium leading-tight">
            Impulsa tu marca con videos cortos de alto impacto creados por expertos.
          </p>
        </div>

        {/* Carrusel (Ahora siempre visible) */}
        <div className="w-full flex justify-center overflow-visible cursor-ew-resize my-4">
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 w-full max-w-full overflow-hidden py-4 px-2 pointer-events-none"
            style={{ scrollBehavior: 'auto' }}
          >
            {displayImages.map((img, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[120px] sm:w-[150px] md:w-[170px] aspect-[9/16] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 bg-gray-100 border border-gray-100/50"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mb-6 flex flex-col items-center">
          <button className="bg-[#f87171] text-white px-10 py-4 rounded-full text-sm font-black shadow-[0_10px_30px_rgba(248,113,113,0.3)] hover:bg-[#ef4444] transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
            Empezar ahora
          </button>
          <span className="mt-3 font-serif italic text-gray-400 text-sm">Es gratis y rápido</span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
};

export default BrandLyftSection;
