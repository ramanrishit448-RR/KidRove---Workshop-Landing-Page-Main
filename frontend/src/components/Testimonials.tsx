const testimonials = [
  {
    name: "AARAV, AGE 11",
    role: "ROBOT SIMULATOR DEVELOPER",
    quote:
      "I never thought I could code a robot! The classes felt like playing a video game — my robot actually dodged obstacles on screen. Best summer ever!",
    avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=400&q=80",
    tag: "STUDENT TESTIMONIAL",
  },
  {
    name: "PRIYA (AARAV'S MOM)",
    role: "PARENT FROM BANGALORE",
    quote:
      "My son went from 'I can't do coding' to explaining AI to his grandparents in 3 weeks. The mentors are patient, fun, and genuinely care about every child.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    tag: "PARENT REFLECTION",
  },
  {
    name: "MEERA, AGE 9",
    role: "AI GAME CREATOR",
    quote:
      "I made a game where the computer guesses what I draw! I showed it to my whole class. Now my friends want to join Dayos Lab too!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    tag: "STUDENT TESTIMONIAL",
  },
];

export default function Testimonials() {
  return (
    <section className="section-saas bg-[#e5e5e5]">
      <div className="container-saas space-y-12">
        
        {/* Section Header with 48px-64px spacing */}
        <div className="space-y-4 max-w-[760px] section-header-spacing">
          <div className="tag-mint">REAL STORIES</div>
          <h2 className="text-display-lg-condensed">
            KIDS & PARENTS LOVE THE SHOWROOM EXPERIENCE.
          </h2>
          <p className="text-[16px] leading-[1.6] text-[#444444] font-normal">
            Don't just take our word for it — hear from young innovators and families who've experienced the laboratory firsthand.
          </p>
        </div>

        {/* 3-Col Desktop / 1-Col Mobile Grid (32px Gap, Equal Heights, 32px Internal Padding) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="card-inverted p-8 h-full flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#2f2f2f] pb-4">
                  <span className="font-mono-tag text-[#d1ffca] text-[11px]">
                    {item.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#444444] shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="font-condensed-display text-[26px] font-bold text-white leading-none">
                  {item.name}
                </h3>
                <div className="font-mono-tag text-[#979797] text-[11px]">
                  {item.role}
                </div>

                <p className="text-[15px] text-[#e5e5e5] leading-[1.6] pt-2">
                  "{item.quote}"
                </p>
              </div>

              <div className="text-[13px] font-mono text-[#d1ffca] pt-4 border-t border-[#2f2f2f] flex items-center justify-between">
                <span>VERIFIED REVIEW</span>
                <span>★ 5.0</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
