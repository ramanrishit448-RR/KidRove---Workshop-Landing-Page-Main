import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, Sun, Moon, Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface NavbarProps {
  onEnrollClick: () => void;
}

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinkClass =
    "text-kidrove-text-muted hover:text-kidrove-purple dark:hover:text-kidrove-purple-light font-medium text-sm transition-colors cursor-pointer";

  const themeToggleClass =
    "p-2.5 rounded-full text-kidrove-text-muted hover:text-kidrove-purple dark:hover:text-kidrove-purple-light hover:bg-purple-50 dark:hover:bg-white/10 transition-all cursor-pointer";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md dark:shadow-slate-950/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-gradient-to-tr from-kidrove-purple to-kidrove-pink p-2 rounded-xl text-white shadow-md shadow-purple-200 dark:shadow-purple-900/40 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Sparkles className="w-6 h-6 animate-pulse-slow" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight">
              <span className="text-kidrove-purple">Kids</span>
              <span className="text-kidrove-pink"> Lab</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("details")} className={navLinkClass}>
              Details
            </button>
            <button onClick={() => scrollToSection("outcomes")} className={navLinkClass}>
              Outcomes
            </button>
            <button onClick={() => scrollToSection("faqs")} className={navLinkClass}>
              FAQs
            </button>

            <button
              onClick={toggleTheme}
              className={themeToggleClass}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <motion.button
              onClick={onEnrollClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-kidrove-purple to-kidrove-pink text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-purple-100 dark:shadow-purple-900/30 hover:shadow-purple-200 dark:hover:shadow-purple-800/40 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4" />
              Enroll Now
            </motion.button>
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className={themeToggleClass}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-kidrove-text-dark dark:text-kidrove-text-dark p-2 hover:bg-purple-50 dark:hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-purple-50 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-lg dark:shadow-slate-950/50 overflow-hidden"
        >
          <button
            onClick={() => scrollToSection("details")}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-kidrove-text-muted hover:bg-purple-50 dark:hover:bg-white/5 hover:text-kidrove-purple transition-colors cursor-pointer"
          >
            Details
          </button>
          <button
            onClick={() => scrollToSection("outcomes")}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-kidrove-text-muted hover:bg-purple-50 dark:hover:bg-white/5 hover:text-kidrove-purple transition-colors cursor-pointer"
          >
            Outcomes
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-kidrove-text-muted hover:bg-purple-50 dark:hover:bg-white/5 hover:text-kidrove-purple transition-colors cursor-pointer"
          >
            FAQs
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onEnrollClick();
            }}
            className="block w-full text-center bg-gradient-to-r from-kidrove-purple to-kidrove-pink text-white py-3 rounded-full font-bold shadow-lg shadow-purple-100 dark:shadow-purple-900/30 cursor-pointer"
          >
            Enroll Now
          </button>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
