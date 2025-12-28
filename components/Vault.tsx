
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

const RESOURCES = [
  { id: "R-01", name: "Glitch_Kit", size: "4.2GB", type: "ASSET_PACK", color: "border-indigo-500" },
  { id: "R-02", name: "Neo_Shell", size: "128MB", type: "V_OS_CORE", color: "border-rose-500" },
  { id: "R-03", name: "Pulse_UI", size: "850MB", type: "LIB_REACT", color: "border-emerald-500" },
  { id: "R-04", name: "Synth_Grid", size: "2.1GB", type: "WEBGL_ENV", color: "border-amber-500" }
];

export const Vault: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vault-pill", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-zinc-950 py-32 px-8 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/3">
           <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.8]">
            The <br /><span className="text-white/20">Vault.</span>
          </h2>
          <p className="text-zinc-500 text-lg mt-8 mb-10 leading-relaxed italic">
            Secure access to proprietary syndicate artifacts. Each node is protected by a 256-bit rotating cipher.
          </p>
          <button className="px-10 py-4 bg-white text-black font-black uppercase text-xs italic tracking-widest skew-x-[-15deg] hover:bg-indigo-600 hover:text-white transition-all">
            Unlock_All_Artifacts
          </button>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {RESOURCES.map((res, i) => (
            <div key={i} className={`vault-pill group relative h-[300px] bg-zinc-900 border-l-8 ${res.color} p-8 flex flex-col justify-between overflow-hidden cursor-pointer`}>
              <div className="absolute inset-0 bg-indigo-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="mono text-[9px] text-zinc-500 font-black tracking-[0.4em]">{res.id}</span>
                <span className="mono text-[8px] bg-zinc-800 text-white px-2 py-0.5 font-bold">{res.size}</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-black italic uppercase text-white mb-2 group-hover:translate-x-2 transition-transform">{res.name}</h3>
                <p className="mono text-[10px] text-indigo-400 font-bold uppercase tracking-widest">{res.type}</p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex gap-1">
                   {[1,2,3,4].map(j => <div key={j} className="w-4 h-1 bg-zinc-800"></div>)}
                </div>
                <span className="text-white font-black group-hover:text-indigo-400 transition-colors">ACCESS_G</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
