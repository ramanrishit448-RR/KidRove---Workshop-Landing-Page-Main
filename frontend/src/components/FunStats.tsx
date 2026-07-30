import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { Star, Users, Trophy, Heart } from "lucide-react";

interface StatItem {
  icon: ReactNode;
  value: number;
  suffix: string;
  label: string;
  monoTag: string;
}

const stats: StatItem[] = [
  {
    icon: <Users className="w-5 h-5 text-[#000000]" />,
    value: 500,
    suffix: "+",
    label: "Young Innovators Taught",
    monoTag: "METRIC 01",
  },
  {
    icon: <Trophy className="w-5 h-5 text-[#000000]" />,
    value: 1200,
    suffix: "+",
    label: "Projects Built by Kids",
    monoTag: "METRIC 02",
  },
  {
    icon: <Star className="w-5 h-5 text-[#000000]" />,
    value: 4.9,
    suffix: "★",
    label: "Parent Satisfaction Rating",
    monoTag: "METRIC 03",
  },
  {
    icon: <Heart className="w-5 h-5 text-[#000000]" />,
    value: 15,
    suffix: "",
    label: "Kids Per Mentor (Max)",
    monoTag: "METRIC 04",
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
    <section className="py-24 md:py-36 bg-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="tag-mint font-mono-tag">
            COMMUNITY & SYSTEM METRICS
          </span>
          <span className="font-mono-tag text-[#979797]">02 // AUDITED DATA</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-flat-white p-8 sm:p-10 flex flex-col justify-between space-y-6 min-h-[240px]"
            >
              <div className="flex items-center justify-between border-b border-[#f3f3f3] pb-4">
                <span className="font-mono-tag text-[#979797]">{stat.monoTag}</span>
                <div className="p-2.5 rounded-[10px] bg-[#f3f3f3]">
                  {stat.icon}
                </div>
              </div>

              {/* 80px Condensed Display Headline Number with Fluid Scaling */}
              <div className="text-display-lg-condensed text-[#000000] font-bold tracking-tight">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.value % 1 !== 0}
                />
              </div>

              <div className="text-[15px] font-medium text-[#444444]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
