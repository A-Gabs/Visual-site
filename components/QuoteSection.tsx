
import React from 'react';

const QuoteSection: React.FC = () => {
  const whatsappNumber = "51930536304";
  const message = encodeURIComponent("Hola 👋\nQuiero cotizar una web rápida e intuitiva.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const bullets = [
    { icon: "⚡", text: "Velocidad optimizada", subtext: "(no pierdas visitas)" },
    { icon: "🎯", text: "Diseño claro", subtext: "enfocado en conversión" },
    { icon: "📲", text: "Botones directos", subtext: "a WhatsApp con mensajes" },
    { icon: "🧠", text: "Pensada para que", subtext: "te entiendan en segundos" }
  ];

  return (
    <section className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden px-6">
      {/* Fondo con sutil degradado coral */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50/60 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Título de Impacto con Logo de Rayo */}
        <div className="mb-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-[#f25031] rounded-2xl flex items-center justify-center text-white shadow-xl mb-8 animate-bounce transition-transform hover:scale-110">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[84px] font-[900] text-slate-900 leading-[1.05] tracking-tighter mb-4">
            Webs rápidas que <br className="hidden md:block" />
            <span className="text-[#f25031]">venden de verdad.</span>
          </h2>
        </div>

        {/* Grid de Beneficios - 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-14 text-left max-w-3xl mx-auto">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <span className="text-2xl flex-shrink-0 bg-red-50 w-12 h-12 flex items-center justify-center rounded-2xl border border-red-100 group-hover:bg-[#f25031] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {b.icon}
              </span>
              <p className="text-[15px] md:text-[16px] font-semibold text-slate-700 leading-tight">
                {b.text} <span className="text-slate-400 font-normal">{b.subtext}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Único CTA Principal Coral */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative group">
            {/* Efecto de resplandor coral */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#f25031] to-[#ff6b4d] rounded-full blur-xl opacity-20 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 bg-[#f25031] text-white px-12 py-6 rounded-full text-xl font-black shadow-2xl hover:bg-black transition-all hover:-translate-y-1.5 active:scale-95 uppercase tracking-[0.15em]"
            >
              Cotizar mi web
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.212l-.545 2.031 2.513-.482c.951.533 1.915.92 3.125.922 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.767-5.766zm3.333 7.632c-.104.286-.607.545-.838.583-.23.038-.456.064-1.295-.27-.838-.335-1.378-1.185-1.42-1.24-.042-.056-.34-.453-.34-.87 0-.417.218-.621.296-.706.077-.084.17-.106.226-.106.057 0 .113.002.162.005.052.002.124-.02.194.148.07.167.242.59.264.633.022.043.037.094.008.151-.029.057-.043.093-.086.143-.042.05-.091.11-.131.147-.045.042-.093.087-.04.178.053.091.236.39.507.63.348.31.64.406.73.45.091.043.144.037.197-.024.053-.061.226-.264.286-.354.06-.091.121-.076.204-.045.084.031.532.251.624.297.092.046.153.069.176.107.022.037.022.217-.082.504z" />
              </svg>
            </a>
          </div>
          
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest opacity-60">
            Respuesta a la velocidad de un rayo
          </p>
        </div>
      </div>

      {/* Marca de agua mínima al fondo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-slate-200 font-bold uppercase tracking-[0.4em]">
        Rayo Design & Dev • 2024
      </div>
    </section>
  );
};

export default QuoteSection;
