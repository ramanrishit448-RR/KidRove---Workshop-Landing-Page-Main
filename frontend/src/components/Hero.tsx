import ConstellationCanvas from './ConstellationCanvas';

interface HeroProps {
  onEnrollClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onEnrollClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-[#000000] pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Typographic composition */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          
          {/* Amber Tag */}
          <div className="label-amber flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ffb829]"></span>
            SUMMER 2026 • AGES 8–14 • LIMITED SEATS
          </div>

          {/* Outsized Left-aligned Display Headline */}
          <h1 className="text-display-dala text-white tracking-[-0.04em] font-normal leading-[1.05] max-w-[780px]">
            Where Kids Become Tech Superheroes.
          </h1>

          {/* Signature 18px Weight 200 Ultra-Light Body Copy */}
          <p className="text-body-light text-white max-w-[500px]">
            The ultimate 4-week AI & Robotics adventure! Your child will code games, train smart machines, and build virtual robots — all through hands-on projects that feel like play, not homework.
          </p>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <button
              onClick={onEnrollClick}
              className="btn-electric-iris"
            >
              ENROLL NOW — ₹2,999
            </button>
            <button
              onClick={onExploreClick}
              className="text-[#9a9a9a] hover:text-white text-[14px] font-normal uppercase tracking-[0.025em] transition-colors cursor-pointer bg-transparent border-none py-3"
            >
              SEE WHAT'S INSIDE →
            </button>
          </div>

          {/* Trust badges */}
          <div className="pt-8 flex flex-wrap gap-4 text-[13px] uppercase text-[#9a9a9a] tracking-[0.025em]">
            <span>🎓 Verified Certificate</span>
            <span>•</span>
            <span>👨‍🏫 Live Expert Mentors</span>
            <span>•</span>
            <span>🎯 Max 15 Kids Per Batch</span>
          </div>

        </div>

        {/* Right Column: Signature Hero Constellation Particle Visual */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <ConstellationCanvas />
        </div>
      </div>
    </section>
  );
}
