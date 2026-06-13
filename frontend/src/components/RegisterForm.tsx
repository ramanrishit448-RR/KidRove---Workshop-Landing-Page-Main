import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Loader2, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import Confetti from './ui/Confetti';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required' })
    .regex(/^[0-9+\-\s()]{10,15}$/, {
      message: 'Please enter a valid 10-15 digit phone number',
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          workshop: 'AI & Robotics Summer Workshop',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
        setErrorMessage(
          result.errors
            ? result.errors.map((e: { message: string }) => e.message).join(', ')
            : result.message || 'Submission failed'
        );
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setErrorMessage(
        'Unable to connect to the registration server. Please check your connection and try again.'
      );
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
      <Confetti active={status === 'success'} />

      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-purple-200/30 dark:bg-purple-900/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-pink-100/30 dark:bg-pink-900/10 rounded-full blur-3xl -z-10" />

      {/* Floating emojis */}
      <motion.span
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-[15%] text-3xl hidden md:block pointer-events-none"
        aria-hidden="true"
      >
        🎉
      </motion.span>
      <motion.span
        animate={{ y: [0, 12, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-32 left-[12%] text-2xl hidden md:block pointer-events-none"
        aria-hidden="true"
      >
        ✨
      </motion.span>

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ scale: { duration: 2, repeat: Infinity } }}
          className="mb-6 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-800/40 text-amber-800 dark:text-amber-200 px-4 py-2.5 rounded-full text-sm font-bold shadow-sm"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🔥
          </motion.span>
          Only 8 spots left in the July batch — enroll before they're gone!
        </motion.div>

        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-purple-100 dark:border-slate-700/50 shadow-xl shadow-purple-150/40 dark:shadow-slate-950/50">

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: [0, 1.3, 1], rotate: 0 }}
                    transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
                    className="bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-full text-emerald-600"
                  >
                    <CheckCircle2 className="w-16 h-16" />
                  </motion.div>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-slate-100 mb-3"
                >
                  You're In! Welcome, Future Innovator! 🎉🚀
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm sm:text-base text-kidrove-text-muted leading-relaxed mb-8"
                >
                  Amazing choice! Our team will reach out within 24 hours with onboarding details,
                  class schedule, and a fun pre-workshop activity kit to get your child excited!
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStatus('idle')}
                  className="bg-purple-100 dark:bg-purple-900/40 text-kidrove-purple px-6 py-2.5 rounded-full font-bold text-sm hover:bg-purple-200 dark:hover:bg-purple-900/60 transition-all cursor-pointer"
                >
                  Register Another Child
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-8">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-kidrove-purple mb-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Secure Your Seat
                  </motion.span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-kidrove-text-dark mt-1">
                    Start Your Child's Tech Adventure
                  </h3>
                  <p className="text-sm text-kidrove-text-muted mt-2">
                    Takes less than 60 seconds. No payment needed now — just reserve a spot!
                  </p>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/40 rounded-2xl flex items-start space-x-3 text-rose-800 dark:text-rose-200 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Oops! Something went wrong</p>
                      <p className="text-xs text-rose-600/90 dark:text-rose-300/90 mt-0.5">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-xs font-extrabold text-kidrove-text-dark uppercase tracking-wider mb-2">
                      Child's Name 👦👧
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        disabled={status === 'loading'}
                        placeholder="e.g. Aarav Sharma"
                        className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50/50 dark:bg-slate-900/50 border rounded-2xl text-slate-800 dark:text-slate-100 text-sm transition-all outline-none focus:bg-white dark:focus:bg-slate-900 ${
                          errors.name
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-600 focus:border-kidrove-purple focus:ring-1 focus:ring-kidrove-purple shadow-sm'
                        }`}
                        {...register('name')}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-rose-600 font-medium mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-kidrove-text-dark uppercase tracking-wider mb-2">
                      Parent's Email 📧
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        disabled={status === 'loading'}
                        placeholder="parent@example.com"
                        className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50/50 dark:bg-slate-900/50 border rounded-2xl text-slate-800 dark:text-slate-100 text-sm transition-all outline-none focus:bg-white dark:focus:bg-slate-900 ${
                          errors.email
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-600 focus:border-kidrove-purple focus:ring-1 focus:ring-kidrove-purple shadow-sm'
                        }`}
                        {...register('email')}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-rose-600 font-medium mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-kidrove-text-dark uppercase tracking-wider mb-2">
                      Contact Phone 📱
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        disabled={status === 'loading'}
                        placeholder="9876543210"
                        className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50/50 dark:bg-slate-900/50 border rounded-2xl text-slate-800 dark:text-slate-100 text-sm transition-all outline-none focus:bg-white dark:focus:bg-slate-900 ${
                          errors.phone
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-600 focus:border-kidrove-purple focus:ring-1 focus:ring-kidrove-purple shadow-sm'
                        }`}
                        {...register('phone')}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-rose-600 font-medium mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-kidrove-purple to-kidrove-pink text-white py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-purple-200/50 dark:shadow-purple-900/30 hover:shadow-purple-300/80 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none transition-all flex items-center justify-center space-x-2 mt-8 cursor-pointer group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending your application...</span>
                      </>
                    ) : (
                      <>
                        <span>Reserve My Child's Spot</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-kidrove-text-muted mt-3">
                    🔒 Your information is safe with us. No spam, ever.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
