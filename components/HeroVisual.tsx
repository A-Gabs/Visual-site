
import React from 'react';

const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] aspect-[1/1.1]">
      {/* Soft Glow */}
      <div className="absolute -inset-16 bg-[#91b7ff]/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Main Image Container with Asymmetrical Corners */}
      <div className="relative w-full h-full overflow-hidden rounded-[40px] rounded-bl-[180px] border border-white/5 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop" 
          alt="Consultant Portrait"
          className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
        />
        
        {/* Image Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default HeroVisual;
