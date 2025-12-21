
import React from 'react';

const LogoSection: React.FC = () => {
  const logos = [
    "LOGOIPSUM", "LOGO", "Logoipsum", "LOGOIPSUM", "Logoipsum"
  ];

  return (
    <div className="w-full border-t border-white/[0.04] py-16 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-600 text-[12px] font-semibold tracking-wide mb-12">
          Join just like the best companies out there
        </p>
        
        <div className="flex flex-wrap items-center justify-between gap-12 opacity-30 grayscale invert brightness-0">
          {logos.map((name, i) => (
            <div key={i} className="flex items-center gap-3">
               {/* Mockup SVG Icons for different logo variants */}
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-white/80" />
                 <span className="text-xl font-black tracking-tighter text-white uppercase italic">{name}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
