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
    <header className="fixed top-0 left-0 right-0 z-50 h-[8rem] flex items-center justify-center px-4 pointer-events-none">
      
      {/* Floating 48px Nav Pill Container */}
      <nav className={`pointer-events-auto max-w-[1200px] w-full flex items-center justify-between px-6 py-3 rounded-[48px] bg-[#ffffff] transition-all duration-300 ${
        isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-[#ffffff]" : "shadow-none"
      }`}>
        
        {/* Brand Mark Lockup */}
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
          <span className="font-condensed-display text-[24px] font-bold tracking-tight text-[#000000] uppercase">
            DAYOS AI
          </span>
        </a>

        {/* Center Links with Monospace Indicators */}
        <div className="hidden md:flex items-center space-x-8 text-[16px] font-medium text-[#444444]">
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

        {/* Action Button: Filled Black CTA */}
        <div>
          <button
            onClick={onRequestAccess}
            className="btn-dark-filled text-[15px] py-2.5 px-5"
          >
            <span>ENROLL NOW</span>
            <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
          </button>
        </div>

      </nav>
    </header>
  );
}
