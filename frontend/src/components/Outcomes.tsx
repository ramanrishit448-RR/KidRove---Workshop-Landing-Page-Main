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
  progressPercent: number;
}

export default function Outcomes() {
  const modules: CurriculumModule[] = [
    {
      step: 'MODULE 01',
      title: 'Master Core AI Concepts',
      desc: 'Discover how machines "think" — train smart neural networks to recognize patterns, play games, and solve spatial logic puzzles.',
      icon: <BrainCircuit className="w-6 h-6 text-[#000000] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
      badges: [
        { emoji: '🤖', label: 'AI Neural Nets' },
        { emoji: '🧠', label: 'Machine Learning' },
      ],
      duration: 'Week 1 • Foundations',
      progress: '20% Complete',
      progressPercent: 20,
    },
    {
      step: 'MODULE 02',
      title: '3D Robotics Simulators',
      desc: 'Design, code & test virtual robots in 3D physics environments — controlling sonar sensors, motor drives, and mechanical arms.',
      icon: <Cpu className="w-6 h-6 text-[#000000] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
      badges: [
        { emoji: '🎮', label: '3D Physics Sim' },
        { emoji: '🕹️', label: 'Sensor Systems' },
      ],
      duration: 'Week 2 • Simulation',
      progress: '40% Complete',
      progressPercent: 40,
    },
    {
      step: 'MODULE 03',
      title: 'Coding Superpowers with Python',
      desc: 'Start with fun visual block logic, then progress smoothly into real Python syntax — building confidence one project at a time.',
      icon: <Code className="w-6 h-6 text-[#000000] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
      badges: [
        { emoji: '🐍', label: 'Python Core' },
        { emoji: '🧩', label: 'Visual Blocks' },
      ],
      duration: 'Week 3 • Programming',
      progress: '60% Complete',
      progressPercent: 60,
    },
    {
      step: 'MODULE 04',
      title: 'Creative Problem-Solving & Logic',
      desc: 'Learn system debugging, algorithmic planning, and software architecture — fundamental cognitive skills for lifelong success.',
      icon: <Lightbulb className="w-6 h-6 text-[#000000] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
      badges: [
        { emoji: '💡', label: 'System Logic' },
        { emoji: '⚙️', label: 'Algorithmic Thinking' },
      ],
      duration: 'Week 4 • Engineering',
      progress: '80% Complete',
      progressPercent: 80,
    },
    {
      step: 'MODULE 05',
      title: 'Capstone Project Exhibition',
      desc: 'Author a unique AI/Robot project for the final virtual showcase and earn an official verified Certificate of Excellence.',
      icon: <Award className="w-6 h-6 text-[#000000] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />,
      badges: [
        { emoji: '🏅', label: 'Verified Certificate' },
        { emoji: '🚀', label: 'Live Showcase' },
      ],
      duration: 'Capstone • Graduation',
      progress: '100% Graduation',
      progressPercent: 100,
    },
  ];

  return (
    <section id="outcomes" className="py-24 md:py-36 bg-[#e5e5e5] relative overflow-hidden">
      
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-[760px]">
          <div className="tag-mint">
            <span>●</span>
            <span>LEARNING JOURNEY</span>
          </div>
          <h2 className="text-display-lg-condensed">
            A CURRICULUM DESIGNED FOR WONDER.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#444444] font-normal">
            Every module builds real technical capability — transforming passive screen time into an active, hands-on creative pursuit.
          </p>
        </div>

        {/* Timeline Container with Left Connection Line */}
        <div className="relative pl-0 sm:pl-8 space-y-8">
          
          {/* Vertical Connecting Timeline Line */}
          <div className="hidden sm:block absolute left-3 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#000000]/10 via-[#000000]/25 to-transparent border-r border-dashed border-[#c6c6c6]" />

          {/* Staggered Motion Container */}
          {modules.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="hidden sm:flex absolute -left-8 top-10 w-6 h-6 rounded-full bg-[#ffffff] border-2 border-[#000000] items-center justify-center z-10 transition-all duration-300 group-hover:bg-[#d1ffca] group-hover:scale-110">
                <div className="w-2 h-2 rounded-full bg-[#000000]" />
              </div>

              {/* Soft Radial Ambient Glow behind active card */}
              <div className="absolute inset-0 rounded-[28px] bg-[#d1ffca]/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Modern Card Design (32px-40px padding, rounded 28px, subtle border, hover mint glow) */}
              <div className="card-flat-white p-8 sm:p-10 rounded-[28px] border border-black/5 bg-[#ffffff] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_45px_rgba(209,255,202,0.45)] group-hover:border-[#d1ffca] relative overflow-hidden">
                
                {/* Left Mint Glow Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-transparent transition-colors duration-300 group-hover:bg-[#d1ffca] rounded-l-[28px]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Icon, Progress Pill, Title & Description */}
                  <div className="lg:col-span-8 space-y-4">
                    
                    <div className="flex items-center gap-4">
                      {/* Outlined Icon in Circular Container */}
                      <div className="w-12 h-12 rounded-full bg-[#f3f3f3] border border-black/5 flex items-center justify-center shrink-0 shadow-sm">
                        {item.icon}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono-tag text-[12px] text-[#979797] uppercase">
                            {item.step} • {item.duration}
                          </span>
                          {/* Small Progress Pill */}
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f3f3f3] font-mono text-[11px] text-[#000000] font-medium border border-black/5">
                            <CheckCircle2 className="w-3 h-3 text-[#000000]" />
                            {item.progress}
                          </span>
                        </div>

                        <h3 className="font-condensed-display text-[28px] sm:text-[34px] font-bold text-[#000000] leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[16px] leading-relaxed text-[#444444] font-normal pl-0 sm:pl-16">
                      {item.desc}
                    </p>

                  </div>

                  {/* Right Column: Technology Badges Pill Row */}
                  <div className="lg:col-span-4 flex flex-wrap lg:flex-col items-start lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#f3f3f3]">
                    
                    <div className="flex flex-wrap gap-2.5 justify-start lg:justify-end">
                      {item.badges.map((badge, bIdx) => (
                        <motion.div
                          key={bIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 + bIdx * 0.1 }}
                          className="px-4 py-1.5 rounded-full bg-[#d1ffca] text-[#000000] text-[13px] font-medium border border-black/10 flex items-center gap-2 transition-transform duration-200 group-hover:scale-105 shadow-sm"
                        >
                          <span>{badge.emoji}</span>
                          <span>{badge.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="text-[13px] font-mono text-[#979797] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                      <span>EXPLORE MODULE</span>
                      <ArrowUpRight className="w-4 h-4 text-[#000000]" />
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
