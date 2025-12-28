
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const shardsRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial Impact Flash
      tl.to(impactRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power4.in"
      })
      // Mechanical Title Reveal
      .from(".char-box", {
        scaleY: 0,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "expo.out"
      }, "-=0.2")
      .from(".shard", {
        x: (i: number) => (i % 2 === 0 ? -200 : 200),
        y: (i: number) => (i % 3 === 0 ? -100 : 100),
        opacity: 0,
        rotate: 45,
        stagger: 0.05,
        duration: 1.2,
        ease: "back.out(1.2)"
      }, "-=0.8")
      .from(".core-ring", {
        scale: 0,
        opacity: 0,
        rotate: -180,
        stagger: 0.1,
        duration: 1.5,
        ease: "elastic.out(1, 0.7)"
      }, "-=1.5");

      // Dynamic Rotation for Core
      gsap.to(".core-ring-1", { rotate: 360, duration: 20, repeat: -1, ease: "none" });
      gsap.to(".core-ring-2", { rotate: -360, duration: 15, repeat: -1, ease: "none" });

      // Multi-Axis Perspective Parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xVal = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const yVal = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(heroRef.current, {
          rotateY: xVal * 5,
          rotateX: -yVal * 5,
          duration: 1.2,
          ease: "power2.out"
        });

        gsap.to(".shard-layer", {
          x: xVal * 80,
          y: yVal * 80,
          duration: 1.5,
          ease: "power3.out"
        });

        gsap.to(".title-layer", {
          x: xVal * -30,
          y: yVal * -30,
          duration: 1.5,
          ease: "power3.out"
        });

        gsap.to(".core-layer", {
          scale: 1 + Math.abs(xVal * 0.1),
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen bg-[#050505] overflow-hidden select-none perspective-2000">
      <div ref={impactRef} className="fixed inset-0 bg-white z-[200] pointer-events-none" />

      {/* Grid and Scanning Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Central Engine Core Layer */}
      <div className="core-layer absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="core-ring core-ring-1 w-[600px] h-[600px] border border-dashed border-indigo-500/40 rounded-full" />
        <div className="core-ring core-ring-2 absolute w-[500px] h-[500px] border-2 border-indigo-500/20 rounded-full scale-110" />
        <div className="core-ring absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-pulse" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* Fragmented Title */}
        <div className="title-layer text-center mb-12 transform-gpu">
          <div className="mono text-indigo-400 text-[10px] tracking-[1em] uppercase mb-4 animate-pulse">
            // INITIATING_NEO_SYNC
          </div>
          <h1 className="flex gap-4 text-[12vw] font-black italic tracking-tighter uppercase leading-none text-white">
            {["P", "O", "L", "Y"].map((c, i) => (
              <span key={i} className="char-box inline-block bg-white text-black px-2 skew-x-[-12deg]">{c}</span>
            ))}
            <span className="text-indigo-500 stroke-text-heavy -ml-2">MATH</span>
          </h1>
          <h1 className="text-[12vw] font-black italic tracking-tighter uppercase leading-none text-white -mt-4">
            IST<span className="text-indigo-500">_</span>
          </h1>
        </div>

        {/* Dynamic Meta Shards */}
        <div className="shard-layer absolute inset-0 pointer-events-none">
          {/* Shard 1: Top Left */}
          <div className="shard absolute top-[15%] left-[10%] w-64 h-32 bg-zinc-900/80 backdrop-blur-md border-l-4 border-indigo-500 p-4 skew-x-[-15deg] shadow-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="mono text-[8px] text-zinc-500">SYS_VOL_A</span>
              <div className="w-1 h-1 rounded-full bg-indigo-500" />
            </div>
            <div className="text-white font-black italic text-lg uppercase leading-none">Architect</div>
            <p className="mono text-[9px] text-zinc-500 mt-2">STRUCTURAL_INTEGRITY: 99.8%</p>
          </div>

          {/* Shard 2: Bottom Right */}
          <div className="shard absolute bottom-[15%] right-[10%] w-72 h-40 bg-white p-6 skew-x-[-15deg] shadow-[20px_20px_0_0_rgba(99,102,241,1)]">
            <div className="text-black font-black italic text-3xl uppercase leading-none mb-1">Syndicate</div>
            <p className="mono text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4">Node: Neo-Tokyo // 042</p>
            <button className="w-full py-2 bg-indigo-600 text-white font-black uppercase text-xs tracking-tighter">Enter_Portal</button>
          </div>

          {/* Shard 3: Mid Left Floating */}
          <div className="shard absolute top-[50%] left-[5%] flex flex-col gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-1 bg-indigo-500/50" style={{ width: `${40 + i * 20}px` }} />
            ))}
            <span className="mono text-[8px] text-indigo-400 rotate-90 origin-left mt-8 tracking-[0.5em] uppercase font-black">Generation_V</span>
          </div>
        </div>

        {/* Action Center */}
        <div className="mt-8 flex flex-col items-center gap-6 z-20">
          <p className="max-w-md text-center text-zinc-400 font-medium italic text-lg leading-snug px-6">
            Building high-fidelity digital artifacts for the <span className="text-white">New World Architects.</span>
          </p>
          <div className="flex gap-4">
            <div className="h-px w-24 bg-zinc-800 self-center" />
            <div className="flex gap-2">
              {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 border border-zinc-700 rotate-45" />)}
            </div>
            <div className="h-px w-24 bg-zinc-800 self-center" />
          </div>
        </div>
      </div>

      {/* Scroll Trigger Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
        <span className="mono text-[10px] uppercase font-black tracking-[0.3em]">Down_Link</span>
        <div className="w-px h-16 bg-gradient-to-b from-indigo-500 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scroll_2s_infinite]" />
        </div>
      </div>

      <style>{`
        .stroke-text-heavy {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
          color: transparent;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};
