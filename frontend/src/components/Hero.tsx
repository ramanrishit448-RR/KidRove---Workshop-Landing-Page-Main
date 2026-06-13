import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Sparkles, Play, Zap } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';
import FloatingDecor from '@/components/ui/FloatingDecor';

const SplineScene = lazy(() =>
  import('@/components/ui/splite').then((module) => ({ default: module.SplineScene }))
);

function SplineFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-400 animate-spin" />
        <span className="text-purple-300 text-xs font-medium tracking-wider">Loading 3D scene…</span>
      </div>
    </div>
  );
}

interface HeroProps {
  onEnrollClick: () => void;
  onExploreClick: () => void;
}

const funPills = ['🎮 Game-Based Learning', '🤖 Build Real Robots', '🏆 Earn a Certificate', '🌟 Zero Experience Needed'];

export default function Hero({ onEnrollClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-kidrove-bg dark:from-slate-950 dark:via-slate-900 dark:to-kidrove-bg transition-colors duration-300">
      <FloatingDecor />

      {/* Decorative Floating Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[-10%] w-[35%] h-[35%] rounded-full bg-purple-200/40 dark:bg-purple-900/20 blur-3xl -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-100/40 dark:bg-pink-900/15 blur-3xl -z-10"
      />

      {/* Scrolling fun pills marquee */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden opacity-60 dark:opacity-40 hidden sm:block" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {[...funPills, ...funPills].map((pill, i) => (
            <span key={i} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-800/60 border border-purple-100 dark:border-purple-800/40 text-sm font-bold text-kidrove-purple shadow-sm">
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left Text Content ── */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
              className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50 px-4 py-2 rounded-full text-kidrove-purple font-bold text-sm mb-6 shadow-sm"
            >
              <Bot className="w-4 h-4 text-kidrove-purple animate-bounce-slow" />
              <span>Summer 2026 · Ages 8–14 · Limited Seats</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 90 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-kidrove-text-dark leading-[1.1] mb-6"
            >
              Where Kids Become{' '}
              <span className="bg-gradient-to-r from-kidrove-purple via-purple-600 to-kidrove-pink bg-clip-text text-transparent animate-rainbow-shift bg-[length:200%_auto]">
                Tech Superheroes
              </span>
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-kidrove-text-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              The ultimate 4-week AI & Robotics adventure! Your child will code games, train smart machines,
              and build virtual robots — all through fun, hands-on projects that feel like play, not homework.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                onClick={onEnrollClick}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-gradient-to-r from-kidrove-purple via-purple-600 to-kidrove-purple-dark text-white px-8 py-4 rounded-full font-extrabold text-base shadow-xl shadow-purple-200/50 dark:shadow-purple-900/30 hover:shadow-purple-300/80 transition-all flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <Zap className="w-5 h-5 group-hover:animate-wiggle" />
                <span>Grab Your Spot — ₹2,999</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={onExploreClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-purple-150 dark:border-purple-800/50 text-kidrove-purple px-8 py-4 rounded-full font-bold text-base shadow-md hover:bg-purple-50/50 dark:hover:bg-slate-700 hover:border-purple-200 dark:hover:border-purple-700 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-kidrove-purple text-kidrove-purple" />
                <span>See What's Inside</span>
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-purple-100 dark:border-purple-900/50 flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-sm text-kidrove-text-muted"
            >
              {[
                { icon: '🎓', text: 'Verified Certificate' },
                { icon: '👨‍🏫', text: 'Live Expert Mentors' },
                { icon: '🎯', text: '15 Kids Max Per Batch' },
                { icon: '📹', text: 'Class Recordings' },
              ].map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center space-x-2 bg-white/60 dark:bg-slate-800/40 px-3 py-1.5 rounded-full border border-purple-50 dark:border-slate-700/50"
                >
                  <span className="text-base">{badge.icon}</span>
                  <span className="font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Spline 3D Scene ── */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring', stiffness: 80 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full"
            >
              {/* Floating sparkle badges around 3D scene */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-2 z-30 text-2xl"
              >
                ⭐
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 -left-4 z-30 text-3xl"
              >
                🤖
              </motion.div>

              <div className="relative w-full h-[480px] rounded-3xl overflow-hidden border-2 border-purple-300/50 dark:border-purple-700/50 shadow-2xl shadow-purple-300/20 dark:shadow-purple-900/30 bg-black">
                <Spotlight
                  className="-top-40 left-0 md:left-40 md:-top-20"
                  fill="white"
                />

                <Suspense fallback={<SplineFallback />}>
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </Suspense>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between z-20 pointer-events-none">
                  <div>
                    <p className="text-white/90 font-display font-bold text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-300 animate-twinkle" />
                      Interactive 3D Robot Lab
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">Drag to explore · Kids love this!</p>
                  </div>
                  <div className="pointer-events-auto flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white/70 text-xs font-medium">Live</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
