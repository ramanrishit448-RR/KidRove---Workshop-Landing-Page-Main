import ThreeHeroCanvas from './ThreeHeroCanvas';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onEnrollClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onEnrollClick, onExploreClick }: HeroProps) {
  return (
    <section className="section-saas bg-[#e5e5e5] overflow-hidden">
      <div className="container-saas grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Headline & Content (6 Cols Desktop) */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 md:space-y-8">
          
          {/* Mint Tag Pill */}
          <div className="tag-mint">
            <span>●</span>
            <span>SUMMER LABORATORY 2026 • AGES 8–14</span>
          </div>

          {/* Compressed Condensed Display Headline */}
          <h1 className="text-display-xl-condensed max-w-[620px]">
            WHERE KIDS BECOME TECH SUPERHEROES.
          </h1>

          {/* Body Copy with Comfortable 1.6 Line-Height */}
          <p className="text-[16px] leading-[1.6] text-[#444444] font-normal max-w-[500px]">
            The ultimate 4-week AI & Robotics adventure. Your child will code games, train smart machines, and build virtual 3D robots — tactile learning that feels like play, not homework.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
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

          {/* System Metadata Row with Equal Spacing */}
          <div className="pt-6 border-t border-[#c6c6c6] w-full max-w-[500px] flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#979797]">
            <span>[VERIFIED CERTIFICATE]</span>
            <span>[15 KIDS MAX]</span>
            <span>[LIVE MENTORS]</span>
          </div>

        </div>

        {/* Right Column: Three.js Interactive 3D Tactile Render Canvas (6 Cols Desktop) */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center">
          <ThreeHeroCanvas />
        </div>

      </div>
    </section>
  );
}
