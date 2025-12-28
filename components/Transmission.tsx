
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

const FEEDS = [
  { cat: "UPDATE", title: "Patch 0.8.2: Fluid Motion Overhaul", date: "MAR 12" },
  { cat: "EVENT", title: "Global Sync 2024: The Recap", date: "MAR 08" },
  { cat: "PATCH", title: "Deprecating Static Grid Models", date: "FEB 28" },
  { cat: "INTEL", title: "The rise of Neo-Tokyo Nodes", date: "FEB 15" }
];

export const Transmission: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('.feed-item');
      items?.forEach((item, i) => {
        gsap.to(item, {
          yPercent: i % 2 === 0 ? -20 : 20,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-32 overflow-hidden" ref={containerRef}>
      <div className="px-8 mb-24 flex items-center justify-between">
         <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-black leading-none">
          Trans <br /><span className="text-indigo-600">mission.</span>
        </h2>
        <div className="text-right max-w-xs hidden lg:block">
           <p className="mono text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-relaxed">
             // LIVE_SIGNAL_STRENGTH: 98% // BROADCASTING_ON_HIGH_FREQ //
           </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-4 h-[800px] md:h-[600px]">
        {FEEDS.map((feed, i) => (
          <div key={i} className={`feed-item flex-1 bg-zinc-950 p-10 flex flex-col justify-between border-b-8 border-black hover:border-indigo-600 transition-all cursor-pointer group`}>
            <div className="flex justify-between items-center">
              <span className="mono text-[9px] font-black text-zinc-500 uppercase tracking-[0.4em]">{feed.cat}</span>
              <span className="mono text-[9px] font-black text-indigo-500">{feed.date}</span>
            </div>
            
            <div className="mt-20">
              <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white leading-none group-hover:text-indigo-400 transition-colors mb-6">
                {feed.title}
              </h3>
              <div className="w-12 h-1 bg-zinc-800 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="mt-12 flex items-center gap-4 text-zinc-700 font-black italic text-sm">
              <span>Read_Signal</span>
              <span className="text-indigo-600 animate-pulse">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
