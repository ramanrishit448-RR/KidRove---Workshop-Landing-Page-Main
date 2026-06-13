import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  badgeEmoji?: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "center" | "left";
  accent?: "purple" | "pink";
}

export default function SectionHeader({
  badge,
  badgeEmoji,
  title,
  highlight,
  description,
  align = "center",
  accent = "purple",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const accentFrom = accent === "pink" ? "from-kidrove-pink" : "from-kidrove-purple";
  const accentTo = accent === "pink" ? "to-kidrove-purple" : "to-kidrove-pink";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 90, damping: 14 }}
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} mb-16`}
    >
      <motion.span
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className={`inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest ${
          accent === "pink" ? "text-kidrove-pink" : "text-kidrove-purple"
        } mb-3`}
      >
        {badgeEmoji && <span className="text-base animate-wiggle">{badgeEmoji}</span>}
        {badge}
      </motion.span>

      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-kidrove-text-dark mb-4 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-kidrove-purple via-purple-500 to-kidrove-pink bg-clip-text text-transparent animate-rainbow-shift bg-[length:200%_auto]">
            {highlight}
          </span>
        )}
      </h2>

      <p className={`text-lg text-kidrove-text-muted ${isCenter ? "" : "max-w-2xl"}`}>
        {description}
      </p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className={`w-24 h-1.5 bg-gradient-to-r ${accentFrom} ${accentTo} ${isCenter ? "mx-auto" : ""} mt-4 rounded-full origin-left`}
      />
    </motion.div>
  );
}
