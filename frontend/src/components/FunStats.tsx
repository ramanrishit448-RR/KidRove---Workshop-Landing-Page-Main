import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Users, Trophy, Heart } from "lucide-react";

interface StatItem {
  icon: ReactNode;
  value: number;
  suffix: string;
  label: string;
  emoji: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: <Users className="w-6 h-6" />,
    value: 500,
    suffix: "+",
    label: "Happy Young Innovators",
    emoji: "🧒",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: 1200,
    suffix: "+",
    label: "Projects Built by Kids",
    emoji: "🏆",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: 4.9,
    suffix: "★",
    label: "Parent Satisfaction Rating",
    emoji: "⭐",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    value: 15,
    suffix: "",
    label: "Kids Per Mentor (Max)",
    emoji: "💜",
    color: "from-emerald-400 to-teal-500",
  },
];

function AnimatedNumber({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  const formatted = isDecimal ? display.toFixed(1) : Math.floor(display).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function FunStats() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-kidrove-purple via-purple-600 to-kidrove-pink" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,white_0%,transparent_50%),radial-gradient(circle_at_80%_50%,white_0%,transparent_40%)]" />

      {/* Bouncing dots decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{ left: `${8 + i * 8}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/80 font-bold text-sm uppercase tracking-widest mb-8"
        >
          Trusted by families across India 🌟
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
              className="text-center text-white group"
            >
              <motion.span
                className="text-3xl mb-2 block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
              >
                {stat.emoji}
              </motion.span>

              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg mb-3 group-hover:animate-pop-bounce`}
              >
                {stat.icon}
              </div>

              <p className="font-display font-extrabold text-3xl sm:text-4xl mb-1">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.value % 1 !== 0}
                />
              </p>
              <p className="text-sm text-white/80 font-medium leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
