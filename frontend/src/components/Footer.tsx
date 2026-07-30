export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-16 px-6 md:px-12 border-t border-[#2f2f2f]">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* Massive Condensed Headline Footer Statement */}
        <div className="space-y-4 max-w-[800px]">
          <div className="tag-mint">
            DAYOS AI SHOWROOM
          </div>
          <h2 className="font-condensed-display text-[48px] sm:text-[64px] leading-[0.9] text-white font-bold tracking-tight">
            AI FOR BUSINESS & FUTURE THINKERS.
          </h2>
        </div>

        {/* Footer Navigation & Monospace Meta */}
        <div className="pt-8 border-t border-[#2f2f2f] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[12px] text-[#979797]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-[14px]">DAYOS LAB</span>
            <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[#d1ffca]">
            <a href="#details" className="hover:text-white transition-colors">01 // SNAPSHOT</a>
            <a href="#outcomes" className="hover:text-white transition-colors">02 // CURRICULUM</a>
            <a href="#faqs" className="hover:text-white transition-colors">03 // FAQS</a>
            <a href="#register" className="hover:text-white transition-colors">04 // ENROLL</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
