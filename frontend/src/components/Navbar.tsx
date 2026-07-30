import { useState, useEffect } from "react";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 py-6 px-6 md:px-12 ${
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-[#141414]" : "bg-transparent"
    }`}>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        
        {/* Logo Lockup */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <defs>
                <linearGradient id="dalaLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8052ff" />
                  <stop offset="100%" stopColor="#15846e" />
                </linearGradient>
              </defs>
              <polygon points="16,3 30,28 2,28" fill="url(#dalaLogoGrad)" />
            </svg>
          </div>
          <span className="text-[20px] font-normal tracking-tight text-white font-sans">
            Dala Kids
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-[14px] font-semibold uppercase tracking-[0.025em]">
          <button
            onClick={() => handleNavClick('details')}
            className="text-[#9a9a9a] hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            DETAILS
          </button>
          <button
            onClick={() => handleNavClick('outcomes')}
            className="text-[#9a9a9a] hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            OUTCOMES
          </button>
          <button
            onClick={() => handleNavClick('faqs')}
            className="text-[#9a9a9a] hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            FAQS
          </button>
          <button
            onClick={() => handleNavClick('register')}
            className="text-[#9a9a9a] hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            ENROLL
          </button>
        </nav>

        {/* Action Button */}
        <div>
          <button
            onClick={onRequestAccess}
            className="btn-electric-iris"
          >
            ENROLL NOW
          </button>
        </div>
      </div>
    </header>
  );
}
