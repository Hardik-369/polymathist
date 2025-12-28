
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

const PROJECTS = [
  { name: "Aethelgard UI", tech: "GSAP / CANVAS", desc: "A recursive interface designed for fractal navigation." },
  { name: "VaporOS", tech: "WASM / RUST", desc: "Browser-based hypervisor with near-native virtualization." },
  { name: "Kuro Protocol", tech: "REACT / P2P", desc: "Encrypted messaging layer operating outside standard DNS." },
  { name: "Nova Frame", tech: "THREE.JS", desc: "3D component library for spatial web architectures." }
];

export const Archive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.archive-card');
    cards?.forEach((card, i) => {
      gsap.to(card, {
        opacity: 0.2,
        scale: 0.9,
        scrollTrigger: {
          trigger: card,
          start: "top 10%",
          end: "bottom 10%",
          scrub: true
        }
      });
    });
  }, []);

  return (
    <section id="archive" ref={containerRef} className="py-24 px-6 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto space-y-24">
        <div className="sticky top-24 z-10">
          <h2 className="text-8xl md:text-9xl font-black italic uppercase tracking-tighter text-zinc-800 opacity-20 pointer-events-none leading-none select-none">
            The Archive.
          </h2>
        </div>
        
        {PROJECTS.map((p, i) => (
          <div key={i} className="archive-card bg-zinc-900 border-l-4 border-indigo-500 p-8 md:p-16 relative z-20 group hover:bg-zinc-800 transition-colors">
            <span className="mono text-zinc-500 text-xs font-bold mb-4 block">{p.tech}</span>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-6 group-hover:text-indigo-400 transition-colors">
              {p.name}
            </h3>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
              {p.desc}
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-2 border-2 border-zinc-700 hover:border-indigo-500 font-bold text-xs uppercase tracking-widest transition-colors">Case Study</button>
              <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest transition-colors">Launch</button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-zinc-800 text-9xl font-black italic opacity-10 select-none">
              {i+1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
