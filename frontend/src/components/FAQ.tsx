import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Does my child need any prior experience?',
      answer: 'Absolutely not! We welcome complete beginners. Our mentors start from scratch using visual tools, games, and stories — so every child feels confident from Day 1. If your kid can use a mouse and loves exploring, they\'re ready!',
    },
    {
      question: 'How are the online classes conducted?',
      answer: 'Live interactive Zoom sessions led by certified educators who specialize in teaching tech to kids. Each class includes live coding, fun quizzes, breakout activities, and hands-on simulator time. With max 15 students per mentor, every child gets personal attention.',
    },
    {
      question: 'What does my child need to participate?',
      answer: 'Just a laptop or desktop (Windows, Mac, or Chromebook) with webcam, microphone, and stable internet. All tools are 100% web-based — no complicated installs, no expensive hardware. We\'ll send a simple setup guide before the first class.',
    },
    {
      question: 'Will my child get a certificate and recordings?',
      answer: 'Yes! Students who complete their capstone project receive a verified Certificate of Excellence — a great addition to their learning portfolio. Every session is recorded and available within 24 hours.',
    },
    {
      question: 'Is the ₹2,999 fee really all-inclusive?',
      answer: 'Yes — no hidden costs! The fee covers all 8 live sessions, simulator access, study materials, project mentorship, class recordings, and the completion certificate.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 md:py-36 bg-[#000000] relative overflow-hidden">
      <div className="max-w-[1020px] mx-auto px-6 md:px-12 space-y-16">

        {/* Section Header */}
        <div className="space-y-4">
          <div className="label-amber">PARENTS ASK US</div>
          <h2 className="text-heading-lg-dala text-white tracking-[-0.04em]">
            Frequently asked questions.
          </h2>
          <p className="text-body-light text-[#bdbdbd] max-w-[600px]">
            We know choosing the right program for your child is an important decision. Here are answers to help you feel confident.
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="space-y-2 border-t border-[#1a1a1a]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="py-6 border-b border-[#1a1a1a]"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full text-left bg-transparent border-none cursor-pointer group"
                >
                  <span className="text-[24px] font-normal text-white group-hover:text-[#8052ff] transition-colors font-sans pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#8052ff]' : 'text-[#9a9a9a]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 text-body-light text-[#bdbdbd] text-[17px] leading-relaxed max-w-[800px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
