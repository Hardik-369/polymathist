
import React, { useEffect, useRef } from 'react';

declare const gsap: any;

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out'
    });

    // Logo Animation: Rotating inner core and pulsing rings
    if (logoRef.current) {
      gsap.to(logoRef.current.querySelector('.core'), {
        rotate: 360,
        transformOrigin: "center",
        duration: 8,
        repeat: -1,
        ease: "none"
      });
      gsap.to(logoRef.current.querySelector('.ring'), {
        rotate: -360,
        transformOrigin: "center",
        duration: 12,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: `#${targetId}`,
        autoKill: true
      },
      ease: "power4.inOut"
    });
  };

  const navItems = [
    { name: 'Guild', id: 'guild' },
    { name: 'Lab', id: 'lab' },
    { name: 'Chronology', id: 'chronology' },
    { name: 'Command', id: 'command' },
    { name: 'Arena', id: 'arena' },
    { name: 'Archive', id: 'archive' },
    { name: 'Nexus', id: 'nexus' }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-zinc-950/20 backdrop-blur-xl border-b border-white/5">
      <div 
        className="flex items-center gap-4 group cursor-pointer"
        onClick={() => gsap.to(window, { duration: 2, scrollTo: 0, ease: "power4.inOut" })}
      >
        <svg ref={logoRef} width="44" height="44" viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-800 ring" strokeDasharray="10 5" />
          <rect x="30" y="30" width="40" height="40" className="text-indigo-500 core" fill="currentColor" rx="2" />
          <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="white" strokeWidth="2" className="animate-pulse" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tighter uppercase italic text-white group-hover:text-indigo-400 transition-colors">Polymathist</span>
          <span className="text-[8px] mono text-zinc-500 font-bold tracking-[0.3em] uppercase">Advanced Dev Syndicate</span>
        </div>
      </div>
      
      <div className="hidden xl:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] mono italic text-zinc-400">
        {navItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            onClick={(e) => handleNavClick(e, item.id)}
            className="relative hover:text-white transition-colors group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:block h-8 w-px bg-zinc-800"></div>
        <button className="relative px-8 py-2 overflow-hidden group">
          <div className="absolute inset-0 bg-white skew-x-[-15deg] group-hover:bg-indigo-500 transition-colors duration-300"></div>
          <span className="relative z-10 text-zinc-950 group-hover:text-white font-black text-xs uppercase tracking-tighter mono">
            Init_Session
          </span>
        </button>
      </div>
    </nav>
  );
};