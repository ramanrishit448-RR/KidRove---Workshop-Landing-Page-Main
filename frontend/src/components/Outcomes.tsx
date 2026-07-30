import { Cpu, Code, BrainCircuit, Lightbulb, Award } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-[#000000]" />,
      title: 'MASTER CORE AI CONCEPTS',
      desc: 'Discover how machines "think" — train AI to recognize faces, play games, and solve spatial logic puzzles.',
      tag: 'NEURAL MODULE',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#000000]" />,
      title: 'ROBOTICS SIMULATORS',
      desc: 'Design, code & test virtual robots in 3D physics environments — controlling sonar sensors and mechanical arms.',
      tag: '3D PHYSICS',
    },
    {
      icon: <Code className="w-5 h-5 text-[#000000]" />,
      title: 'CODING SUPERPOWERS',
      desc: 'Start with visual block logic, then progress into real Python syntax — building confidence one project at a time.',
      tag: 'PYTHON & BLOCKS',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#000000]" />,
      title: 'PROBLEM-SOLVING ALGORITHMS',
      desc: 'Learn system debugging, algorithmic planning, and project architecture — fundamental cognitive skills for life.',
      tag: 'SYSTEM LOGIC',
    },
    {
      icon: <Award className="w-5 h-5 text-[#000000]" />,
      title: 'CAPSTONE EXHIBITION',
      desc: 'Author a unique AI/Robot project for the final exhibition and earn a verified Certificate of Excellence.',
      tag: 'CERTIFICATE',
    },
  ];

  return (
    <section id="outcomes" className="pt-20 bg-[#e5e5e5]">
      {/* Top-Arc Card Section Opener (64px 64px 0px 0px Dome Shape) */}
      <div className="card-top-arc bg-[#ffffff] pt-16 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto space-y-16">

          {/* Section Header */}
          <div className="space-y-4 max-w-[720px]">
            <div className="tag-mint">LEARNING JOURNEY</div>
            <h2 className="text-display-lg-condensed">
              SKILLS YOUR CHILD WILL UNLOCK.
            </h2>
            <p className="text-[16px] leading-[1.25] text-[#444444] font-normal">
              From curious beginner to confident creator — our step-by-step curriculum turns screen time into an active skill-building adventure.
            </p>
          </div>

          {/* Grid Layout: Curriculum Items Left, Inverted Dark Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Standard White Cards */}
            <div className="lg:col-span-7 space-y-4">
              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-[24px] bg-[#f3f3f3] flex items-start space-x-4"
                >
                  <div className="p-3 rounded-[12px] bg-[#ffffff] shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-condensed-display text-[28px] font-bold text-[#000000]">
                        {item.title}
                      </h3>
                      <span className="font-mono-tag text-[11px] text-[#979797]">
                        [{item.tag}]
                      </span>
                    </div>
                    <p className="text-[14px] text-[#444444] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Inverted Dark Card (#000000, 32px radius) */}
            <div className="lg:col-span-5 space-y-6 sticky top-28">
              <div className="card-inverted p-8 space-y-6">
                
                <div className="flex justify-between items-center border-b border-[#2f2f2f] pb-4">
                  <span className="tag-voltage">
                    LIVE ROBOT CONTROL SCRIPT
                  </span>
                  <span className="font-mono-tag text-[#d1ffca]">03 // ACTIVE LAB</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-condensed-display text-[36px] font-bold text-white leading-none">
                    LEARN BY BUILDING, NOT WATCHING.
                  </h3>
                  <p className="text-[14px] text-[#979797] leading-relaxed">
                    Every session is a mini adventure — kids write real code, run virtual sensors, and see their robots come alive on screen.
                  </p>
                </div>

                {/* Dark Monospace Code Block */}
                <div className="bg-[#1f1f29] rounded-[16px] p-5 font-mono text-[13px] leading-relaxed text-[#d1ffca] space-y-1">
                  <div><span className="text-[#fff100]">import</span> kidslab_robot <span className="text-[#fff100]">as</span> bot</div>
                  <div className="text-[#979797]"># Start sonar sensor</div>
                  <div>bot.initialize_sonar()</div>
                  <div>&nbsp;</div>
                  <div><span className="text-[#fff100]">while</span> bot.obstacle_distance &gt; <span className="text-white">10</span>:</div>
                  <div className="pl-4">bot.move_forward(speed=<span className="text-white">50</span>)</div>
                  <div className="pl-4 text-[#979797]">bot.turn_right(angle=<span className="text-white">90</span>)</div>
                </div>

                <div className="pt-2 text-[14px] text-[#d1ffca] font-medium border-t border-[#2f2f2f] flex items-center justify-between">
                  <span>100% CAPSTONE SHIP RATE</span>
                  <span className="text-[#fff100]">★ CERTIFIED</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
