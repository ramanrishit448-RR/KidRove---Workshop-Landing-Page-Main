import ThreeHeroCanvas from './ThreeHeroCanvas';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onEnrollClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onEnrollClick, onExploreClick }: HeroProps) {
  return (
    <section className="section-saas bg-[#e5e5e5] overflow-hidden pt-6 sm:pt-10">
      <div className="container-saas grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column / Mobile Headline First (6 Cols Desktop) */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 md:space-y-8">
          
          {/* Mint Tag Pill */}
          <div className="tag-mint">
            <span>●</span>
            <span>SUMMER LABORATORY 2026 • AGES 8–14</span>
          </div>

          {/* Compressed Condensed Display Headline */}
          <h1 className="text-display-xl-condensed max-w-[640px]">
            WHERE KIDS BECOME TECH SUPERHEROES.
          </h1>

          {/* Body Copy with Comfortable Line-Height */}
          <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#444444] font-normal max-w-[520px]">
            The ultimate 4-week AI & Robotics adventure. Your child will code games, train smart machines, and build virtual 3D robots — tactile learning that feels like play, not homework.
          </p>

          {/* Mobile-First Action Row: Full width on mobile */}
          <div className="w-full sm:w-auto pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onEnrollClick}
              className="btn-dark-filled w-full sm:w-auto"
            >
              <span>GRAB YOUR SPOT — ₹2,999</span>
              <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
            </button>

            <button
              onClick={onExploreClick}
              className="btn-ghost-border w-full sm:w-auto"
            >
              MORE DETAILS
            </button>
          </div>

          {/* System Metadata Row with Equal Spacing */}
          <div className="pt-6 border-t border-[#c6c6c6] w-full max-w-[520px] flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-[12px] font-mono text-[#979797]">
            <span>[VERIFIED CERTIFICATE]</span>
            <span>[15 KIDS MAX]</span>
            <span>[LIVE MENTORS]</span>
          </div>

        </div>

        {/* Right Column / Mobile 3D Illustration Canvas Below (6 Cols Desktop) */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
          <ThreeHeroCanvas />
        </div>

      </div>
    </section>
  );
}
