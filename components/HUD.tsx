
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const HUD: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-block", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      });

      // Simple counter animation
      const counters = containerRef.current?.querySelectorAll('.counter');
      counters?.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 90%"
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-8 bg-zinc-950 relative border-y border-zinc-900 overflow-hidden">
      {/* Decorative scanning line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/10 animate-[scan_4s_linear_infinite] z-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/3">
          <h2 className="text-5xl font-black italic uppercase text-white mb-6 leading-none">Network <br /><span className="text-indigo-500">Metrics.</span></h2>
          <p className="text-zinc-500 mono text-sm leading-relaxed mb-8">
            Real-time synchronization across 12 distributed clusters. 
            Monitoring latency, throughput, and visual fidelity in high-concurrency environments.
          </p>
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <span className="mono text-xs text-zinc-400 font-bold">NODE_HEALTH</span>
              <span className="text-emerald-500 font-black italic">OPTIMAL_100</span>
            </div>
            <div className="p-4 bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <span className="mono text-xs text-zinc-400 font-bold">LATENCY</span>
              <span className="text-indigo-400 font-black italic">14ms</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: "Global Packets", value: 1420, suffix: "k" },
             { label: "Active Threads", value: 8902, suffix: "" },
             { label: "Uptime (Days)", value: 742, suffix: "" }
           ].map((stat, i) => (
             <div key={i} className="stat-block relative p-10 bg-white group hover:bg-indigo-600 transition-colors duration-500">
               <span className="absolute top-4 left-4 text-[10px] mono font-black text-zinc-400 group-hover:text-white/50">{i + 1} / 03</span>
               <div className="mt-8">
                  <div className="text-6xl font-black italic text-black group-hover:text-white leading-none">
                    <span className="counter" data-target={stat.value}>0</span>{stat.suffix}
                  </div>
                  <div className="mt-4 mono text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white/70">
                    {stat.label}
                  </div>
               </div>
               <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-zinc-200 group-hover:border-white transition-colors"></div>
             </div>
           ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
