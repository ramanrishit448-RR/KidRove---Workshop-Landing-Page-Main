import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onRequestAccess: () => void;
  onNavigate?: (id: string) => void;
}

interface NavItem {
  id: string;
  code: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "details", code: "01", label: "SNAPSHOT" },
  { id: "outcomes", code: "02", label: "CURRICULUM" },
  { id: "faqs", code: "03", label: "FAQS" },
];

export default function Navbar({ onRequestAccess, onNavigate }: NavbarProps) {
  const [isCompact, setIsCompact] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("details");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Mouse tracking for logo micro-interaction
  const logoRotate = useMotionValue(0);
  const logoRotateSpring = useSpring(logoRotate, { stiffness: 200, damping: 20 });

  // Scroll handler: compact on scroll down, expand on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;

      if (currentY > 60) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }

      // If scrolling up significantly, expand back
      if (!goingDown && currentY < lastScrollY.current - 30 && currentY > 60) {
        // still compact but hover-expand logic handles the rest
      }

      lastScrollY.current = currentY;

      // Active section detection via offset
      const scrollPos = currentY + 220;
      const sectionIds = ["register", "faqs", "outcomes", "details"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id === "register" ? "faqs" : id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (id: string) => {
      setActiveSection(id);
      setMobileMenuOpen(false);
      if (onNavigate) {
        onNavigate(id);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onNavigate]
  );

  const handleLogoMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const offset = (e.clientX - centerX) / rect.width;
    logoRotate.set(offset * 5);
  };

  const handleLogoMouseLeave = () => {
    logoRotate.set(0);
  };

  // Derived animation states
  const isExpanded = !isCompact || isHovered;

  return (
    <>
      {/* Outer sticky shell — pointer-events none so page content is clickable behind padding */}
      <header className="sticky top-0 left-0 right-0 z-50 pointer-events-none">
        <motion.div
          className="pointer-events-none"
          animate={{
            paddingTop: isCompact ? 8 : 16,
            paddingBottom: isCompact ? 0 : 0,
            paddingLeft: isCompact ? (isHovered ? 80 : 120) : 24,
            paddingRight: isCompact ? (isHovered ? 80 : 120) : 24,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.7 }}
        >
          {/* The Floating Command Center Dock */}
          <motion.nav
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              height: isExpanded ? 72 : 56,
              borderRadius: isCompact ? 9999 : 9999,
              scale: isHovered && isCompact ? 1.02 : 1,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.7 }}
            className={`pointer-events-auto mx-auto flex items-center justify-between px-5 sm:px-7 transition-colors duration-300 border will-change-transform ${
              isCompact
                ? isHovered
                  ? "bg-white/[0.97] border-[#d1ffca]/80 shadow-[0_20px_50px_rgba(209,255,202,0.5),0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
                  : "bg-white/[0.92] border-black/8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                : "bg-white/[0.85] border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-md"
            }`}
            style={{ maxWidth: "100%" }}
          >
            {/* ─── Logo Mark with Cursor Tracking ─── */}
            <motion.a
              href="#"
              onMouseMove={handleLogoMouseMove}
              onMouseLeave={handleLogoMouseLeave}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              style={{ rotate: logoRotateSpring }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 text-[#000000] cursor-pointer select-none"
            >
              <div className="w-8 h-8 rounded-full bg-[#000000] text-[#d1ffca] flex items-center justify-center font-bold text-[14px] shadow-sm">
                D
              </div>
              <motion.span
                animate={{ opacity: isCompact && !isHovered ? 0 : 1, width: isCompact && !isHovered ? 0 : "auto" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="font-condensed-display text-[20px] sm:text-[22px] font-bold tracking-tight text-[#000000] uppercase overflow-hidden whitespace-nowrap"
              >
                DAYOS AI
              </motion.span>
            </motion.a>

            {/* ─── Desktop Center Nav Links with Active Mint Pill ─── */}
            <div className="hidden md:flex items-center relative">
              <motion.div
                className="flex items-center"
                animate={{ gap: isHovered ? 6 : 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-full cursor-pointer bg-transparent border-none flex items-center gap-2 transition-colors duration-200 text-[14px] font-medium ${
                        isActive ? "text-[#000000]" : "text-[#444444] hover:text-[#000000]"
                      }`}
                    >
                      {/* Sliding Active Mint Pill Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="navActivePill"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          className="absolute inset-0 bg-[#d1ffca] rounded-full border border-black/10"
                          style={{ zIndex: 0 }}
                        />
                      )}

                      <span className="relative z-10 font-mono text-[11px] opacity-60">{item.code}</span>
                      <motion.span
                        className="relative z-10 tracking-tight"
                        whileHover={{ letterSpacing: "0.04em" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>

            {/* ─── Right CTA Button with Arrow Slide ─── */}
            <div className="hidden md:flex items-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 24px rgba(209,255,202,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  paddingLeft: isHovered ? 20 : 16,
                  paddingRight: isHovered ? 20 : 16,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                onClick={onRequestAccess}
                className="bg-[#000000] text-white rounded-[8px] py-2.5 text-[13px] font-medium inline-flex items-center gap-2 cursor-pointer border-none shadow-sm will-change-transform"
              >
                <span>ENROLL NOW</span>
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
                </motion.span>
              </motion.button>
            </div>

            {/* ─── Mobile Hamburger (44x44 touch target) ─── */}
            <motion.button
              whileTap={{ scale: 0.88, rotate: -8 }}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-11 h-11 rounded-full bg-[#f3f3f3] flex items-center justify-center text-[#000000] border border-black/5 cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.nav>
        </motion.div>
      </header>

      {/* ─── Premium Mobile Menu Drawer ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="fixed inset-x-4 top-[76px] z-50 md:hidden bg-white rounded-[28px] border border-[#d1ffca]/60 shadow-[0_20px_50px_rgba(209,255,202,0.4),0_8px_24px_rgba(0,0,0,0.1)] p-6 space-y-5"
            >
              <div className="flex flex-col space-y-3">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, type: "spring", stiffness: 300, damping: 24 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between p-4 rounded-[16px] text-left cursor-pointer border-none text-[16px] font-semibold ${
                      activeSection === item.id
                        ? "bg-[#d1ffca] text-[#000000]"
                        : "bg-[#f9faf7] text-[#000000] hover:bg-[#f0f0f0]"
                    }`}
                  >
                    <span>
                      {item.code} // {item.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#000000]" />
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 26 }}
                className="pt-3 border-t border-[#f3f3f3]"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestAccess();
                  }}
                  className="btn-dark-filled w-full justify-center text-[15px] py-3.5 rounded-[14px]"
                >
                  <span>ENROLL NOW — ₹2,999</span>
                  <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
