import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Code, Lightbulb, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CurriculumModule {
  step: string;
  title: string;
  desc: string;
  icon: ReactNode;
  badges: { emoji: string; label: string }[];
  duration: string;
  progress: string;
}

const MODULES: CurriculumModule[] = [
  {
    step: '01',
    title: 'Master Core AI Concepts',
    desc: 'Discover how machines "think" — train smart neural networks to recognize patterns, play games, and solve spatial logic puzzles.',
    icon: <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6" />,
    badges: [
      { emoji: '🤖', label: 'AI Neural Nets' },
      { emoji: '🧠', label: 'Machine Learning' },
    ],
    duration: 'Week 1 • Foundations',
    progress: '20%',
  },
  {
    step: '02',
    title: '3D Robotics Simulators',
    desc: 'Design, code & test virtual robots in 3D physics environments — controlling sonar sensors, motor drives, and mechanical arms.',
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
    badges: [
      { emoji: '🎮', label: '3D Physics Sim' },
      { emoji: '🕹️', label: 'Sensor Systems' },
    ],
    duration: 'Week 2 • Simulation',
    progress: '40%',
  },
  {
    step: '03',
    title: 'Coding Superpowers with Python',
    desc: 'Start with fun visual block logic, then progress smoothly into real Python syntax — building confidence one project at a time.',
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    badges: [
      { emoji: '🐍', label: 'Python Core' },
      { emoji: '🧩', label: 'Visual Blocks' },
    ],
    duration: 'Week 3 • Programming',
    progress: '60%',
  },
  {
    step: '04',
    title: 'Creative Problem-Solving & Logic',
    desc: 'Learn system debugging, algorithmic planning, and software architecture — fundamental cognitive skills for lifelong success.',
    icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
    badges: [
      { emoji: '💡', label: 'System Logic' },
      { emoji: '⚙️', label: 'Algorithmic Thinking' },
    ],
    duration: 'Week 4 • Engineering',
    progress: '80%',
  },
  {
    step: '05',
    title: 'Capstone Project Exhibition',
    desc: 'Author a unique AI/Robot project for the final virtual showcase and earn an official verified Certificate of Excellence.',
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    badges: [
      { emoji: '🏅', label: 'Verified Certificate' },
      { emoji: '🚀', label: 'Live Showcase' },
    ],
    duration: 'Capstone • Graduation',
    progress: '100%',
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="section-saas bg-[#e5e5e5] relative overflow-hidden">
      
      {/* Subtle radial mint gradient + dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(209,255,202,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-[760px] mb-12 md:mb-16"
        >
          <div className="tag-mint">
            <span>●</span>
            <span>LEARNING JOURNEY</span>
          </div>
          <h2 className="text-display-lg-condensed">
            A CURRICULUM DESIGNED FOR WONDER.
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#444444] font-normal">
            Every module builds real technical capability — transforming passive screen time into an active, hands-on creative pursuit.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-0 sm:pl-10 space-y-6 md:space-y-7">
          
          {/* Vertical connecting timeline line */}
          <div className="hidden sm:block absolute left-[14px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-black/10 via-black/15 to-transparent" />

          {MODULES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
              className="relative group"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3, backgroundColor: '#d1ffca' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="hidden sm:flex absolute -left-10 top-10 w-7 h-7 rounded-full bg-white border-2 border-black items-center justify-center z-10"
              >
                <div className="w-2 h-2 rounded-full bg-black" />
              </motion.div>

              {/* Card */}
              <div
                className="relative bg-white border border-black/[0.06] overflow-hidden transition-all duration-300 will-change-transform group-hover:border-[#d1ffca] group-hover:shadow-[0_20px_50px_rgba(209,255,202,0.4),0_4px_12px_rgba(0,0,0,0.04)]"
                style={{
                  borderRadius: 'clamp(20px, 3vw, 28px)',
                  padding: 'clamp(24px, 3.5vw, 40px)',
                }}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent transition-all duration-300 group-hover:w-1.5 group-hover:bg-[#d1ffca]" style={{ borderRadius: 'clamp(20px, 3vw, 28px) 0 0 clamp(20px, 3vw, 28px)' }} />

                {/* Ambient glow */}
                <div className="absolute -inset-4 rounded-[36px] bg-[#d1ffca]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left column: icon, meta, title, description */}
                  <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                    
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Icon circle */}
                      <motion.div
                        whileHover={{ rotate: 6, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f3f3f3] border border-black/5 flex items-center justify-center shrink-0 text-black shadow-sm"
                      >
                        {item.icon}
                      </motion.div>

                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="font-mono text-[11px] sm:text-[12px] text-[#979797] uppercase">
                            MODULE {item.step} • {item.duration}
                          </span>
                          {/* Progress pill */}
                          <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#f3f3f3] font-mono text-[10px] sm:text-[11px] text-black font-medium border border-black/5">
                            <CheckCircle2 className="w-3 h-3" />
                            {item.progress}
                          </span>
                        </div>

                        <h3
                          className="font-condensed-display font-bold text-black leading-tight"
                          style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[14px] sm:text-[16px] leading-[1.65] text-[#444444] font-normal pl-0 sm:pl-[60px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right column: badges + explore link */}
                  <div className="lg:col-span-4 flex flex-wrap lg:flex-col items-start lg:items-end justify-between gap-3 sm:gap-4 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#f3f3f3]">
                    
                    <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                      {item.badges.map((badge, bIdx) => (
                        <motion.div
                          key={bIdx}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + bIdx * 0.08 }}
                          whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#d1ffca] text-black text-[12px] sm:text-[13px] font-medium border border-black/8 flex items-center gap-1.5 sm:gap-2 shadow-sm cursor-default"
                        >
                          <span>{badge.emoji}</span>
                          <span>{badge.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="text-[12px] sm:text-[13px] font-mono text-[#979797] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
                      <span>EXPLORE MODULE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
