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
        
        {/* Left Column (6 cols desktop) */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 md:gap-8">
          
          <div className="tag-mint">
            <span>●</span>
            <span>SUMMER LABORATORY 2026 • AGES 8–14</span>
          </div>

          <h1 className="text-display-xl-condensed max-w-[640px]">
            WHERE KIDS BECOME TECH SUPERHEROES.
          </h1>

          <p className="text-body max-w-[520px]">
            The ultimate 4-week AI & Robotics adventure. Your child will code games, train smart machines, and build virtual 3D robots — tactile learning that feels like play, not homework.
          </p>

          {/* Action buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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

          {/* Metadata row */}
          <div className="pt-6 border-t border-[#c6c6c6] w-full max-w-[520px] flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-tag text-[#979797]">
            <span>[VERIFIED CERTIFICATE]</span>
            <span>[15 KIDS MAX]</span>
            <span>[LIVE MENTORS]</span>
          </div>

        </div>

        {/* Right Column — 3D Canvas (6 cols desktop) */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[280px] sm:min-h-[400px]">
          <ThreeHeroCanvas />
        </div>

      </div>
    </section>
  );
}
