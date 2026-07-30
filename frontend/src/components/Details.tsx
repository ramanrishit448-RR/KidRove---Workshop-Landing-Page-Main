import { Users, Calendar, Globe, IndianRupee, Rocket } from 'lucide-react';

export default function Details() {
  const detailsData = [
    {
      icon: <Users className="w-6 h-6 text-[#8052ff]" />,
      label: 'AGE GROUP',
      value: '8–14 Years',
      emoji: '🧒',
      description: 'Tailored tracks for curious beginners and budding tech enthusiasts alike.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#ffb829]" />,
      label: 'DURATION',
      value: '4 Weeks',
      emoji: '📅',
      description: '8 live interactive sessions + project reviews, quizzes & mentor support.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#15846e]" />,
      label: 'LEARNING MODE',
      value: '100% Online',
      emoji: '💻',
      description: 'Join from anywhere! Live Zoom classes with 3D simulators & digital labs.',
    },
    {
      icon: <IndianRupee className="w-6 h-6 text-[#8052ff]" />,
      label: 'PROGRAM FEE',
      value: '₹2,999',
      emoji: '💰',
      description: 'All-inclusive: simulators, study materials, certificate & recordings.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#ffb829]" />,
      label: 'START DATE',
      value: '15 July 2026',
      emoji: '🚀',
      description: 'Only 15 seats per batch — secure your child\'s spot before it fills up!',
    },
  ];

  return (
    <section id="details" className="py-24 md:py-36 bg-[#000000] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-[680px]">
          <div className="label-amber">PROGRAM SNAPSHOT</div>
          <h2 className="text-heading-lg-dala text-white tracking-[-0.04em]">
            Everything you need to know at a glance.
          </h2>
          <p className="text-body-light text-[#bdbdbd]">
            A premium learning experience designed for busy parents and curious kids — flexible, accessible, and packed with real skill outcomes.
          </p>
        </div>

        {/* Floating Snapshot Grid on Pure Black Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {detailsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 p-6 rounded-[24px] bg-[#000000] border-none group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-full bg-[#111111] inline-flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-2xl">{item.emoji}</span>
              </div>

              <div className="text-[12px] font-semibold uppercase tracking-[0.025em] text-[#8052ff]">
                {item.label}
              </div>

              <h3 className="text-[27px] font-normal text-white font-sans leading-tight">
                {item.value}
              </h3>

              <p className="text-body-light text-[#bdbdbd] text-[15px] leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
