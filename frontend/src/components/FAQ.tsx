import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  code: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      code: '01/05',
      question: 'DOES MY CHILD NEED ANY PRIOR EXPERIENCE?',
      answer: 'Absolutely not! We welcome complete beginners. Our mentors start from scratch using visual tools, games, and stories — so every child feels like a winner from Day 1. If your kid can use a mouse, they\'re ready!',
    },
    {
      code: '02/05',
      question: 'HOW ARE THE ONLINE CLASSES CONDUCTED?',
      answer: 'Live interactive Zoom sessions led by certified educators specializing in teaching tech to kids. Each class includes live coding, fun quizzes, breakout activities, and hands-on 3D simulator time.',
    },
    {
      code: '03/05',
      question: 'WHAT EQUIPMENT DOES MY CHILD NEED?',
      answer: 'Just a laptop or desktop (Windows, Mac, or Chromebook) with webcam, microphone, and stable internet. All tools are 100% web-based — no complicated installs required.',
    },
    {
      code: '04/05',
      question: 'WILL MY CHILD GET A CERTIFICATE & RECORDINGS?',
      answer: 'Yes! Students who complete their capstone project receive a verified Certificate of Excellence. Every session is recorded and available within 24 hours.',
    },
    {
      code: '05/05',
      question: 'IS THE ₹2,999 FEE REALLY ALL-INCLUSIVE?',
      answer: 'Yes — no hidden costs! The fee covers all 8 live sessions, simulator access, study materials, project mentorship, class recordings, and the completion certificate.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="section-saas bg-[#e5e5e5]">
      <div className="container-saas space-y-12">

        {/* Section Header with 48px-64px spacing */}
        <div className="space-y-4 max-w-[760px] section-header-spacing">
          <div className="tag-mint">PARENTS ASK US</div>
          <h2 className="text-display-lg-condensed">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-[16px] leading-[1.6] text-[#444444] font-normal">
            Honest answers to help you feel confident in choosing the right laboratory program for your child.
          </p>
        </div>

        {/* Accordion Cards with 32px Internal Padding */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-flat-white p-8 transition-colors duration-200"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full text-left bg-transparent border-none cursor-pointer group gap-4"
                >
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <span className="font-mono-tag text-[#979797] text-[13px]">{faq.code}</span>
                    <span className="font-condensed-display text-[24px] sm:text-[28px] font-bold text-[#000000] group-hover:text-[#444444] leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2.5 rounded-[10px] bg-[#f3f3f3] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#000000] text-white' : 'text-[#000000]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-6 mt-6 border-t border-[#f3f3f3] text-[16px] text-[#444444] leading-[1.6] max-w-[920px]">
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
