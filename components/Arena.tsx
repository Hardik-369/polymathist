
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const Arena: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(terminalRef.current, {
      opacity: 0,
      rotateX: -30,
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: true
      }
    });
  }, []);

  return (
    <section id="arena" ref={containerRef} className="py-24 px-6 bg-zinc-950 perspective-1000">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-zinc-800 text-zinc-400 mono text-[10px] tracking-widest uppercase mb-4">Challenge Registry</span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">The Arena.</h2>
        </div>

        <div ref={terminalRef} className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden transform-gpu">
          <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-4 mono text-[10px] text-zinc-500 font-bold">polymathist@node: ~/arena</span>
          </div>
          
          <div className="p-8 md:p-12 mono">
            <div className="text-emerald-500 mb-4">$ polymath challenge list --active</div>
            <div className="space-y-6">
              {[
                { name: "GLITCH_SYNC", diff: "HARD", prize: "500 XP" },
                { name: "SHADOW_PROTOCOL", diff: "EXTREME", prize: "1200 XP" },
                { name: "NEO_DOM_REACH", diff: "EASY", prize: "150 XP" }
              ].map((c, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-zinc-800 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-600 font-bold">0{i+1}</span>
                    <span className="text-zinc-100 font-black tracking-tight text-xl">{c.name}</span>
                  </div>
                  <div className="flex items-center gap-8 mt-2 md:mt-0">
                    <span className={`text-[10px] px-2 py-0.5 border ${c.diff === 'EXTREME' ? 'border-rose-500 text-rose-500' : 'border-zinc-700 text-zinc-500'}`}>{c.diff}</span>
                    <span className="text-indigo-400 font-bold">{c.prize}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-zinc-600 italic">// Select protocol to initiate challenge sequence...</div>
            <div className="mt-2 text-white animate-pulse">_</div>
          </div>
        </div>
      </div>
    </section>
  );
};
