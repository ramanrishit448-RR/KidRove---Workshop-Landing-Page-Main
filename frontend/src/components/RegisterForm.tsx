import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

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
            ? result.errors.map((e: any) => e.message).join(', ')
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
    <section id="register" className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-pink-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-xl shadow-purple-150/40">
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              /* SUCCESS STATE */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="bg-emerald-100 p-4 rounded-full text-emerald-600"
                  >
                    <CheckCircle2 className="w-16 h-16" />
                  </motion.div>
                </div>
                
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 mb-3">
                  Seats Reserved! 🎉
                </h3>
                <p className="text-sm sm:text-base text-kidrove-text-muted leading-relaxed mb-8">
                  Thank you for registering. Our team will contact you within 24 hours on your email/phone with access details and preparation materials.
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="bg-purple-100 text-kidrove-purple px-6 py-2.5 rounded-full font-bold text-sm hover:bg-purple-200 transition-all cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              /* FORM STATE */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-kidrove-purple">
                    Join Now
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-kidrove-text-dark mt-1">
                    Book Your Spot
                  </h3>
                  <p className="text-sm text-kidrove-text-muted mt-2">
                    Fill out the form below to register your interest and save a seat.
                  </p>
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start space-x-3 text-rose-800 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Registration Failed</p>
                      <p className="text-xs text-rose-600/90 mt-0.5">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                {/* Form Input fields */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-extrabold text-kidrove-text-dark uppercase tracking-wider mb-2">
                      Child's Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        disabled={status === 'loading'}
                        placeholder="John Doe"
                        className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border rounded-2xl text-slate-800 text-sm transition-all outline-none focus:bg-white ${
                          errors.name
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 focus:border-kidrove-purple focus:ring-1 focus:ring-kidrove-purple shadow-sm'
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

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-extrabold text-kidrove-text-dark uppercase tracking-wider mb-2">
                      Parent's Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        disabled={status === 'loading'}
                        placeholder="parent@example.com"
                        className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border rounded-2xl text-slate-800 text-sm transition-all outline-none focus:bg-white ${
                          errors.email
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 focus:border-kidrove-purple focus:ring-1 focus:ring-kidrove-purple shadow-sm'
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

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-extrabold text-kidrove-text-dark uppercase tracking-wider mb-2">
                      Contact Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        disabled={status === 'loading'}
                        placeholder="9876543210"
                        className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border rounded-2xl text-slate-800 text-sm transition-all outline-none focus:bg-white ${
                          errors.phone
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 focus:border-kidrove-purple focus:ring-1 focus:ring-kidrove-purple shadow-sm'
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

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-kidrove-purple to-kidrove-purple-dark text-white py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-purple-200/50 hover:shadow-purple-300/80 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:-translate-y-0 disabled:shadow-none transition-all flex items-center justify-center space-x-2 mt-8 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Registration</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
