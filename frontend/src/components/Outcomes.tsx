import { Cpu, Code, BrainCircuit, Lightbulb, Award } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-[#41a1cf]" />,
      title: 'Master Core AI Concepts',
      desc: 'Discover how machines "think" — train AI models to recognize patterns, play games, and solve spatial logic puzzles.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#2c2c2c]" />,
      title: 'Hands-on Robotics Simulators',
      desc: 'Design, program & test virtual robots in 3D physics environments — controlling sonar sensors and mechanical arms.',
    },
    {
      icon: <Code className="w-5 h-5 text-[#41a1cf]" />,
      title: 'Coding Superpowers',
      desc: 'Start with visual block logic, then progress smoothly into clean Python syntax — building confidence step-by-step.',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#2c2c2c]" />,
      title: 'Creative Problem-Solving',
      desc: 'Learn system debugging, algorithmic planning, and project architecture — fundamental cognitive skills for life.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#41a1cf]" />,
      title: 'Capstone Project & Certificate',
      desc: 'Author a unique AI/Robot capstone project for the final exhibition and earn a verified Certificate of Excellence.',
    },
  ];

  return (
    <section id="outcomes" className="py-20 md:py-28 bg-[#fefffc]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-[640px]">
          <div className="text-[13px] uppercase font-medium tracking-tight text-[#646464] border-b border-[#dee2de] pb-1 inline-block">
            CURRICULUM & SKILLS
          </div>
          <h2 className="text-heading-editorial">
            Skills your child will unlock.
          </h2>
          <p className="text-[18px] leading-[1.5] text-[#444141]">
            From curious beginner to confident author — our structured curriculum turns passive screen time into an active creative pursuit.
          </p>
        </div>

        {/* 1. Full-Bleed Hand-Painted Atmospheric Wildflower Meadow Card (24px radius) */}
        <div className="relative w-full h-[400px] sm:h-[480px] rounded-[24px] overflow-hidden shadow-lg flex items-end p-8 sm:p-12 text-white">
          <img
            src="/assets/images/wildflower_field.png"
            alt="Hand-painted wildflower meadow illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          
          <div className="relative z-10 max-w-[600px] space-y-3">
            <div className="text-[13px] font-medium uppercase tracking-tight text-[#ffb829]">
              ATMOSPHERIC FIELDWORK
            </div>
            <h3 className="font-serif-display text-[32px] sm:text-[40px] leading-tight font-normal text-white">
              "We believe intelligence is cultivated through wonder, not drills."
            </h3>
            <p className="text-[16px] text-white/90 font-light">
              Laboratory Field Notes — Chapter II: Autonomous Navigation in Simulated Environments.
            </p>
          </div>
        </div>

        {/* 2. Grid: Curriculum Items Left, Saturated Cerulean Card + Code Peek Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Curriculum Items */}
          <div className="lg:col-span-7 space-y-4">
            {outcomes.map((item, index) => (
              <div
                key={index}
                className="card-paper p-6 flex items-start space-x-4"
              >
                <div className="p-2.5 rounded-[8px] bg-[#f9faf7] border border-[#dee2de] shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-display text-[22px] font-normal text-[#171717]">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-[#444141] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Singular Saturated Cerulean Surface (#0081c0) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-full bg-[#0081c0] rounded-[24px] p-8 text-white space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-2">
                <div className="text-[13px] uppercase font-medium tracking-tight text-white/80">
                  LABORATORY SPECIFICATION
                </div>
                <h3 className="font-serif-display text-[32px] font-normal leading-tight text-white">
                  Modular Agent Architecture.
                </h3>
                <p className="text-[15px] text-white/90 leading-relaxed font-light">
                  Students build self-contained cognitive modules that interact through clean interfaces.
                </p>
              </div>

              {/* Code snippet block */}
              <div className="bg-white/10 backdrop-blur-md rounded-[12px] p-5 font-mono text-[13px] leading-relaxed text-white border border-white/20">
                <div><span className="text-[#ffb829]">import</span> robot_core <span className="text-[#ffb829]">as</span> bot</div>
                <div className="text-white/60">// Initialize sonar array</div>
                <div>bot.initialize_sonar()</div>
                <div>&nbsp;</div>
                <div><span className="text-[#ffb829]">while</span> bot.obstacle_distance &gt; <span className="text-[#48dbfb]">10</span>:</div>
                <div className="pl-4">bot.move_forward(speed=<span className="text-[#48dbfb]">50</span>)</div>
                <div className="pl-4 text-white/60">bot.turn_right(angle=<span className="text-[#48dbfb]">90</span>)</div>
              </div>

              <div className="pt-2 text-[14px] text-white font-medium flex items-center gap-2 border-t border-white/20 pt-4">
                <span>★ 100% of students author a capstone project</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
