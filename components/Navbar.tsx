
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-center pt-10 px-6">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="font-bold text-xl tracking-tight text-white italic">Code __ Consult</span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Inicio</a>
          <a href="#" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#" className="hover:text-white transition-colors">Casos de éxito</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
          
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-white group transition-colors">
            Otros 
            <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <button className="border-2 border-white/10 hover:border-white/40 px-5 py-2.5 rounded-xl text-white text-[13px] font-bold transition-all ml-4">
            Solicita una demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
