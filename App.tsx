
import React, { useState, useEffect, useRef } from 'react';
import GroviaSection from './components/GroviaSection';
import CodeConsultSection from './components/CodeConsultSection';
import CollectiveCreativitySection from './components/CollectiveCreativitySection';
import BrandLyftSection from './components/BrandLyftSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'grovia', name: 'Grovia', color: 'bg-blue-600' },
    { id: 'code-consult', name: 'Code Consult', color: 'bg-[#91b7ff]' },
    { id: 'collective', name: 'Creative', color: 'bg-orange-500' },
    { id: 'brandlyft', name: 'BrandLyft', color: 'bg-red-400' }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPos = scrollContainerRef.current.scrollTop;
      const height = window.innerHeight;
      const index = Math.round(scrollPos / height);
      setActiveSection(index);
    }
  };

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* NAVEGADOR FLOTANTE (STYLE SWITCHER) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 items-center">
        {sections.map((sec, i) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(i)}
            className="group relative flex items-center justify-end"
          >
            <span className={`
              mr-4 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
              ${activeSection === i ? 'opacity-100 bg-white/10 backdrop-blur-md' : 'bg-black/20'}
            `}>
              {sec.name}
            </span>
            <div className={`
              w-3 h-3 rounded-full border-2 transition-all duration-500
              ${activeSection === i 
                ? `${sec.color} border-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)]` 
                : 'border-white/20 bg-transparent hover:border-white/50'}
            `} />
          </button>
        ))}
      </div>

      {/* INDICADOR DE MODO ACTUAL (BOTTOM LEFT) */}
      <div className="fixed bottom-8 left-8 z-[100] pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-white/30 text-[9px] font-black tracking-[0.3em] uppercase">Visualizando</span>
          <span className="text-white text-xl font-black italic tracking-tighter transition-all duration-700">
            {sections[activeSection].name}
          </span>
        </div>
      </div>

      {/* CONTENEDOR DE SECCIONES CON SNAP SCROLL */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="snap-container no-scrollbar"
      >
        <div className="snap-section"><GroviaSection /></div>
        <div className="snap-section"><CodeConsultSection /></div>
        <div className="snap-section"><CollectiveCreativitySection /></div>
        <div className="snap-section"><BrandLyftSection /></div>
      </div>
    </div>
  );
};

export default App;
