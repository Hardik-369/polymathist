
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

const EXPERIMENTS = [
  { id: 'EXP-01', name: "Neural Glitch", category: "AI VISUALS", color: "text-indigo-500", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" },
  { id: 'EXP-02', name: "Vapor Shell", category: "OS ARCH", color: "text-rose-500", img: "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?auto=format&fit=crop&q=80&w=800" },
  { id: 'EXP-03', name: "Oasis Node", category: "P2P NETWORK", color: "text-emerald-500", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
  { id: 'EXP-04', name: "Static Void", category: "TYPE SYSTEM", color: "text-amber-500", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" }
];

export const Laboratory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true
        }
      });

      // Item animations
      const items = scrollRef.current?.querySelectorAll('.lab-item');
      items?.forEach(item => {
        gsap.from(item.querySelector('img'), {
          scale: 1.5,
          scrollTrigger: {
            trigger: item,
            containerAnimation: gsap.getProperty(scrollRef.current, 'xPercent'),
            scrub: true
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="lab" ref={containerRef} className="h-screen bg-zinc-950 overflow-hidden flex flex-col justify-center">
      <div className="px-8 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-6xl lg:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
            The <br />Laboratory.
          </h2>
          <p className="mono text-zinc-500 text-xs mt-4 uppercase font-bold tracking-widest">// SECURE_ENV: DATA_STREAMS_ACTIVE</p>
        </div>
        <div className="hidden lg:block text-right">
          <span className="mono text-[10px] text-indigo-500 font-black block">SCROLL_HORIZONTAL</span>
          <div className="h-1 w-32 bg-zinc-800 mt-2 relative">
             <div className="absolute top-0 left-0 h-full bg-indigo-500 w-1/4 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-12 px-8 w-[200vw]">
        {EXPERIMENTS.map((exp, i) => (
          <div key={i} className="lab-item group relative w-[25vw] h-[50vh] flex-shrink-0">
            <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 overflow-hidden transform group-hover:skew-y-[-2deg] transition-transform duration-500">
               <img 
                 src={exp.img} 
                 alt={exp.name} 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className={`mono text-xs font-bold mb-2 block ${exp.color}`}>{exp.id}</span>
              <h3 className="text-3xl font-black italic uppercase text-white mb-2 leading-none">{exp.name}</h3>
              <p className="text-zinc-500 mono text-[10px] font-bold tracking-widest">{exp.category}</p>
              <div className="mt-6 h-px w-0 bg-white group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                  <span className="text-xl">+</span>
               </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
