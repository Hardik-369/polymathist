
import React, { useLayoutEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { GuildHorizontal } from './components/GuildHorizontal';
import { TechLore } from './components/TechLore';
import { Arena } from './components/Arena';
import { Archive } from './components/Archive';
import { Nexus } from './components/Nexus';
import { CTA } from './components/CTA';
import { Navbar } from './components/Navbar';
import { Laboratory } from './components/Laboratory';
import { HUD } from './components/HUD';
import { Chronology } from './components/Chronology';
import { Command } from './components/Command';
import { Vault } from './components/Vault';
import { Transmission } from './components/Transmission';
import { Synthesis } from './components/Synthesis';

// Type definitions for GSAP globally available via CDN
declare const gsap: any;
declare const ScrollTrigger: any;

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Smooth page entry
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 2,
      ease: 'power4.out'
    });

    // CRITICAL: Refresh all ScrollTriggers after initial layout is rendered
    // This solves issues where pinned sections offset later triggers.
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-zinc-950 text-zinc-50 overflow-x-hidden">
      <Navbar />
      
      {/* 15 Unique Sections Integrated into a Narrative Flow */}
      <Hero />             {/* Section 1: The Awakening */}
      <Manifesto />        {/* Section 2: The Core Beliefs */}
      <GuildHorizontal />  {/* Section 3: The Collective Roles (Pinned) */}
      <Laboratory />       {/* Section 4: Experimental Showcase (Pinned) */}
      <Chronology />       {/* Section 5: Timeline of the Syndicate */}
      <TechLore />         {/* Section 6: The Manga-Grid Tech Stack */}
      <Command />          {/* Section 7: The Bento-Team Dashboard */}
      <HUD />              {/* Section 8: Data Visualization */}
      <Vault />            {/* Section 9: Suspended Resource Canisters */}
      <Arena />            {/* Section 10: Interactive Terminal */}
      <Transmission />     {/* Section 11: Cascading News Stream */}
      <Archive />          {/* Section 12: Vertical Project Archive */}
      <Synthesis />        {/* Section 13: Interactive IDE Visualization */}
      <Nexus />            {/* Section 14: Data/Community Network */}
      <CTA />              {/* Section 15: Final Syndicate Sync */}

      <footer className="py-12 px-8 bg-black border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
           <div className="w-8 h-8 bg-indigo-500 rounded-sm rotate-45"></div>
           <span className="text-xl font-black italic tracking-tighter uppercase">Polymathist</span>
        </div>
        <p className="mono text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} POLYMATHIST_SYNDICATE // ALL_SYSTEMS_GO
        </p>
        <div className="flex gap-8 mono text-[10px] font-bold text-zinc-400">
           <a href="#" className="hover:text-white transition-colors">TWITTER_X</a>
           <a href="#" className="hover:text-white transition-colors">GITHUB_REPO</a>
           <a href="#" className="hover:text-white transition-colors">DISCORD_COMM</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
