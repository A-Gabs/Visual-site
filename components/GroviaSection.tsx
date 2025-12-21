
import React from 'react';

const GroviaSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center bg-[#fcfdff] overflow-hidden pb-32">
      {/* Mesh Gradient Background (Exclusivo Grovia) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[80%] bg-blue-100/50 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[70%] bg-indigo-50/60 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-emerald-50/40 rounded-full blur-[100px]" />
      </div>

      {/* Grovia Floating Pill Navbar */}
      <nav className="sticky top-8 z-50 flex items-center justify-center w-full px-6 mb-24">
        <div className="bg-white/70 backdrop-blur-2xl rounded-full shadow-[0_10px_50px_rgba(59,130,246,0.08)] border border-white/60 px-4 py-2 flex items-center gap-10 md:gap-14 transition-all hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]">
          <div className="flex items-center gap-3 pl-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg rotate-3 group hover:rotate-0 transition-transform cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900">Grovia</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[14px] font-bold text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Plataforma</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Soluciones</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Integraciones</a>
          </div>

          <button className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-blue-700 transition-all hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)] active:scale-95">
            Prueba Gratis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Grovia Content */}
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center mt-12">
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full text-[12px] font-bold text-blue-600 mb-10 shadow-sm animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          v3.0 ya está disponible para todos
        </div>
        
        <h1 className="text-6xl md:text-[110px] font-[900] text-slate-900 tracking-tighter leading-[0.82] mb-10">
          IMPULSA TU <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500">GROWTH ENGINE</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-500 text-xl mb-14 leading-relaxed font-medium">
          La plataforma todo-en-uno para que los equipos de marketing modernos automaticen, 
          escalen y visualicen el recorrido del cliente con insights impulsados por IA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all hover:-translate-y-1 shadow-2xl">
            Empezar gratis
          </button>
          <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
            Ver demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroviaSection;
