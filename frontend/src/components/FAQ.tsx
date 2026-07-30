import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, HelpCircle, Mail } from 'lucide-react';

interface FAQItem {
  code: string;
  question: string;
  answer: string;
  highlights: string[];
}

const FAQS: FAQItem[] = [
  {
    code: '01',
    question: 'Does my child need any prior coding or robotics experience?',
    answer: 'Absolutely not! We welcome complete beginners. Our mentors introduce foundational concepts from scratch using visual block tools, interactive games, and story-based challenges — so every child feels confident from Day 1.',
    highlights: [
      'Zero prior coding experience required',
      'Visual drag-and-drop block coding tools',
      'Beginner-friendly pace with 1-on-1 mentor support',
    ],
  },
  {
    code: '02',
    question: 'How are the live online laboratory sessions conducted?',
    answer: 'Live interactive Zoom sessions led by certified educators specializing in teaching tech to kids. Each class includes live coding demonstrations, breakout room activities, interactive quizzes, and hands-on 3D simulator time.',
    highlights: [
      'Live interactive Zoom classes with expert mentors',
      'Hands-on 3D physics robotics simulator access',
      'Interactive breakout activities & coding challenges',
    ],
  },
  {
    code: '03',
    question: 'What computer equipment or software is required?',
    answer: 'Just a standard laptop or desktop (Windows, Mac, or Chromebook) with a working webcam, microphone, and stable internet connection. All laboratory tools are 100% web-based — no complicated software installs needed.',
    highlights: [
      'Works on Windows, Mac, or Chromebooks',
      '100% web-based — zero complicated installs',
      'Requires standard webcam & internet connection',
    ],
  },
  {
    code: '04',
    question: 'Will my child receive class recordings and a verified certificate?',
    answer: 'Yes! Every session is recorded in HD and uploaded to the student portal within 24 hours. Students completing their capstone project receive an official verified Certificate of Excellence for their academic portfolio.',
    highlights: [
      'HD session recordings available within 24 hours',
      'Official verified Certificate of Excellence',
      'Lifetime access to project code & portfolio',
    ],
  },
  {
    code: '05',
    question: 'Is the ₹2,999 program fee truly all-inclusive?',
    answer: 'Yes — 100% transparent pricing with zero hidden fees! The single ₹2,999 payment covers all 8 live sessions, 3D physics simulator access, study activity kits, project mentorship, class recordings, and the completion certificate.',
    highlights: [
      'Single all-inclusive payment of ₹2,999',
      'Includes all 8 sessions, 3D simulator & recordings',
      'Full 7-day money-back satisfaction guarantee',
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-saas bg-[#e5e5e5] relative overflow-hidden">
      
      {/* Subtle radial gradient background — replaces large empty grey areas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(209,255,202,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-[720px] mb-12 md:mb-16"
        >
          <div className="tag-mint">
            <HelpCircle className="w-3.5 h-3.5 text-[#000000]" />
            <span>PARENTS ASK US</span>
          </div>
          <h2 className="text-display-lg-condensed">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#444444] font-normal">
            Clear, honest answers to help you feel completely confident in choosing the right laboratory program for your child.
          </p>
        </motion.div>

        {/* Premium Accordion (20–24px spacing between items) */}
        <div className="space-y-5 md:space-y-6">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={!isOpen ? { y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } } : {}}
                className="relative group"
              >
                {/* Soft radial glow behind active card */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -inset-3 rounded-[32px] bg-[#d1ffca]/20 blur-2xl pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Card Shell */}
                <div
                  className={`relative rounded-[24px] border overflow-hidden transition-all duration-300 will-change-transform ${
                    isOpen
                      ? 'bg-white border-[#d1ffca] shadow-[0_16px_48px_rgba(209,255,202,0.4),0_4px_12px_rgba(0,0,0,0.04)]'
                      : 'bg-white border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)] group-hover:border-[#d1ffca]/50 group-hover:shadow-[0_12px_36px_rgba(209,255,202,0.25),0_4px_12px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  {/* Left accent bar */}
                  <motion.div
                    animate={{
                      backgroundColor: isOpen ? '#d1ffca' : 'transparent',
                      width: isOpen ? 5 : 3,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="absolute left-0 top-0 bottom-0 rounded-l-[24px]"
                  />

                  {/* Header Button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left flex items-center justify-between gap-4 sm:gap-6 cursor-pointer bg-transparent border-none outline-none group/btn"
                    style={{ padding: 'clamp(20px, 3.5vw, 36px)' }}
                  >
                    <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                      {/* Numbering pill */}
                      <motion.span
                        animate={{
                          backgroundColor: isOpen ? '#d1ffca' : '#f3f3f3',
                          color: isOpen ? '#000000' : '#979797',
                          borderColor: isOpen ? '#d1ffca' : 'rgba(0,0,0,0.05)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="font-mono text-[12px] sm:text-[13px] w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center shrink-0 font-semibold"
                      >
                        {faq.code}
                      </motion.span>

                      {/* Question text */}
                      <h3
                        className="font-condensed-display font-bold text-[#000000] leading-tight min-w-0"
                        style={{ fontSize: 'clamp(18px, 2.6vw, 28px)' }}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Animated circular chevron button */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        backgroundColor: isOpen ? '#000000' : '#f3f3f3',
                        color: isOpen ? '#d1ffca' : '#000000',
                        borderColor: isOpen ? '#000000' : 'rgba(0,0,0,0.05)',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border shadow-sm will-change-transform"
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </button>

                  {/* Expanding answer panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { type: 'spring', stiffness: 280, damping: 30 },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="border-t border-[#f3f3f3]"
                          style={{ padding: 'clamp(16px, 3vw, 32px) clamp(20px, 3.5vw, 36px) clamp(24px, 3.5vw, 36px)' }}
                        >
                          {/* Answer body */}
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-[15px] sm:text-[16px] leading-[1.7] text-[#444444] font-normal pl-0 sm:pl-[60px]"
                          >
                            {faq.answer}
                          </motion.p>

                          {/* Checklist highlights */}
                          <div className="pl-0 sm:pl-[60px] grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                            {faq.highlights.map((point, hIdx) => (
                              <motion.div
                                key={hIdx}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 + hIdx * 0.06, duration: 0.3 }}
                                className="p-3 sm:p-3.5 rounded-[12px] bg-[#f9faf7] border border-black/[0.04] flex items-start gap-2.5 text-[12px] sm:text-[13px] text-[#000000] font-medium"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#000000] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact assistance footer card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 md:mt-16 rounded-[24px] bg-white border border-black/[0.06] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ padding: 'clamp(24px, 3.5vw, 40px)' }}
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-full bg-[#d1ffca] text-[#000000] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[#000000] text-[15px] sm:text-[16px]">Have an additional question?</p>
              <p className="text-[12px] sm:text-[13px] text-[#979797]">Our admissions team replies within 2 hours.</p>
            </div>
          </div>

          <a
            href="mailto:support@dayos.ai"
            className="btn-dark-filled text-[13px] sm:text-[14px] py-3 px-6 rounded-[8px] w-full sm:w-auto justify-center"
          >
            Ask Admissions Team →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
