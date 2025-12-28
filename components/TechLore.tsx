
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const TechLore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const panels = containerRef.current?.querySelectorAll('.manga-panel');
    panels?.forEach((panel, i) => {
      gsap.from(panel, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        scrollTrigger: {
          trigger: panel,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        duration: 0.6,
        delay: i * 0.1
      });
    });
  }, []);

  return (
    <section className="py-24 px-6 bg-white text-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            Tech <br /> Lore.
          </h2>
          <p className="max-w-xs mono text-zinc-500 font-bold uppercase text-xs leading-relaxed">
            [ DATA_STREAM_01: Our stack defines our reality. Each layer is a deliberate choice in the pursuit of high-performance aesthetic architecture. ]
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[1200px] md:h-[700px]">
          {/* Manga Grid Panels */}
          <div className="manga-panel md:col-span-2 md:row-span-2 bg-zinc-950 p-12 flex flex-col justify-end border-4 border-black group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <h4 className="text-white text-5xl font-black italic uppercase leading-none mb-2">React 18+</h4>
              <p className="text-zinc-400 mono text-sm font-bold">THE CORE ENGINE</p>
            </div>
          </div>

          <div className="manga-panel md:col-span-2 bg-indigo-600 p-8 flex flex-col justify-center border-4 border-black group cursor-pointer relative">
             <div className="absolute top-4 right-4 text-4xl text-white font-black italic opacity-20">02</div>
             <h4 className="text-white text-4xl font-black italic uppercase leading-none mb-2">Tailwind CSS</h4>
             <p className="text-indigo-100 mono text-xs font-bold">UTILITY RADICALISM</p>
          </div>

          <div className="manga-panel bg-rose-500 p-8 flex items-center justify-center border-4 border-black group cursor-pointer">
             <h4 className="text-white text-2xl font-black italic uppercase text-center rotate-[-10deg]">GSAP POWER</h4>
          </div>

          <div className="manga-panel bg-zinc-200 p-8 flex flex-col justify-between border-4 border-black group cursor-pointer text-zinc-900">
             <div className="mono font-bold text-xs uppercase tracking-tighter">TypeScript</div>
             <div className="text-4xl font-black leading-none">STATIC TYPES <br /> NO FEAR</div>
          </div>
        </div>
      </div>
    </section>
  );
};
