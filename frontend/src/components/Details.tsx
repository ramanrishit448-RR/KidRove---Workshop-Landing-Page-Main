import { motion } from 'framer-motion';
import { Users, Calendar, Globe, IndianRupee, Rocket } from 'lucide-react';

export default function Details() {
  const detailsData = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      label: 'Age Group',
      value: '8–14 Years',
      description: 'Curriculum customized for beginners & intermediate kids.',
      bgColor: 'bg-indigo-50 border-indigo-100 hover:shadow-indigo-100',
      tagColor: 'bg-indigo-100 text-indigo-800',
    },
    {
      icon: <Calendar className="w-8 h-8 text-pink-600" />,
      label: 'Duration',
      value: '4 Weeks',
      description: '8 highly interactive live classes, project review, & support.',
      bgColor: 'bg-pink-50 border-pink-100 hover:shadow-pink-100',
      tagColor: 'bg-pink-100 text-pink-800',
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      label: 'Learning Mode',
      value: '100% Online',
      description: 'Live interactive classes, quizzes, and digital simulators.',
      bgColor: 'bg-purple-50 border-purple-100 hover:shadow-purple-100',
      tagColor: 'bg-purple-100 text-purple-800',
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-amber-600" />,
      label: 'Program Fee',
      value: '₹2,999',
      description: 'All-inclusive price. Full access to simulators, certificates & notes.',
      bgColor: 'bg-amber-50 border-amber-100 hover:shadow-amber-100',
      tagColor: 'bg-amber-100 text-amber-800',
    },
    {
      icon: <Rocket className="w-8 h-8 text-rose-600" />,
      label: 'Start Date',
      value: '15 July 2026',
      description: 'Reserve your spot today. Batch size limited to 15 kids per mentor.',
      bgColor: 'bg-rose-50 border-rose-100 hover:shadow-rose-100',
      tagColor: 'bg-rose-100 text-rose-800',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="details" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-kidrove-text-dark mb-4">
            Workshop Quick Overview
          </h2>
          <p className="text-lg text-kidrove-text-muted">
            Everything you need to know about the AI & Robotics Summer Workshop program at a glance.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-kidrove-purple to-kidrove-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
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
              whileHover={{ y: -6, scale: 1.03 }}
              className={`flex flex-col p-6 rounded-3xl border bg-white dark:bg-slate-800/60 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 ${item.bgColor} ${
                index === 3 || index === 4 ? 'md:col-span-1' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex p-3 bg-white dark:bg-slate-700/50 rounded-2xl shadow-sm w-fit">
                {item.icon}
              </div>

              {/* Label */}
              <span className="text-xs font-bold uppercase tracking-wider text-kidrove-text-muted mb-1">
                {item.label}
              </span>

              {/* Value */}
              <h3 className="font-display font-extrabold text-2xl text-kidrove-text-dark mb-2">
                {item.value}
              </h3>

              {/* Description */}
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
