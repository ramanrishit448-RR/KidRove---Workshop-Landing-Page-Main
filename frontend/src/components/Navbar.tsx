import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onRequestAccess: () => void;
  onNavigate?: (id: string) => void;
}

export default function Navbar({ onRequestAccess, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 bg-[#e5e5e5]/80 backdrop-blur-md transition-all duration-300">
      
      {/* Centered 1280px Max-Width Navbar Pill */}
      <nav className={`max-w-[1280px] mx-auto flex items-center justify-between px-6 py-3 rounded-[48px] bg-[#ffffff] transition-all duration-300 border border-black/5 ${
        isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}>
        
        {/* Brand Mark */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-[#000000] group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-8 rounded-full bg-[#000000] text-[#d1ffca] flex items-center justify-center font-bold text-[14px]">
            D
          </div>
          <span className="font-condensed-display text-[22px] font-bold tracking-tight text-[#000000] uppercase">
            DAYOS AI
          </span>
        </a>

        {/* Center Nav Links with Equal 32px Spacing */}
        <div className="hidden md:flex items-center space-x-8 text-[14px] font-medium text-[#444444]">
          <button
            onClick={() => handleNavClick('details')}
            className="hover:text-[#000000] transition-colors cursor-pointer bg-transparent border-none flex items-center gap-2"
          >
            <span className="font-mono-tag text-[#979797]">01</span>
            <span>SNAPSHOT</span>
          </button>
          <button
            onClick={() => handleNavClick('outcomes')}
            className="hover:text-[#000000] transition-colors cursor-pointer bg-transparent border-none flex items-center gap-2"
          >
            <span className="font-mono-tag text-[#979797]">02</span>
            <span>CURRICULUM</span>
          </button>
          <button
            onClick={() => handleNavClick('faqs')}
            className="hover:text-[#000000] transition-colors cursor-pointer bg-transparent border-none flex items-center gap-2"
          >
            <span className="font-mono-tag text-[#979797]">03</span>
            <span>FAQS</span>
          </button>
        </div>

        {/* Aligned Right CTA Button */}
        <div className="flex items-center">
          <button
            onClick={onRequestAccess}
            className="btn-dark-filled text-[13px] py-2 px-4 rounded-[6px]"
          >
            <span>ENROLL NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
          </button>
        </div>

      </nav>
    </header>
  );
}
