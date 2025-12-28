
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    gsap.from(btnRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%"
      },
      ease: "elastic.out(1, 0.3)"
    });

    gsap.to(".cta-bg", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <section ref={containerRef} className="py-48 px-6 bg-indigo-600 relative overflow-hidden flex items-center justify-center">
      {/* Decorative Rotating Background Element */}
      <div className="cta-bg absolute w-[150vw] h-[150vw] border-[40px] border-white/10 rounded-full flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] border-[20px] border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 text-center text-white">
        <h2 className="text-7xl md:text-[10vw] font-black italic uppercase leading-none tracking-tighter mb-12">
          JOIN THE <br /> SYNDICATE.
        </h2>
        <div className="flex flex-col items-center gap-6">
          <button 
            ref={btnRef}
            className="group relative px-12 py-6 bg-white text-indigo-600 font-black text-2xl uppercase tracking-tighter skew-x-[-10deg] hover:bg-zinc-950 hover:text-white transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">BECOME A POLYMATH</span>
            <div className="absolute inset-0 bg-indigo-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <p className="mono text-indigo-200 text-xs font-bold uppercase tracking-[0.2em]">
            // WAITING LIST: 243 CANDIDATES //
          </p>
        </div>
      </div>
    </section>
  );
};
