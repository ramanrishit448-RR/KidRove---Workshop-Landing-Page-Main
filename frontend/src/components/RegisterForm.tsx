import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
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
    <section id="register" className="py-24 md:py-36 bg-[#000000] relative overflow-hidden">
      <Confetti active={status === 'success'} />

      <div className="max-w-[720px] mx-auto px-6 md:px-12 space-y-12">

        {/* Urgency Badge */}
        <div className="flex items-center justify-center">
          <div className="label-amber flex items-center gap-2 border border-[#ffb829]/30 px-5 py-2 rounded-full">
            <span>🔥</span>
            ONLY 8 SPOTS LEFT IN JULY BATCH
          </div>
        </div>

        <div className="space-y-4 text-center">
          <h2 className="text-heading-lg-dala text-white tracking-[-0.04em]">
            Reserve your child's spot.
          </h2>
          <p className="text-body-light text-[#bdbdbd] max-w-[540px] mx-auto">
            Takes less than 60 seconds. No payment needed now — reserve a place in the next cohort.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-12 space-y-6 bg-[#0c0c0c] p-8 rounded-[24px] border border-[#262626]">
            <div className="w-16 h-16 rounded-full bg-[#8052ff]/20 text-[#8052ff] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-[36px] font-normal text-white tracking-tight">
              You're In! Welcome. 🎉
            </h3>
            <p className="text-body-light text-[#bdbdbd] max-w-[480px] mx-auto">
              Our team will reach out within 24 hours with onboarding details, class schedule, and a fun activity kit.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-electric-iris px-8"
            >
              REGISTER ANOTHER CHILD
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#000000] p-8 md:p-10 rounded-[24px] border border-[#1f1f1f]">
            {status === 'error' && (
              <div className="p-4 rounded-[16px] bg-red-950/40 border border-red-800/50 flex items-start gap-3 text-red-200 text-sm">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Submission failed</p>
                  <p className="text-xs text-red-300 mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <div>
              <label className="block text-[12px] uppercase tracking-[0.35px] text-[#9a9a9a] mb-2 font-semibold">
                CHILD'S NAME
              </label>
              <input
                type="text"
                disabled={status === 'loading'}
                placeholder="e.g. Aarav Sharma"
                className="w-full bg-[#111111] text-white px-5 py-4 rounded-[16px] border border-[#262626] focus:border-[#8052ff] focus:outline-none transition-colors text-[16px] font-light"
                {...register('name')}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-[12px] uppercase tracking-[0.35px] text-[#9a9a9a] mb-2 font-semibold">
                PARENT'S EMAIL
              </label>
              <input
                type="email"
                disabled={status === 'loading'}
                placeholder="parent@example.com"
                className="w-full bg-[#111111] text-white px-5 py-4 rounded-[16px] border border-[#262626] focus:border-[#8052ff] focus:outline-none transition-colors text-[16px] font-light"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-[12px] uppercase tracking-[0.35px] text-[#9a9a9a] mb-2 font-semibold">
                CONTACT PHONE
              </label>
              <input
                type="tel"
                disabled={status === 'loading'}
                placeholder="9876543210"
                className="w-full bg-[#111111] text-white px-5 py-4 rounded-[16px] border border-[#262626] focus:border-[#8052ff] focus:outline-none transition-colors text-[16px] font-light"
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1.5">{errors.phone.message}</p>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-electric-iris w-full py-4 text-[14px]"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    SUBMITTING REGISTRATION...
                  </span>
                ) : (
                  'RESERVE MY CHILD\'S SPOT'
                )}
              </button>
            </div>

            <p className="text-center text-[12px] text-[#9a9a9a] pt-2">
              🔒 Information is kept strictly private. No spam ever.
            </p>
          </form>
        )}

      </div>
    </section>
  );
}
