
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

  const displayImages = [...baseImages, ...baseImages, ...baseImages];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const itemWidth = scrollContainer.scrollWidth / 3;
    currentScrollPos.current = itemWidth;
    scrollContainer.scrollLeft = itemWidth;
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

    currentScrollPos.current -= deltaX * 1.2;

    const totalWidth = scrollContainer.scrollWidth;
    const oneThird = totalWidth / 3;

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
      className="relative min-h-screen w-full bg-[#fdfaf5] flex flex-col items-center py-12 px-6 overflow-hidden select-none"
    >
      
      {/* Marco Perimetral */}
      <div className="absolute inset-4 md:inset-6 border-[1px] border-[#e8d5bb]/50 rounded-[40px] md:rounded-[60px] pointer-events-none z-0 shadow-sm" />

      <div className="relative z-10 w-full max-w-[1300px] flex flex-col items-center">
        
        {/* Navbar */}
        <nav className="w-full flex items-center justify-between mt-4 mb-16 px-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#1e2329] rounded-lg flex items-center justify-center transform hover:rotate-6 transition-transform cursor-pointer">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M4 4h16v16H4z" />
                <path d="M4 12h16" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tighter text-[#1e2329]">BrandLyft</span>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-[13px] font-bold text-gray-500">
            <a href="#" className="hover:text-black transition-colors relative group">
              Marcas
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-black transition-colors relative group">
              Creadores
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-black transition-colors relative group">
              Precios
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-black transition-colors relative group">
              Casos
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-8">
            <button className="text-[13px] font-bold text-gray-500 hover:text-black">Entrar</button>
            <button className="bg-[#1e2329] text-white px-7 py-2.5 rounded-full text-[13px] font-bold hover:bg-black transition-all shadow-lg active:scale-95">
              Registrarse
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-5xl px-4">
          <div className="bg-[#fceccf] text-[#8a5e1e] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-12 shadow-sm">
            Únete a más de 100,000 creadores felices
          </div>

          <div className="relative mb-8">
            <h1 className="text-6xl md:text-[92px] font-black text-[#0a0b10] leading-[0.95] tracking-tighter">
              Cautiva Audiencias <br />
              con Videos Increíbles
            </h1>
            
            {/* Anotación */}
            <div className="absolute -right-32 top-12 hidden xl:block">
              <div className="flex flex-col items-start rotate-[12deg]">
                <span className="font-serif italic text-gray-600 text-xl leading-none mb-2">Eleva <br/> tu marca</span>
                <svg className="w-16 h-16 text-gray-400 -mt-2 -ml-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 20 Q 50 20, 65 70 M65 70 L55 60 M65 70 L75 62" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="absolute -left-16 top-20 hidden xl:block opacity-40">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="black" strokeWidth="2.5">
                <path d="M10 30 L2 38 M20 20 L5 35 M30 10 L10 30" />
              </svg>
            </div>
          </div>

          <p className="max-w-2xl text-gray-500 text-[18px] font-medium leading-relaxed mb-16">
            Impulsa tu marca con videos cortos de alto impacto creados por expertos. <br className="hidden md:block" />
            Nuestro equipo está listo para hacer despegar tu negocio.
          </p>
        </div>

        {/* Carrusel */}
        <div className="w-full flex justify-center mb-20 px-4 overflow-visible cursor-crosshair">
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 sm:gap-6 w-full max-w-full overflow-hidden py-8 px-2 pointer-events-none"
            style={{ scrollBehavior: 'auto' }}
          >
            {displayImages.map((img, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[140px] sm:w-[170px] md:w-[190px] lg:w-[210px] aspect-[9/16] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_25px_80px_rgba(0,0,0,0.22)] bg-gray-100 border border-gray-100/50 group"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative mb-20 flex flex-col items-center">
          <div className="relative">
            <button className="bg-[#f87171] text-white px-12 py-5 rounded-full text-base font-black shadow-[0_15px_45px_rgba(248,113,113,0.35)] hover:bg-[#ef4444] transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
              Empezar ahora
            </button>
            
            <div className="absolute -left-32 -top-4 hidden md:flex items-center gap-4 -rotate-[15deg] select-none">
              <span className="font-serif italic text-gray-600 text-2xl">Es gratis</span>
              <svg className="w-14 h-14 text-gray-400 mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 20 Q 50 20, 60 70 M60 70 L50 60 M60 70 L70 62" strokeLinecap="round" transform="scale(-1, 1) translate(-100, 0) rotate(180, 50, 50)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        
        section {
          contain: paint;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default BrandLyftSection;
