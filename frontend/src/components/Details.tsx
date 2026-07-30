import { Users, Calendar, Globe, IndianRupee, Rocket } from 'lucide-react';

export default function Details() {
  const detailsData = [
    {
      icon: <Users className="w-5 h-5 text-[#000000]" />,
      label: 'AGE GROUP',
      value: '8–14 YEARS',
      tag: 'BEGINNER / INT',
      description: 'Tailored tracks for curious beginners and budding tech enthusiasts alike.',
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#000000]" />,
      label: 'DURATION',
      value: '4 WEEKS',
      tag: '8 LIVE SESSIONS',
      description: '8 live interactive sessions + project reviews, quizzes & mentor support.',
    },
    {
      icon: <Globe className="w-5 h-5 text-[#000000]" />,
      label: 'LEARNING MODE',
      value: '100% ONLINE',
      tag: 'GLOBAL ZOOM',
      description: 'Join from anywhere! Live Zoom classes with 3D simulators & digital labs.',
    },
    {
      icon: <IndianRupee className="w-5 h-5 text-[#000000]" />,
      label: 'PROGRAM FEE',
      value: '₹2,999',
      tag: 'ALL-INCLUSIVE',
      description: 'All-inclusive: simulators, study materials, certificate & recordings.',
    },
    {
      icon: <Rocket className="w-5 h-5 text-[#000000]" />,
      label: 'START DATE',
      value: '15 JULY 2026',
      tag: '15 SEATS MAX',
      description: 'Only 15 seats per batch — secure your child\'s spot before it fills up!',
    },
  ];

  return (
    <section id="details" className="py-24 md:py-36 bg-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-6 max-w-[760px]">
          <div className="tag-mint">PROGRAM SNAPSHOT</div>
          <h2 className="text-display-lg-condensed">
            EVERYTHING YOU NEED TO KNOW AT A GLANCE.
          </h2>
          <p className="text-[16px] leading-[1.3] text-[#444444] font-normal">
            A premium summer experience designed for busy parents and curious kids — flexible, affordable, and rich in real learning outcomes.
          </p>
        </div>

        {/* Flat White Cards Grid (32px radius, open breathing room) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {detailsData.map((item, index) => (
            <div
              key={index}
              className="card-flat-white p-8 sm:p-10 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-[10px] bg-[#f3f3f3]">
                    {item.icon}
                  </div>
                  <span className="tag-voltage text-[11px]">
                    {item.tag}
                  </span>
                </div>

                <div className="font-mono-tag text-[#979797]">
                  {item.label}
                </div>

                <h3 className="font-condensed-display text-[38px] font-bold text-[#000000] leading-[0.9]">
                  {item.value}
                </h3>
              </div>

              <p className="text-[14px] text-[#444444] leading-relaxed pt-5 border-t border-[#f3f3f3]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
