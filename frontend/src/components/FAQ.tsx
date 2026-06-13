import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What are the prerequisites for this workshop?',
      answer: 'No prior programming, robotics, or engineering experience is required! We start from absolute scratch and build up the basics step-by-step. All concepts are taught in a fun, kid-friendly visual manner.',
    },
    {
      question: 'How are the online classes conducted?',
      answer: 'Classes are conducted live over Zoom by experienced educators who specialize in tech pedagogy for kids. The sessions are fully interactive with live coding help, quizzes, and digital simulators. Batch sizes are kept small (maximum 15 students per mentor) to ensure personalized attention.',
    },
    {
      question: 'What hardware/software is needed for the program?',
      answer: 'Students only need a laptop or desktop computer (Windows, macOS, or ChromeOS) with a functioning webcam, microphone, and a stable internet connection. All simulator software, editor tools, and resources are web-based, free, and require no advanced installation.',
    },
    {
      question: 'Will students receive certificates and class recordings?',
      answer: 'Yes! Upon successful completion of the capstone project, students receive a verified Kidrove AI & Robotics Certificate of Excellence. Additionally, recordings of every session are uploaded to the student portal within 24 hours, so students can review classes if they miss a day.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-kidrove-pink">
            Got Questions?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-kidrove-text-dark mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-kidrove-text-muted">
            Find answers to common questions about the workshop structure, tools, and requirements.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-kidrove-pink to-kidrove-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-purple-200 bg-purple-50/20 shadow-md shadow-purple-100/30'
                    : 'border-slate-100 bg-white hover:border-purple-100 hover:shadow-sm'
                }`}
              >
                {/* Header/Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left font-display font-bold text-base sm:text-lg text-kidrove-text-dark cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-kidrove-purple' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-kidrove-text-muted leading-relaxed border-t border-purple-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-sm text-kidrove-text-muted">
            Still have questions? We're here to help! Contact our support team at{' '}
            <a href="mailto:support@kidrove.com" className="text-kidrove-purple font-bold hover:underline">
              support@kidrove.com
            </a>{' '}
            or call us at{' '}
            <span className="font-bold text-kidrove-text-dark">+91 98765 43210</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
