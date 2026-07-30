const testimonials = [
  {
    name: "Aarav, Age 11",
    role: "Built a line-following robot simulator",
    quote:
      "I never thought I could code a robot! The classes felt like playing a video game — my robot actually dodged obstacles on screen. Best summer ever!",
    avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya (Aarav's Mom)",
    role: "Parent from Bangalore",
    quote:
      "My son went from 'I can't do coding' to explaining AI concepts to his grandparents in 3 weeks. The mentors are patient, fun, and genuinely care about every child.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Meera, Age 9",
    role: "Created her first AI game",
    quote:
      "I made a game where the computer guesses what I draw! I showed it to my whole class. Now my friends want to join too!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-[#000000] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-[640px]">
          <div className="label-amber">REAL STORIES</div>
          <h2 className="text-heading-lg-dala text-white tracking-[-0.04em]">
            Kids & parents love the experience.
          </h2>
          <p className="text-body-light text-[#bdbdbd]">
            Don't just take our word for it — hear from the young innovators and families who've experienced the magic firsthand.
          </p>
        </div>

        {/* Floating Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-6 group">
              
              {/* Rounded Portrait (24px radius) */}
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#121212]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Quote & Author Details */}
              <div className="space-y-3">
                <div className="text-[12px] font-semibold uppercase tracking-[0.025em] text-[#8052ff]">
                  {item.role}
                </div>
                <h3 className="text-[27px] font-normal text-white font-sans leading-tight">
                  {item.name}
                </h3>
                <p className="text-body-light text-[#bdbdbd] text-[16px] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
