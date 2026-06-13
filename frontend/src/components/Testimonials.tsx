import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const testimonials = [
  {
    name: "Aarav, Age 11",
    role: "Built a line-following robot simulator",
    quote:
      "I never thought I could code a robot! The classes felt like playing a video game — my robot actually dodged obstacles on screen. Best summer ever!",
    emoji: "🤖",
    color: "from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40",
    border: "border-purple-200 dark:border-purple-800/50",
  },
  {
    name: "Priya (Aarav's Mom)",
    role: "Parent from Bangalore",
    quote:
      "My son went from 'I can't do coding' to explaining AI to his grandparents in 3 weeks. The mentors are patient, fun, and genuinely care about every child.",
    emoji: "💜",
    color: "from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40",
    border: "border-pink-200 dark:border-pink-800/50",
  },
  {
    name: "Meera, Age 9",
    role: "Created her first AI game",
    quote:
      "I made a game where the computer guesses what I draw! I showed it to my whole class. Now my friends want to join Kids Lab too!",
    emoji: "🎨",
    color: "from-amber-100 to-yellow-100 dark:from-amber-900/40 dark:to-yellow-900/40",
    border: "border-amber-200 dark:border-amber-800/50",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-kidrove-bg relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/30 dark:bg-pink-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Real Stories"
          badgeEmoji="💬"
          title="Kids & Parents"
          highlight="Love Kids Lab"
          description="Don't just take our word for it — hear from the young innovators and families who've experienced the magic firsthand."
          accent="pink"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40, rotate: index === 1 ? 2 : index === 2 ? -2 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative p-6 rounded-3xl border bg-gradient-to-br ${item.color} ${item.border} shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              <motion.span
                className="absolute -top-3 -right-2 text-4xl"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                {item.emoji}
              </motion.span>

              <Quote className="w-8 h-8 text-kidrove-purple/30 mb-4" />

              <p className="text-sm text-kidrove-text-muted leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kidrove-purple to-kidrove-pink flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-bold text-kidrove-text-dark text-sm">{item.name}</p>
                  <p className="text-xs text-kidrove-text-muted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
