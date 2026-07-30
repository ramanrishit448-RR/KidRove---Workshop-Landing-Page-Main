const testimonials = [
  {
    name: "Aarav, Age 11",
    role: "Built a line-following robot simulator",
    quote:
      "I never thought I could code a robot! The laboratory felt like a creative exploration — my robot actually dodged obstacles on screen.",
    avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya (Aarav's Mom)",
    role: "Parent from Bangalore",
    quote:
      "My son went from 'I can't do coding' to explaining neural concepts to his grandparents in 3 weeks. The mentors are patient, thoughtful, and encouraging.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Meera, Age 9",
    role: "Created her first AI game",
    quote:
      "I made a game where the computer guesses what I draw! I showed it to my whole class. Now my friends want to join the laboratory too!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#fefffc]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-[640px]">
          <div className="text-[13px] uppercase font-medium tracking-tight text-[#646464] border-b border-[#dee2de] pb-1 inline-block">
            REVIEWS & REFLECTIONS
          </div>
          <h2 className="text-heading-editorial">
            Kids & parents reflect on the experience.
          </h2>
          <p className="text-[18px] leading-[1.5] text-[#444141]">
            Hear from the young thinkers and families who've experienced our summer laboratory firsthand.
          </p>
        </div>

        {/* Hand-Painted Atmospheric Cerulean Landscape Card (24px radius) */}
        <div className="relative w-full h-[280px] sm:h-[340px] rounded-[24px] overflow-hidden shadow-md flex items-center justify-center p-8 text-center text-white">
          <img
            src="/assets/images/cerulean_landscape.png"
            alt="Hand-painted cerulean landscape illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          
          <div className="relative z-10 max-w-[700px] space-y-4">
            <h3 className="font-serif-display text-[32px] sm:text-[42px] leading-tight font-normal text-white">
              "A low, measured voice of confidence for budding creators."
            </h3>
            <div className="text-[14px] uppercase tracking-wider text-white/80 font-medium">
              — General Intelligence Journal • Edition IV
            </div>
          </div>
        </div>

        {/* Paper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="card-paper p-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#dee2de] shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-[20px] font-normal text-[#171717] leading-tight">
                      {item.name}
                    </h4>
                    <div className="text-[12px] text-[#646464]">
                      {item.role}
                    </div>
                  </div>
                </div>

                <p className="text-[15px] text-[#444141] leading-relaxed italic border-t border-[#dee2de]/60 pt-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="text-[13px] text-[#41a1cf] font-medium pt-2">
                Verified Student Reflection →
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
