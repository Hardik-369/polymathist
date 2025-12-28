
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const Synthesis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".window", {
        scale: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      });

      // Scrolling Code Animation
      gsap.to(".code-stream", {
        y: -1000,
        duration: 30,
        repeat: -1,
        ease: "none"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-zinc-950 py-32 px-8 perspective-1000 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="mono text-indigo-500 text-[10px] font-black tracking-[0.6em] uppercase block mb-4">ENVIRONMENT_SYNC</span>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">The Synthesis.</h2>
        </div>

        <div className="relative h-[800px] flex items-center justify-center">
          {/* Main IDE Window */}
          <div className="window absolute w-full max-w-5xl h-[600px] bg-zinc-900 border border-zinc-800 shadow-2xl rounded-lg overflow-hidden transform rotateX-10 z-10 flex">
            {/* Sidebar */}
            <div className="w-16 border-r border-zinc-800 flex flex-col items-center py-6 gap-8 bg-zinc-950/50">
               {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-800"></div>)}
            </div>
            
            {/* Code Area */}
            <div className="flex-1 p-8 mono text-xs text-zinc-500 overflow-hidden relative">
               <div className="flex items-center gap-4 mb-8">
                  <span className="text-indigo-400 font-black">main.poly</span>
                  <div className="h-px flex-1 bg-zinc-800"></div>
               </div>
               <div className="code-stream space-y-2">
                 {Array.from({ length: 100 }).map((_, i) => (
                   <div key={i} className="flex gap-8">
                     <span className="w-12 text-zinc-800 text-right">{i + 1}</span>
                     <span className={`${i % 3 === 0 ? 'text-indigo-500' : i % 5 === 0 ? 'text-rose-500' : 'text-zinc-600'}`}>
                        {i % 2 === 0 ? 'import { SyndicateNode } from "@polymathist/core";' : 'const nexus = await SyndicateNode.initialize();'}
                     </span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Floating Data Windows */}
          <div className="window absolute top-10 right-0 w-64 bg-white p-6 shadow-2xl z-20 rotate-[-5deg]">
             <div className="mono text-[10px] text-zinc-400 font-black uppercase mb-4">Cluster_Health</div>
             <div className="text-4xl font-black italic text-black leading-none mb-2">99.2%</div>
             <div className="h-1 bg-zinc-100 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[99%] animate-pulse"></div>
             </div>
          </div>

          <div className="window absolute bottom-10 left-0 w-80 bg-zinc-950/80 backdrop-blur-md border-l-4 border-indigo-500 p-8 shadow-2xl z-20 rotate-[5deg]">
             <div className="text-indigo-500 font-black italic text-xl mb-4 uppercase">Node_Active</div>
             <p className="mono text-[10px] text-zinc-500 leading-relaxed font-bold uppercase">Synthesizing localized UI components across distributed edge clusters. Latency within acceptable bounds.</p>
             <div className="mt-6 flex justify-between mono text-[9px] text-indigo-400 font-black">
                <span>TX_SEQ: 4218-A</span>
                <span className="animate-pulse">ONLINE</span>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .rotateX-10 {
          transform: rotateX(10deg);
        }
      `}</style>
    </section>
  );
};
