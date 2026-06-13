import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

interface FAQItem {
  question: string;
  answer: string;
  emoji: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      emoji: '🎒',
      question: 'Does my child need any prior experience?',
      answer: 'Absolutely not! We welcome complete beginners. Our mentors start from scratch using visual tools, games, and stories — so every child feels like a winner from Day 1. If your kid can use a mouse and loves exploring, they\'re ready!',
    },
    {
      emoji: '📹',
      question: 'How are the online classes conducted?',
      answer: 'Live interactive Zoom sessions led by Kids Lab-certified educators who specialize in teaching tech to kids. Each class includes live coding, fun quizzes, breakout activities, and hands-on simulator time. With max 15 students per mentor, every child gets personal attention.',
    },
    {
      emoji: '💻',
      question: 'What does my child need to participate?',
      answer: 'Just a laptop or desktop (Windows, Mac, or Chromebook) with webcam, microphone, and stable internet. All tools are 100% web-based — no complicated installs, no expensive hardware. We\'ll send a simple setup guide before the first class.',
    },
    {
      emoji: '🏆',
      question: 'Will my child get a certificate and recordings?',
      answer: 'Yes! Students who complete their capstone project receive a verified Kids Lab AI & Robotics Certificate of Excellence — a great addition to their learning portfolio. Every session is recorded and available within 24 hours, so missing a day is never a problem.',
    },
    {
      emoji: '💰',
      question: 'Is the ₹2,999 fee really all-inclusive?',
      answer: 'Yes — no hidden costs! The fee covers all 8 live sessions, simulator access, study materials, project mentorship, class recordings, and the completion certificate. We believe quality STEM education should be accessible to every family.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Parents Ask Us"
          badgeEmoji="🙋"
          title="Frequently Asked"
          highlight="Questions"
          description="We know choosing the right program for your child is a big decision. Here are honest answers to help you feel confident."
          accent="pink"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-purple-200 dark:border-purple-800/50 bg-purple-50/20 dark:bg-purple-900/20 shadow-md shadow-purple-100/30 dark:shadow-purple-900/20'
                    : 'border-slate-100 dark:border-slate-700/50 bg-white dark:bg-slate-800/40 hover:border-purple-100 dark:hover:border-purple-800/30 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left font-display font-bold text-base sm:text-lg text-kidrove-text-dark cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <motion.span
                      animate={isOpen ? { rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                      className="text-xl shrink-0"
                    >
                      {faq.emoji}
                    </motion.span>
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors hidden sm:block ${isOpen ? 'text-kidrove-purple' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                    className="shrink-0 text-slate-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-kidrove-text-muted leading-relaxed border-t border-purple-50/50 dark:border-purple-900/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-100 dark:border-purple-800/30"
        >
          <p className="text-sm text-kidrove-text-muted">
            Still curious? Our friendly team is one message away!{' '}
            <a href="mailto:support@kidslab.com" className="text-kidrove-purple font-bold hover:underline">
              support@kidslab.com
            </a>{' '}
            or call{' '}
            <span className="font-bold text-kidrove-text-dark">+91 98765 43210</span>
            {' '}— we love chatting with parents! 💬
          </p>
        </motion.div>

      </div>
    </section>
  );
}
