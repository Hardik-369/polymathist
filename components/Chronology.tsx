
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

const MILESTONES = [
  { year: "2042", title: "THE GENESIS", desc: "First node synchronized in Neo-Tokyo. The syndicate begins." },
  { year: "2044", title: "KINETIC SHIFT", desc: "Release of the first fluid UI protocol. Standard web architecture is abandoned." },
  { year: "2046", title: "THE GREAT MERGE", desc: "500 architects unite to form the Polymathist Collective." },
  { year: "2048", title: "NEO-DOM DOMINANCE", desc: "Virtual environments become indistinguishable from local shells." }
];

export const Chronology: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const milestones = containerRef.current?.querySelectorAll('.milestone-row');
      milestones?.forEach((row) => {
        const year = row.querySelector('.year-bg');
        const content = row.querySelector('.milestone-content');

        gsap.to(year, {
          yPercent: -30,
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        gsap.from(content, {
          x: (i: number) => (milestones.length % 2 === 0 ? 50 : -50),
          opacity: 0,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.5
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="chronology" className="bg-zinc-950 py-24 overflow-hidden" ref={containerRef}>
      <div className="px-8 mb-24">
        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
          The <br /><span className="text-indigo-500">Chronology.</span>
        </h2>
      </div>

      <div className="space-y-48">
        {MILESTONES.map((m, i) => (
          <div key={i} className="milestone-row relative flex items-center justify-center h-[400px]">
            <div className="year-bg absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <span className="text-[30vw] font-black text-zinc-900 leading-none select-none italic">
                {m.year}
              </span>
            </div>
            
            <div className={`milestone-content relative z-10 max-w-xl w-full px-8 ${i % 2 === 0 ? 'md:ml-auto md:mr-[20%]' : 'md:mr-auto md:ml-[20%]'}`}>
              <div className="p-10 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-indigo-500 transition-colors group">
                <span className="mono text-indigo-500 text-xs font-black block mb-2 tracking-[0.3em]">NODE_EVENT_0{i+1}</span>
                <h3 className="text-4xl font-black italic uppercase text-white mb-4 group-hover:text-indigo-400 transition-colors">{m.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{m.desc}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-1 w-12 bg-indigo-500"></div>
                  <span className="mono text-[10px] text-zinc-600 uppercase font-bold">Encrypted Data Packet</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};