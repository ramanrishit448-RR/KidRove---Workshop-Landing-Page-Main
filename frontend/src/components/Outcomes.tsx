import { Cpu, Code, BrainCircuit, Lightbulb, Award } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-[#8052ff]" />,
      title: 'Master Core AI Concepts',
      emoji: '🧠',
      desc: 'Discover how machines "think" — train AI to recognize faces, play games, and solve puzzles through kid-friendly experiments.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#ffb829]" />,
      title: 'Hands-on Robotics Simulators',
      emoji: '🦾',
      desc: 'Design, code & test virtual robots in 3D! Control sensors, motors, and arms — just like a real engineer.',
    },
    {
      icon: <Code className="w-6 h-6 text-[#15846e]" />,
      title: 'Coding Superpowers',
      emoji: '⌨️',
      desc: 'Start with fun visual blocks, then level up to real Python — building confidence one project at a time.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#8052ff]" />,
      title: 'Creative Problem-Solving',
      emoji: '💡',
      desc: 'Learn to debug like a pro, plan step-by-step, and turn big ideas into working code — skills for life!',
    },
    {
      icon: <Award className="w-6 h-6 text-[#ffb829]" />,
      title: 'Capstone Project & Certificate',
      emoji: '🏅',
      desc: 'Showcase a unique AI/Robot project at the final exhibition and earn a verified Certificate of Excellence!',
    },
  ];

  return (
    <section id="outcomes" className="py-24 md:py-36 bg-[#000000] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Outcomes List */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="label-amber">LEARNING JOURNEY</div>
              <h2 className="text-heading-lg-dala text-white tracking-[-0.04em]">
                Skills your child will unlock.
              </h2>
              <p className="text-body-light text-[#bdbdbd] max-w-[560px]">
                From curious beginner to confident creator — our step-by-step curriculum turns screen time into an active skill-building adventure.
              </p>
            </div>

            <div className="space-y-6">
              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-5 py-4 border-b border-[#141414] last:border-none group"
                >
                  <div className="p-3 rounded-full bg-[#111111] shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[24px] font-normal text-white font-sans flex items-center gap-3">
                      <span>{item.title}</span>
                      <span className="text-sm opacity-80">{item.emoji}</span>
                    </h3>
                    <p className="text-body-light text-[#bdbdbd] text-[16px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Simulation Peek */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] bg-[#000000] border border-[#262626] p-8 rounded-[24px] text-white space-y-6">
              
              <div className="flex justify-between items-center pb-3 border-b border-[#262626]">
                <span className="text-[12px] font-semibold uppercase tracking-[0.35px] text-[#ffb829]">
                  PEEK INSIDE A CLASS
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#8052ff] animate-ping" />
              </div>

              <div className="space-y-2">
                <h3 className="text-[27px] font-normal leading-tight text-white font-sans">
                  Build, test, and ship.
                </h3>
                <p className="text-body-light text-[#bdbdbd] text-[15px]">
                  Every session is a mini adventure — kids write code, test virtual sensors, and see their creation come alive!
                </p>
              </div>

              {/* Code snippet block */}
              <div className="bg-[#0c0c0c] rounded-[16px] p-5 font-mono text-[13px] leading-relaxed space-y-1.5 text-[#bdbdbd] border border-[#1a1a1a]">
                <div><span className="text-[#8052ff]">import</span> dala_robot <span className="text-[#8052ff]">as</span> bot</div>
                <div className="text-[#ffb829]">// Initialize sonar sensor</div>
                <div>bot.initialize_sonar()</div>
                <div>&nbsp;</div>
                <div><span className="text-[#8052ff]">while</span> bot.obstacle_distance &gt; <span className="text-[#15846e]">10</span>:</div>
                <div className="pl-4">bot.move_forward(speed=<span className="text-[#15846e]">50</span>)</div>
                <div className="pl-4 text-[#ffb829]">bot.turn_right(angle=<span className="text-[#15846e]">90</span>)</div>
              </div>

              <div className="pt-2 text-[14px] text-[#8052ff] font-medium flex items-center gap-2">
                <span>★ 100% of students ship a capstone project!</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
