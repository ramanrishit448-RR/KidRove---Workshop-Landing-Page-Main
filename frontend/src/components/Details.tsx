import { motion } from 'framer-motion';
import { Users, Calendar, Globe, IndianRupee, Rocket } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function Details() {
  const detailsData = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      label: 'Age Group',
      value: '8–14 Years',
      emoji: '🧒',
      description: 'Tailored tracks for curious beginners and budding tech enthusiasts alike.',
      bgColor: 'bg-indigo-50 border-indigo-100 hover:shadow-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-800/40',
    },
    {
      icon: <Calendar className="w-8 h-8 text-pink-600" />,
      label: 'Duration',
      value: '4 Weeks',
      emoji: '📅',
      description: '8 live interactive sessions + project reviews, quizzes & mentor support.',
      bgColor: 'bg-pink-50 border-pink-100 hover:shadow-pink-100 dark:bg-pink-950/30 dark:border-pink-800/40',
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      label: 'Learning Mode',
      value: '100% Online',
      emoji: '💻',
      description: 'Join from anywhere! Live Zoom classes with 3D simulators & digital labs.',
      bgColor: 'bg-purple-50 border-purple-100 hover:shadow-purple-100 dark:bg-purple-950/30 dark:border-purple-800/40',
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-amber-600" />,
      label: 'Program Fee',
      value: '₹2,999',
      emoji: '💰',
      description: 'All-inclusive: simulators, study materials, certificate & recordings.',
      bgColor: 'bg-amber-50 border-amber-100 hover:shadow-amber-100 dark:bg-amber-950/30 dark:border-amber-800/40',
    },
    {
      icon: <Rocket className="w-8 h-8 text-rose-600" />,
      label: 'Start Date',
      value: '15 July 2026',
      emoji: '🚀',
      description: 'Only 15 seats per batch — secure your child\'s spot before it fills up!',
      bgColor: 'bg-rose-50 border-rose-100 hover:shadow-rose-100 dark:bg-rose-950/30 dark:border-rose-800/40',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 14 },
    },
  };

  return (
    <section id="details" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Program Snapshot"
          badgeEmoji="📋"
          title="Everything You Need to"
          highlight="Know at a Glance"
          description="A premium summer experience designed for busy parents and curious kids — flexible, affordable, and packed with real learning outcomes."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center"
        >
          {detailsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.04, rotate: index % 2 === 0 ? 1 : -1 }}
              className={`flex flex-col p-6 rounded-3xl border bg-white dark:bg-slate-800/60 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 ${item.bgColor}`}
            >
              <motion.span
                className="text-2xl mb-2"
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.emoji}
              </motion.span>

              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-flex p-3 bg-white dark:bg-slate-700/50 rounded-2xl shadow-sm w-fit"
              >
                {item.icon}
              </motion.div>

              <span className="text-xs font-bold uppercase tracking-wider text-kidrove-text-muted mb-1">
                {item.label}
              </span>

              <h3 className="font-display font-extrabold text-2xl text-kidrove-text-dark mb-2">
                {item.value}
              </h3>

              <p className="text-sm text-kidrove-text-muted leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
