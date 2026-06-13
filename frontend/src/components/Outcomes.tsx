import { motion } from 'framer-motion';
import { Cpu, Code, BrainCircuit, Lightbulb, Award, Star } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-purple-600" />,
      title: 'Master Core AI Concepts',
      desc: 'Understand how machines "think", learn the basics of machine learning, neural networks, and computer vision through games.',
      badgeColor: 'bg-purple-100',
    },
    {
      icon: <Cpu className="w-6 h-6 text-pink-600" />,
      title: 'Hands-on Robotics Simulators',
      desc: 'Design, code, and test virtual robots using interactive 3D simulation tools. Understand sensory input and motor controls.',
      badgeColor: 'bg-pink-100',
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-600" />,
      title: 'Coding Foundations',
      desc: 'Develop programmatic thinking using block-based Scratch before transitioning to real text-based Python syntaxes.',
      badgeColor: 'bg-indigo-100',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      title: 'Problem-Solving & Logic',
      desc: 'Learn debugging techniques, systematic planning, and algorithmic logic to overcome code errors and logic bugs.',
      badgeColor: 'bg-amber-100',
    },
    {
      icon: <Award className="w-6 h-6 text-rose-600" />,
      title: 'Capstone Project & Certificate',
      desc: 'Build a unique AI/Robotics project to showcase in the final exhibition and receive a Kidrove summer certificate of excellence.',
      badgeColor: 'bg-rose-100',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 12 },
    },
  };

  return (
    <section id="outcomes" className="py-20 bg-gradient-to-b from-kidrove-bg to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-50px] w-64 h-64 bg-indigo-50/70 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text and Timeline */}
          <div className="lg:col-span-7">
            <div className="text-left mb-10">
              <span className="text-sm font-extrabold uppercase tracking-widest text-kidrove-purple">
                Empowering Skills
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-kidrove-text-dark mt-2 mb-4">
                What Will Your Child Learn?
              </h2>
              <p className="text-base text-kidrove-text-muted">
                Our curriculum is designed to guide students step-by-step from technology consumers to digital creators.
              </p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-kidrove-purple to-kidrove-pink mt-4 rounded-full" />
            </div>

            {/* Outcomes Checklist */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-6"
            >
              {outcomes.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-2xl border border-purple-50 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`p-3 rounded-xl ${item.badgeColor} shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-kidrove-text-dark flex items-center gap-2">
                      <span>{item.title}</span>
                      {index === 4 && (
                        <span className="flex items-center text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1" />
                          Bonus
                        </span>
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

          {/* Right Side: Creative Visual Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[400px] bg-gradient-to-tr from-kidrove-purple to-indigo-700 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
            >
              {/* Decorative shapes */}
              <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-[-20%] left-[-20%] w-60 h-60 bg-pink-500/20 rounded-full blur-2xl" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="bg-white/15 px-3 py-1.5 rounded-full text-xs font-bold w-fit mb-6 border border-white/20 uppercase tracking-widest">
                    Sample Student Dashboard
                  </div>
                  <h3 className="font-display font-extrabold text-2xl mb-2 leading-tight">
                    Project-Based Learning
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed mb-6">
                    Students don't just watch videos—they write code to run virtual sensors, control smart arms, and program self-driving robots on custom web simulators.
                  </p>
                </div>

                {/* Dashboard graphic preview */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-purple-200">Robot Control Script</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
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
                  <div className="bg-white/10 p-2 rounded-full">
                    <Award className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="font-medium">100% Student Project Submissions</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
