
import React, { useEffect, useRef, useState } from 'react';

const CollectiveCreativitySection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100, vx: 0, vy: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { 
      x: width / 2, 
      y: height / 2, 
      prevX: width / 2, 
      prevY: height / 2, 
      vx: 0, 
      vy: 0, 
      active: false 
    };
    
    const colors = [
      { r: 255, g: 77, b: 0, a: 0.45 }, // Naranja
      { r: 0, g: 34, b: 255, a: 0.4 },  // Azul
      { r: 255, g: 40, b: 20, a: 0.35 }, // Rojo lava
      { r: 0, g: 180, b: 255, a: 0.3 }  // Cian
    ];

    class Blob {
      x: number;
      y: number;
      size: number;
      color: typeof colors[0];
      vx: number;
      vy: number;
      baseSize: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseSize = Math.random() * 300 + 350;
        this.size = this.baseSize;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
      }

      update() {
        const centerX = width / 2;
        const centerY = height / 2;
        this.vx += (centerX - this.x) * 0.00005;
        this.vy += (centerY - this.y) * 0.00005;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (mouse.active && dist < 1000) {
          const force = (1000 - dist) / 1000;
          this.vx += (dx / dist) * force * 0.18;
          this.vy += (dy / dist) * force * 0.18;

          if (dist < 200) {
            const repelForce = (200 - dist) / 200;
            this.vx -= (dx / dist) * repelForce * 0.6;
            this.vy -= (dy / dist) * repelForce * 0.6;
          }

          this.vx += mouse.vx * force * 0.15;
          this.vy += mouse.vy * force * 0.15;
          
          this.size = this.baseSize + (force * 80);
        } else {
          this.size += (this.baseSize - this.size) * 0.02;
        }

        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.size / 2) { this.x = -this.size / 2; this.vx *= -1; }
        if (this.x > width + this.size / 2) { this.x = width + this.size / 2; this.vx *= -1; }
        if (this.y < -this.size / 2) { this.y = -this.size / 2; this.vy *= -1; }
        if (this.y > height + this.size / 2) { this.y = height + this.size / 2; this.vy *= -1; }
      }

      draw() {
        if (!ctx) return;
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        grad.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`);
        grad.addColorStop(0.4, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a * 0.4})`);
        grad.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const blobs = Array.from({ length: 12 }, () => new Blob());

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.15)';
      ctx.fillRect(0, 0, width, height);
      
      mouse.vx = mouse.x - mouse.prevX;
      mouse.vy = mouse.y - mouse.prevY;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      ctx.globalCompositeOperation = 'screen';
      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });
      ctx.globalCompositeOperation = 'source-over';
      
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY - rect.top;
      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
      
      const vx = x - mouse.prevX;
      const vy = y - mouse.prevY;
      setMousePos({ x, y, vx, vy });
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const speed = Math.sqrt(mousePos.vx ** 2 + mousePos.vy ** 2);
  const stretch = Math.min(speed * 0.05, 0.8);
  const rotation = Math.atan2(mousePos.vy, mousePos.vx) * (180 / Math.PI);

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-between p-10 select-none group/section">
      {/* Custom Bubble Cursor */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${1 + stretch}, ${1 - stretch * 0.5})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-24 h-24 rounded-full border border-white/30 bg-white/5 backdrop-blur-[4px] shadow-[0_0_50px_rgba(255,255,255,0.15)] relative">
          <div className="absolute top-4 left-6 w-5 h-2.5 bg-white/30 rounded-full blur-[2px] -rotate-12"></div>
          <div className="absolute bottom-4 right-8 w-2 h-2 bg-white/10 rounded-full blur-[1px]"></div>
        </div>
      </div>

      {/* Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
      />
      
      {/* Top Bar Navigation */}
      <div className="relative z-10 flex justify-between items-start w-full text-white/90 text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase">
        <div className="flex gap-6 cursor-pointer group">
          <span className="font-bold border-b border-white transition-all group-hover:tracking-[0.4em]">monopo</span>
          <span className="opacity-40">londres</span>
        </div>
        
        <div className="hidden md:flex gap-12 items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
            INICIO
          </a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity">PROYECTOS</a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity">SERVICIOS</a>
        </div>

        <div className="flex flex-col items-end opacity-40 tabular-nums">
          <div>{new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })} LDN</div>
          <div>08:58 TYO</div>
        </div>
      </div>

      {/* Main Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-5xl md:text-[110px] font-medium max-w-5xl leading-[0.9] tracking-tighter">
          Somos una marca <br />
          de creatividad <br />
          <span className="relative inline-block group cursor-default italic font-light">
            colectiva
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white/30 transition-all duration-700 group-hover:w-full group-hover:bg-white"></div>
          </span>
        </h2>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end w-full text-white/40 text-[11px] uppercase tracking-widest gap-6">
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <span className="text-white/80 font-bold">Ubicación</span>
          <span>Londres & Tokio</span>
        </div>
        <div className="flex flex-col gap-1 md:items-center w-full md:w-auto">
          <span className="text-white/80 font-bold">Enfoque</span>
          <span>Agencia de diseño</span>
        </div>
        <div className="flex flex-col gap-1 md:items-end w-full md:w-auto">
          <span className="text-white/80 font-bold">Experiencia</span>
          <span>Branding & Digital</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <style>{`
        .group/section:hover {
          cursor: none;
        }
      `}</style>
    </section>
  );
};

export default CollectiveCreativitySection;
