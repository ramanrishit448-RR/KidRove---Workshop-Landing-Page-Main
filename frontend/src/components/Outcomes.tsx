import { motion } from 'framer-motion';
import { Cpu, Code, BrainCircuit, Lightbulb, Award, Star } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-purple-600" />,
      title: 'Master Core AI Concepts',
      emoji: '🧠',
      desc: 'Discover how machines "think" — train AI to recognize faces, play games, and solve puzzles through kid-friendly experiments.',
      badgeColor: 'bg-purple-100 dark:bg-purple-900/50',
    },
    {
      icon: <Cpu className="w-6 h-6 text-pink-600" />,
      title: 'Hands-on Robotics Simulators',
      emoji: '🦾',
      desc: 'Design, code & test virtual robots in 3D! Control sensors, motors, and arms — just like a real engineer.',
      badgeColor: 'bg-pink-100 dark:bg-pink-900/50',
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-600" />,
      title: 'Coding Superpowers',
      emoji: '⌨️',
      desc: 'Start with fun Scratch blocks, then level up to real Python — building confidence one project at a time.',
      badgeColor: 'bg-indigo-100 dark:bg-indigo-900/50',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      title: 'Creative Problem-Solving',
      emoji: '💡',
      desc: 'Learn to debug like a pro, plan step-by-step, and turn big ideas into working code — skills for life!',
      badgeColor: 'bg-amber-100 dark:bg-amber-900/50',
    },
    {
      icon: <Award className="w-6 h-6 text-rose-600" />,
      title: 'Capstone Project & Certificate',
      emoji: '🏅',
      desc: 'Showcase a unique AI/Robot project at the final exhibition and earn a Kidrove Certificate of Excellence!',
      badgeColor: 'bg-rose-100 dark:bg-rose-900/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 14 },
    },
  };

  return (
    <section id="outcomes" className="py-20 bg-gradient-to-b from-kidrove-bg to-white dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-50px] w-64 h-64 bg-indigo-50/70 dark:bg-indigo-900/20 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7">
            <SectionHeader
              badge="Learning Journey"
              badgeEmoji="🎯"
              title="Skills Your Child Will"
              highlight="Unlock"
              description="From curious beginner to confident creator — our step-by-step curriculum turns screen time into skill-building adventure time."
              align="left"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-5"
            >
              {outcomes.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.01 }}
                  className="flex items-start space-x-4 p-4 rounded-2xl border border-purple-50 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, 0], scale: 1.1 }}
                    className={`p-3 rounded-xl ${item.badgeColor} shrink-0 relative`}
                  >
                    {item.icon}
                    <span className="absolute -top-2 -right-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.emoji}
                    </span>
                  </motion.div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-kidrove-text-dark flex items-center gap-2">
                      <span>{item.title}</span>
                      {index === 4 && (
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-full font-bold"
                        >
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1" />
                          Bonus!
                        </motion.span>
                      )}
                    </h3>
                    <p className="text-sm text-kidrove-text-muted mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 12 }}
              whileHover={{ rotate: -2, scale: 1.02 }}
              className="w-full max-w-[400px] bg-gradient-to-tr from-kidrove-purple to-indigo-700 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-[-20%] left-[-20%] w-60 h-60 bg-pink-500/20 rounded-full blur-2xl" />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-6 text-3xl"
              >
                🎮
              </motion.div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="bg-white/15 px-3 py-1.5 rounded-full text-xs font-bold w-fit mb-6 border border-white/20 uppercase tracking-widest">
                    Peek Inside a Class
                  </div>
                  <h3 className="font-display font-extrabold text-2xl mb-2 leading-tight">
                    Learn by Building, Not Watching
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed mb-6">
                    Every session is a mini adventure — kids write real code, run virtual sensors, and see their robots come alive on screen!
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-purple-200">🤖 Robot Control Script</span>
                    <motion.span
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2.5 h-2.5 rounded-full bg-green-400"
                    />
                  </div>
                  <div className="font-mono text-xs text-purple-100 space-y-1.5">
                    <div><span className="text-yellow-300">import</span> kidrove_robot <span className="text-yellow-300">as</span> bot</div>
                    <div>&nbsp;</div>
                    <div><span className="text-pink-300"># Start sensor checking</span></div>
                    <div>bot.initialize_sonar()</div>
                    <div>&nbsp;</div>
                    <div><span className="text-yellow-300">while</span> bot.obstacle_distance &gt; <span className="text-emerald-300">10</span>:</div>
                    <div className="pl-4">bot.move_forward(speed=<span className="text-emerald-300">50</span>)</div>
                    <div>bot.turn_right(angle=<span className="text-emerald-300">90</span>)</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center space-x-3 text-sm">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-white/10 p-2 rounded-full"
                  >
                    <Award className="w-5 h-5 text-amber-300" />
                  </motion.div>
                  <span className="font-medium">100% of students ship a final project! 🎉</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
