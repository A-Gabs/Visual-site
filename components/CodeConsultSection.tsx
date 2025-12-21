
import React from 'react';
import Navbar from './Navbar';
import HeroVisual from './HeroVisual';

const CodeConsultSection: React.FC = () => {
  return (
    <section className="bg-[#0b0a09] text-white min-h-screen w-full relative pt-12 overflow-hidden">
      {/* Background Decorative element for transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-[#fcfdff] to-transparent opacity-5" />

      {/* Navbar propio de Code Consult (Estilo Integrado Dark) */}
      <Navbar />
      
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl md:text-[88px] font-bold tracking-tight leading-[1] text-white">
                Consultoría <br/>
                <span className="text-[#91b7ff]">profesional</span> para tu <br/>
                app y software.
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-sm font-medium">
                ¡Hola! Soy John Parker. Consultor de desarrollo enfocado en soluciones de código y despliegue.
              </p>
            </div>
            
            <div className="flex items-center gap-10">
              <button className="bg-[#91b7ff] text-[#0b0a09] px-10 py-4 rounded-xl text-[15px] font-bold hover:bg-[#a6c5ff] transition-all hover:scale-105 shadow-[0_0_30px_rgba(145,183,255,0.2)]">
                Hablemos
              </button>
              
              <a href="#" className="text-gray-300 text-[15px] font-semibold hover:text-white transition-colors flex items-center gap-2 group">
                Ver casos de éxito
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </main>
    </section>
  );
};

export default CodeConsultSection;
