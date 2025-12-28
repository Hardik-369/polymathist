
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(leftRef.current, {
      xPercent: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      }
    });
    gsap.from(rightRef.current, {
      xPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-zinc-900 overflow-hidden flex flex-col md:flex-row">
      <div ref={leftRef} className="flex-1 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800">
        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
          Code is <br /><span className="text-indigo-500">Our Blood.</span>
        </h2>
        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
          We don't just build apps. We construct virtual environments that challenge the standard of digital interaction. Polymathist is the evolution of the developer.
        </p>
      </div>
      <div ref={rightRef} className="flex-1 bg-zinc-950 p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none select-none overflow-hidden">
          <div className="text-[20vw] font-black leading-none opacity-20 -rotate-12 translate-x-1/4">MANIFESTO</div>
        </div>
        <div className="space-y-12 relative z-10">
          {[
            { id: "01", title: "Universalism", desc: "No tech debt, only tech investment." },
            { id: "02", title: "Radical UI", desc: "If it doesn't move, it isn't alive." },
            { id: "03", title: "The Merge", desc: "Human intuition meets machine precision." }
          ].map((item) => (
            <div key={item.id} className="group cursor-default">
              <span className="mono text-indigo-500 text-sm font-bold block mb-2">{item.id}</span>
              <h3 className="text-3xl font-black italic uppercase group-hover:text-indigo-400 transition-colors">{item.title}</h3>
              <p className="text-zinc-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
