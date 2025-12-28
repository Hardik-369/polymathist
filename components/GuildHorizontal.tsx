
import React, { useLayoutEffect, useRef } from 'react';

declare const gsap: any;

const GUILD_ROLES = [
  {
    role: "The Architects",
    tag: "STRUCTURAL",
    color: "bg-blue-600",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
  },
  {
    role: "The Alchemists",
    tag: "INTERACTIVE",
    color: "bg-purple-600",
    img: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800"
  },
  {
    role: "The Sentinels",
    tag: "SECURITY",
    color: "bg-red-600",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    role: "The Oracles",
    tag: "DATA / AI",
    color: "bg-emerald-600",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    role: "The Nomads",
    tag: "OPS / CLOUD",
    color: "bg-amber-600",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export const GuildHorizontal: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: "-400vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true,
        anticipatePin: 1
      }
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div id="guild" className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen flex w-[500vw] relative bg-zinc-950">
          {GUILD_ROLES.map((role, idx) => (
            <div key={idx} className="h-screen w-screen flex items-center justify-center p-8 md:p-24 shrink-0">
              <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 overflow-hidden anime-panel group">
                  <img 
                    src={role.img} 
                    alt={role.role}
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className={`px-3 py-1 ${role.color} text-white font-bold mono text-xs skew-x-[-15deg] inline-block mb-4`}>
                    {role.tag}
                  </span>
                  <h3 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mb-6">
                    {role.role}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-24 bg-zinc-800" />
                    <p className="mono text-zinc-500 text-sm">INITIATING CLASS DATA...</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 right-0 text-zinc-800 text-[15vw] font-black italic select-none -z-10 opacity-20">
                  0{idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
