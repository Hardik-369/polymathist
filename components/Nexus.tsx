
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const Nexus: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const circles = svgRef.current?.querySelectorAll('circle');
    circles?.forEach((circle) => {
      gsap.to(circle, {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    gsap.from(".nexus-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center"
      }
    });
  }, []);

  return (
    <section id="nexus" ref={containerRef} className="py-24 px-6 bg-white overflow-hidden relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 15 }).map((_, i) => (
            <circle key={i} cx={Math.random() * 800} cy={Math.random() * 600} r={Math.random() * 30 + 5} fill="black" />
          ))}
          <path d="M100 100 L700 500" stroke="black" strokeWidth="0.5" strokeDasharray="5 5" />
          <path d="M700 100 L100 500" stroke="black" strokeWidth="0.5" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="text-center z-10 max-w-4xl px-4">
        <h2 className="nexus-text text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-zinc-950 leading-[0.85] mb-8">
          The <br /><span className="bg-zinc-950 text-white px-4">Nexus.</span>
        </h2>
        <p className="nexus-text text-zinc-600 text-xl md:text-2xl font-bold leading-tight max-w-2xl mx-auto italic mb-12">
          Collaboration isn't just a buzzword here. It's the primary directive. Join 500+ architects from across the globe.
        </p>
        
        <div className="nexus-text grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "MEMBERS", val: "1.2k+" },
            { label: "COMMITS", val: "450k+" },
            { label: "REGIONS", val: "12" },
            { label: "PROJECTS", val: "84" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col border-t-4 border-black pt-4">
              <span className="mono text-xs font-bold text-zinc-400">{stat.label}</span>
              <span className="text-3xl font-black">{stat.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
