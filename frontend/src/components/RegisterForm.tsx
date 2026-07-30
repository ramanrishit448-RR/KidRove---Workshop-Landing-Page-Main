import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import Confetti from './ui/Confetti';
import { API_BASE_URL } from '@/lib/api';

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
      const response = await fetch(`${API_BASE_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          workshop: 'AI & Robotics Summer Workshop',
        }),
      });

      const result = await response.json().catch(() => ({}));

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
    <section id="register" className="section-saas bg-[#e5e5e5]">
      <Confetti active={status === 'success'} />

      <div className="container-saas">
        <div className="max-w-[640px] mx-auto">

          {/* Urgency tag — centered */}
          <div className="flex items-center justify-center mb-6">
            <div className="tag-voltage font-mono text-[12px] flex items-center gap-2">
              <span>🔥</span>
              ONLY 8 SPOTS LEFT IN JULY BATCH — RESERVE NOW
            </div>
          </div>

          {/* Section header — centered */}
          <div className="text-center section-header-spacing">
            <h2 className="text-display-lg-condensed mb-4">
              RESERVE YOUR CHILD'S SPOT.
            </h2>
            <p className="text-body max-w-[480px] mx-auto">
              Takes less than 60 seconds. No payment needed now — reserve a spot in the upcoming cohort!
            </p>
          </div>

          {status === 'success' ? (
            <div className="card-flat-white p-8 sm:p-12 text-center flex flex-col items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-[#d1ffca] text-[#000000] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-condensed-display text-[#000000] leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
                YOU'RE IN! WELCOME FUTURE INNOVATOR! 🎉
              </h3>
              <p className="text-body max-w-[460px]">
                Our team will reach out within 24 hours with onboarding details, class schedule, and a fun activity kit.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-dark-filled"
              >
                REGISTER ANOTHER CHILD
              </button>
            </div>
          ) : (
            <div className="card-flat-white p-8 sm:p-12">
              {status === 'error' && (
                <div className="p-4 rounded-[10px] bg-red-100 border border-red-300 flex items-start gap-3 text-red-900 text-sm mb-6">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Submission Error</p>
                    <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div>
                  <label className="block font-mono-tag uppercase text-[#979797] mb-2 font-medium">
                    CHILD'S NAME 👦👧
                  </label>
                  <input
                    type="text"
                    disabled={status === 'loading'}
                    placeholder="e.g. Aarav Sharma"
                    className="input-flat-mist w-full"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 font-medium mt-2">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono-tag uppercase text-[#979797] mb-2 font-medium">
                    PARENT'S EMAIL 📧
                  </label>
                  <input
                    type="email"
                    disabled={status === 'loading'}
                    placeholder="parent@example.com"
                    className="input-flat-mist w-full"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 font-medium mt-2">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono-tag uppercase text-[#979797] mb-2 font-medium">
                    CONTACT PHONE 📱
                  </label>
                  <input
                    type="tel"
                    disabled={status === 'loading'}
                    placeholder="9876543210"
                    className="input-flat-mist w-full"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 font-medium mt-2">{errors.phone.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-dark-filled w-full justify-center py-4 text-[16px] mt-2"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin text-[#d1ffca]" />
                      SENDING APPLICATION...
                    </span>
                  ) : (
                    <>
                      <span>RESERVE MY CHILD'S SPOT</span>
                      <ArrowUpRight className="w-5 h-5 text-[#d1ffca]" />
                    </>
                  )}
                </button>

                <p className="text-center font-mono-tag text-[#979797]">
                  🔒 INFORMATION IS SAFE WITH US. NO SPAM EVER.
                </p>
              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
