import { motion } from "framer-motion";

interface FloatingItem {
  emoji: string;
  className: string;
  duration: number;
  delay?: number;
  y?: number;
  rotate?: number;
}

const defaultItems: FloatingItem[] = [
  { emoji: "🚀", className: "top-[12%] left-[4%] text-2xl", duration: 5, delay: 0, y: 18, rotate: 12 },
  { emoji: "🤖", className: "top-[18%] right-[6%] text-3xl", duration: 6, delay: 0.5, y: 22, rotate: -10 },
  { emoji: "⭐", className: "top-[45%] left-[2%] text-xl", duration: 4, delay: 1, y: 14, rotate: 20 },
  { emoji: "🎮", className: "bottom-[30%] right-[4%] text-2xl", duration: 5.5, delay: 0.3, y: 16, rotate: -8 },
  { emoji: "💡", className: "bottom-[18%] left-[8%] text-2xl", duration: 4.5, delay: 0.8, y: 20, rotate: 15 },
  { emoji: "🌈", className: "top-[35%] right-[12%] text-xl hidden md:block", duration: 7, delay: 0.2, y: 12, rotate: -15 },
];

interface FloatingDecorProps {
  items?: FloatingItem[];
  className?: string;
}

export default function FloatingDecor({ items = defaultItems, className = "" }: FloatingDecorProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((item, i) => (
        <motion.span
          key={i}
          className={`absolute select-none opacity-70 dark:opacity-50 ${item.className}`}
          animate={{
            y: [0, -(item.y ?? 15), 0],
            rotate: [0, item.rotate ?? 10, -(item.rotate ?? 10), 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay ?? 0,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
}
