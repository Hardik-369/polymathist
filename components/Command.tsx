
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const ARCHITECTS = [
  { name: "ZENITH", role: "Core Lead", status: "Online", span: "md:col-span-2 md:row-span-2", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
  { name: "ECHO", role: "UI/UX Wraith", status: "Idle", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
  { name: "GHOST", role: "Systems Poet", status: "Stealth", span: "md:col-span-1 md:row-span-2", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { name: "NOVA", role: "Protocol Architect", status: "Active", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
  { name: "VEX", role: "DevOps Nomad", status: "Syncing", span: "md:col-span-2 md:row-span-1", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" }
];

export const Command: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Ensure ScrollTrigger is aware of the new DOM elements
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Animate the section title first
      gsap.fromTo(".command-header", 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate the grid boxes with a clearer fromTo pattern
      gsap.fromTo(".command-box", 
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.9 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="command" 
      className="bg-zinc-950 py-32 px-8 relative min-h-screen z-20" 
      ref={containerRef}
    >
      {/* Structural Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="text-[40vw] font-black text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none rotate-12">
          COMMAND
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="command-header flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <span className="mono text-indigo-500 text-xs font-black tracking-[0.5em] uppercase block mb-4 animate-pulse">
              // SYNDICATE_OFFICER_PANEL
            </span>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
              The <span className="text-indigo-500">Command.</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <div className="mono text-[10px] text-zinc-500 font-bold mb-2">AUTH_LEVEL: OMEGA</div>
            <div className="flex gap-1 justify-end">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 h-4 bg-zinc-800" style={{ opacity: Math.random() }} />
              ))}
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min md:grid-rows-3">
          {ARCHITECTS.map((arch, i) => (
            <div 
              key={i} 
              className={`command-box group relative min-h-[300px] md:min-h-0 overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl ${arch.span}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0">
                <img 
                  src={arch.img} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
                  alt={arch.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              {/* Scanning Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500/50 shadow-[0_0_20px_#6366f1] animate-[scan-y_4s_linear_infinite]"></div>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-2 h-2 rounded-full ${arch.status === 'Online' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-zinc-600'} animate-pulse`}></div>
                  <span className="mono text-[9px] text-zinc-400 font-black uppercase tracking-widest">{arch.status}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-none group-hover:text-indigo-400 transition-colors">
                  {arch.name}
                </h3>
                <p className="mono text-[10px] text-zinc-500 mt-3 font-bold uppercase tracking-tighter border-t border-zinc-800 pt-3">
                  {arch.role}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4 z-30 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-8 h-8 border-t-2 border-r-2 border-indigo-500"></div>
              </div>
            </div>
          ))}

          {/* Secure Data Module (Interactive Element) */}
          <div className="command-box col-span-1 bg-indigo-600 p-8 flex flex-col justify-between border-4 border-black relative overflow-hidden group">
             <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             
             <div className="relative z-10 flex justify-between items-start">
               <span className="mono text-[10px] font-black text-white uppercase">Data_Stream</span>
               <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
             </div>
             
             <div className="relative z-10 my-8">
                <div className="text-5xl font-black italic text-white leading-none mb-2">94.8%</div>
                <div className="mono text-[8px] text-indigo-200 uppercase font-black">Sync_Probability</div>
             </div>
             
             <div className="relative z-10">
                <button className="w-full py-3 bg-white text-black font-black uppercase text-[10px] skew-x-[-15deg] hover:bg-indigo-400 transition-colors">
                  Recalibrate_Nodes
                </button>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan-y {
          0% { transform: translateY(-50px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
