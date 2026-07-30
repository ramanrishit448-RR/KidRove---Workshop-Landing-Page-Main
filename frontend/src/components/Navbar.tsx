import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onRequestAccess: () => void;
  onNavigate?: (id: string) => void;
}

export default function Navbar({ onRequestAccess, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
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
    <>
      <header className="sticky top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 md:px-8 bg-[#e5e5e5]/85 backdrop-blur-md transition-all duration-300">
        
        {/* Centered 1280px Max-Width Navbar Pill */}
        <nav className={`max-w-[1280px] mx-auto flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-[48px] bg-[#ffffff] transition-all duration-300 border border-black/5 ${
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
            <span className="font-condensed-display text-[20px] sm:text-[22px] font-bold tracking-tight text-[#000000] uppercase">
              DAYOS AI
            </span>
          </a>

          {/* Desktop Center Nav Links */}
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

          {/* Desktop Aligned Right CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onRequestAccess}
              className="btn-dark-filled text-[13px] py-2 px-4 rounded-[6px]"
            >
              <span>ENROLL NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button (44x44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-11 h-11 rounded-full bg-[#f3f3f3] flex items-center justify-center text-[#000000] border border-black/5 cursor-pointer touch-action-manipulation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </nav>
      </header>

      {/* Premium Mobile Menu Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-[#ffffff] rounded-[24px] border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.15)] p-6 space-y-6"
          >
            <div className="flex flex-col space-y-4 text-[16px] font-medium text-[#000000]">
              <button
                onClick={() => handleNavClick('details')}
                className="flex items-center justify-between p-3 rounded-[12px] bg-[#f9faf7] text-left cursor-pointer border-none"
              >
                <span>01 // SNAPSHOT</span>
                <ArrowUpRight className="w-4 h-4 text-[#979797]" />
              </button>
              <button
                onClick={() => handleNavClick('outcomes')}
                className="flex items-center justify-between p-3 rounded-[12px] bg-[#f9faf7] text-left cursor-pointer border-none"
              >
                <span>02 // CURRICULUM</span>
                <ArrowUpRight className="w-4 h-4 text-[#979797]" />
              </button>
              <button
                onClick={() => handleNavClick('faqs')}
                className="flex items-center justify-between p-3 rounded-[12px] bg-[#f9faf7] text-left cursor-pointer border-none"
              >
                <span>03 // FAQS</span>
                <ArrowUpRight className="w-4 h-4 text-[#979797]" />
              </button>
            </div>

            <div className="pt-2 border-t border-[#f3f3f3]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestAccess();
                }}
                className="btn-dark-filled w-full justify-center text-[15px] py-3.5"
              >
                <span>ENROLL NOW — ₹2,999</span>
                <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
