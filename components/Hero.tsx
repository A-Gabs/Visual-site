
import React from 'react';
import HeroVisual from './HeroVisual';

const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-[82px] font-bold tracking-tight leading-[1.02] text-white">
            Consultoría <br/>
            <span className="text-[#91b7ff]">profesional</span> para tu <br/>
            app y software.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-sm font-medium">
            ¡Hola! Soy John Parker. Consultor de desarrollo enfocado en soluciones de código y despliegue.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <button className="bg-[#91b7ff] text-[#0b0a09] px-8 py-3 rounded-lg text-[14px] font-bold hover:scale-[1.02] transition-transform shadow-lg">
            Hablemos
          </button>
          
          <a href="#" className="text-gray-300 text-[14px] font-semibold hover:text-white transition-colors">
            Ver casos de éxito
          </a>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <HeroVisual />
      </div>
    </div>
  );
};

export default Hero;
