export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white section-saas border-t border-[#2f2f2f]">
      <div className="container-saas">
        
        {/* Statement */}
        <div className="max-w-[800px] mb-16">
          <div className="tag-mint mb-6">DAYOS AI SHOWROOM</div>
          <h2
            className="font-condensed-display text-white font-bold tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            AI FOR BUSINESS & FUTURE THINKERS.
          </h2>
        </div>

        {/* Footer nav & meta */}
        <div className="pt-8 border-t border-[#2f2f2f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono-tag text-[#979797]">
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
