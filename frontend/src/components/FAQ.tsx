import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, HelpCircle, Mail } from 'lucide-react';

interface FAQItem {
  code: string;
  question: string;
  answer: string;
  highlights: string[];
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      code: '01/05',
      question: 'Does my child need any prior coding or robotics experience?',
      answer: 'Absolutely not! We welcome complete beginners. Our mentors introduce foundational concepts from scratch using visual block tools, interactive games, and story-based challenges — so every child feels confident from Day 1.',
      highlights: [
        'Zero prior coding experience required',
        'Visual drag-and-drop block coding tools',
        'Beginner-friendly pace with 1-on-1 mentor support',
      ],
    },
    {
      code: '02/05',
      question: 'How are the live online laboratory sessions conducted?',
      answer: 'Live interactive Zoom sessions led by certified educators specializing in teaching tech to kids. Each class includes live coding demonstrations, breakout room activities, interactive quizzes, and hands-on 3D simulator time.',
      highlights: [
        'Live interactive Zoom classes with expert mentors',
        'Hands-on 3D physics robotics simulator access',
        'Interactive breakout activities & coding challenges',
      ],
    },
    {
      code: '03/05',
      question: 'What computer equipment or software is required?',
      answer: 'Just a standard laptop or desktop (Windows, Mac, or Chromebook) with a working webcam, microphone, and stable internet connection. All laboratory tools are 100% web-based — no complicated software installs needed.',
      highlights: [
        'Works on Windows, Mac, or Chromebooks',
        '100% web-based — zero complicated installs',
        'Requires standard webcam & internet connection',
      ],
    },
    {
      code: '04/05',
      question: 'Will my child receive class recordings and a verified certificate?',
      answer: 'Yes! Every session is recorded in HD and uploaded to the student portal within 24 hours. Students completing their capstone project receive an official verified Certificate of Excellence for their academic portfolio.',
      highlights: [
        'HD session recordings available within 24 hours',
        'Official verified Certificate of Excellence',
        'Lifetime access to project code & portfolio',
      ],
    },
    {
      code: '05/05',
      question: 'Is the ₹2,999 program fee truly all-inclusive?',
      answer: 'Yes — 100% transparent pricing with zero hidden fees! The single ₹2,999 payment covers all 8 live sessions, 3D physics simulator access, study activity kits, project mentorship, class recordings, and the completion certificate.',
      highlights: [
        'Single all-inclusive payment of ₹2,999',
        'Includes all 8 sessions, 3D simulator & recordings',
        'Full 7-day money-back satisfaction guarantee',
      ],
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 md:py-36 bg-[#e5e5e5] relative overflow-hidden">
      
      {/* Subtle Background Radial Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-[720px]">
          <div className="tag-mint">
            <HelpCircle className="w-3.5 h-3.5 text-[#000000]" />
            <span>PARENTS ASK US</span>
          </div>
          <h2 className="text-display-lg-condensed">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#444444] font-normal">
            Clear, honest answers to help you feel completely confident in choosing the right laboratory program for your child.
          </p>
        </div>

        {/* Premium Accordion List with Generous 32px-40px Item Spacing */}
        <div className="space-y-8 md:space-y-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className={`rounded-[24px] border transition-all duration-300 relative overflow-hidden ${
                  isOpen
                    ? 'bg-[#ffffff] border-[#d1ffca] shadow-[0_16px_40px_rgba(209,255,202,0.45)] translate-y-[-2px]'
                    : 'bg-[#ffffff] border-black/5 hover:border-[#d1ffca]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:translate-y-[-1px]'
                }`}
              >
                {/* Left Animated Mint Accent Line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${
                    isOpen ? 'bg-[#d1ffca]' : 'bg-transparent group-hover:bg-[#d1ffca]/50'
                  }`}
                />

                {/* Header Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full p-8 sm:p-10 text-left flex items-start sm:items-center justify-between gap-6 cursor-pointer bg-transparent border-none outline-none group"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Numbering Tag with Mint Transition */}
                    <span
                      className={`font-mono text-[13px] px-3.5 py-1 rounded-full border transition-colors duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-[#d1ffca] text-[#000000] border-[#d1ffca] font-semibold'
                          : 'bg-[#f3f3f3] text-[#979797] border-black/5 group-hover:bg-[#d1ffca]/40 group-hover:text-[#000000]'
                      }`}
                    >
                      {faq.code}
                    </span>

                    {/* Question Title */}
                    <h3 className="font-condensed-display text-[24px] sm:text-[28px] font-bold text-[#000000] leading-tight group-hover:text-[#222222]">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Circular Animated Arrow Button */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#000000] text-[#d1ffca] border-[#000000] rotate-180 shadow-md'
                        : 'bg-[#f3f3f3] text-[#000000] border-black/5 group-hover:bg-[#000000] group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Expanded Answer Section */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 sm:px-10 pb-9 pt-3 border-t border-[#f3f3f3] space-y-6">
                        
                        {/* Answer Text */}
                        <p className="text-[16px] leading-[1.65] text-[#444444] font-normal pl-0 sm:pl-16">
                          {faq.answer}
                        </p>

                        {/* Checklist Highlights */}
                        <div className="pl-0 sm:pl-16 grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                          {faq.highlights.map((point, hIdx) => (
                            <div
                              key={hIdx}
                              className="p-3.5 rounded-[12px] bg-[#f9faf7] border border-black/5 flex items-start gap-2.5 text-[13px] text-[#000000] font-medium"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#000000] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Contact Assistance Note */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-[#ffffff] border border-black/5 text-center text-[15px] text-[#444444] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-full bg-[#d1ffca] text-[#000000] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[#000000] text-[16px]">Have an additional question?</p>
              <p className="text-[13px] text-[#979797]">Our admissions team replies within 2 hours.</p>
            </div>
          </div>

          <a
            href="mailto:support@dayos.ai"
            className="btn-dark-filled text-[14px] py-3 px-6 rounded-[8px]"
          >
            Ask Admissions Team →
          </a>
        </div>

      </div>
    </section>
  );
}
