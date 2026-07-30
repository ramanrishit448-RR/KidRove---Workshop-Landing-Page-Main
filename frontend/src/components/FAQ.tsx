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
    <section id="faqs" className="py-20 md:py-28 bg-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-12">

        {/* Section Header */}
        <div className="space-y-4 max-w-[720px]">
          <div className="tag-mint">PARENTS ASK US</div>
          <h2 className="text-display-lg-condensed">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-[16px] leading-[1.25] text-[#444444] font-normal">
            Honest answers to help you feel confident in choosing the right laboratory program for your child.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-flat-white p-6 transition-colors duration-200"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full text-left bg-transparent border-none cursor-pointer group"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-mono-tag text-[#979797] text-[13px]">{faq.code}</span>
                    <span className="font-condensed-display text-[24px] sm:text-[28px] font-bold text-[#000000] group-hover:text-[#444444] leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-[8px] bg-[#f3f3f3] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#000000] text-white' : 'text-[#000000]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 mt-4 border-t border-[#f3f3f3] text-[16px] text-[#444444] leading-relaxed max-w-[900px]">
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
