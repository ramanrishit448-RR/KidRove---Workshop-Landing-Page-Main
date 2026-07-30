import ThreeHeroCanvas from './ThreeHeroCanvas';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onEnrollClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onEnrollClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-[#e5e5e5] pt-36 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Massive Condensed Editorial Typography (50% Width) */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          
          {/* Mint Tag Pill */}
          <div className="tag-mint">
            <span>●</span>
            <span>SUMMER LABORATORY 2026 • AGES 8–14</span>
          </div>

          {/* Compressed Condensed Headline (130px Display Scale, 0.9 Leading, All-Caps) */}
          <h1 className="text-display-xl-condensed max-w-[620px]">
            WHERE KIDS BECOME TECH SUPERHEROES.
          </h1>

          {/* 16px Body Copy */}
          <p className="text-[16px] leading-[1.25] text-[#444444] font-normal max-w-[500px]">
            The ultimate 4-week AI & Robotics adventure. Your child will code games, train smart machines, and build virtual 3D robots — tactile learning that feels like play, not homework.
          </p>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onEnrollClick}
              className="btn-dark-filled"
            >
              <span>GRAB YOUR SPOT — ₹2,999</span>
              <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
            </button>

            <button
              onClick={onExploreClick}
              className="btn-ghost-border"
            >
              MORE DETAILS
            </button>
          </div>

          {/* Monospace System Metadata */}
          <div className="pt-6 border-t border-[#c6c6c6] w-full max-w-[500px] flex items-center justify-between text-[12px] font-mono text-[#979797]">
            <span>[VERIFIED CERTIFICATE]</span>
            <span>[15 KIDS MAX]</span>
            <span>[LIVE MENTORS]</span>
          </div>

        </div>

        {/* Right Column: Three.js Interactive 3D Tactile Render Canvas (50% Width) */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center">
          <ThreeHeroCanvas />
        </div>

      </div>
    </section>
  );
}
