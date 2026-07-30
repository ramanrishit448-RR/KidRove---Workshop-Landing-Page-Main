import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { Star, Users, Trophy, Heart } from "lucide-react";

interface StatItem {
  icon: ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <Users className="w-6 h-6 text-[#8052ff]" />,
    value: 500,
    suffix: "+",
    label: "Young Innovators Taught",
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#ffb829]" />,
    value: 1200,
    suffix: "+",
    label: "Projects Built by Kids",
  },
  {
    icon: <Star className="w-6 h-6 text-[#15846e]" />,
    value: 4.9,
    suffix: "★",
    label: "Parent Satisfaction Rating",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#8052ff]" />,
    value: 15,
    suffix: "",
    label: "Kids Per Mentor (Max)",
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
    <section className="relative py-20 bg-[#000000] border-t border-b border-[#141414]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-12">
        <div className="label-amber text-center">
          TRUSTED BY FAMILIES WORLDWIDE
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="p-3 rounded-full bg-[#111111] inline-flex items-center justify-center">
                {stat.icon}
              </div>

              {/* Outsized weight-400 headline number */}
              <div className="text-[78px] font-normal leading-none tracking-[-3.12px] text-white font-sans">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.value % 1 !== 0}
                />
              </div>

              <div className="text-body-light text-[#bdbdbd] text-[16px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
