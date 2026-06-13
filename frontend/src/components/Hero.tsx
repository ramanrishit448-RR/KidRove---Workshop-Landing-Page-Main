import { motion } from 'framer-motion';
import { Bot, ArrowRight, Sparkles, Play } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

interface HeroProps {
  onEnrollClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onEnrollClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-kidrove-bg dark:from-slate-950 dark:via-slate-900 dark:to-kidrove-bg transition-colors duration-300">
      {/* Decorative Floating Blobs */}
      <div className="absolute top-10 left-[-10%] w-[35%] h-[35%] rounded-full bg-purple-200/40 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-100/40 blur-3xl -z-10" />

      {/* Floating Sparkles */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[15%] text-purple-300 hidden md:block"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-24 left-[5%] text-pink-300 hidden md:block"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-[10%] text-amber-300 hidden md:block"
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left Text Content ── */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50 px-4 py-2 rounded-full text-kidrove-purple font-bold text-sm mb-6 shadow-sm"
            >
              <Bot className="w-4 h-4 text-kidrove-purple animate-bounce-slow" />
              <span>Future Innovators Camp 2026</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-kidrove-text-dark leading-[1.1] mb-6"
            >
              AI & Robotics <br />
              <span className="bg-gradient-to-r from-kidrove-purple via-purple-600 to-kidrove-pink bg-clip-text text-transparent">
                Summer Workshop
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-kidrove-text-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Ignite your child's curiosity this summer! A 4-week interactive online program where
              kids code games, train artificial intelligence, and build simulated robots from scratch.
              No prior experience needed!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onEnrollClick}
                className="w-full sm:w-auto bg-gradient-to-r from-kidrove-purple via-purple-600 to-kidrove-purple-dark text-white px-8 py-4 rounded-full font-extrabold text-base shadow-xl shadow-purple-200/50 hover:shadow-purple-300/80 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-purple-150 dark:border-purple-800/50 text-kidrove-purple px-8 py-4 rounded-full font-bold text-base shadow-md hover:bg-purple-50/50 dark:hover:bg-slate-700 hover:border-purple-200 dark:hover:border-purple-700 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-kidrove-purple text-kidrove-purple" />
                <span>Explore Details</span>
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-purple-100 dark:border-purple-900/50 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-kidrove-text-muted"
            >
              <div className="flex items-center space-x-2">
                <span className="text-kidrove-purple font-extrabold">✓</span>
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-kidrove-purple font-extrabold">✓</span>
                <span>Live Mentorship</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-kidrove-purple font-extrabold">✓</span>
                <span>Interactive Projects</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Spline 3D Scene ── */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Outer container: explicit pixel height so canvas gets a real measurement */}
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden border border-purple-900/30 shadow-2xl shadow-purple-300/20 bg-black">
              {/* Spotlight beam */}
              <Spotlight
                className="-top-40 left-0 md:left-40 md:-top-20"
                fill="white"
              />

              {/* Spline takes up the full box */}
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />

              {/* Frosted label at bottom — sits above the canvas via z-index */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between z-20 pointer-events-none">
                <div>
                  <p className="text-white/90 font-display font-bold text-sm">Interactive 3D Preview</p>
                  <p className="text-white/50 text-xs mt-0.5">Drag to explore · Powered by Spline</p>
                </div>
                <div className="pointer-events-auto flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/70 text-xs font-medium">Live</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
