import { useState } from 'react';

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestAccessModal({ isOpen, onClose }: RequestAccessModalProps) {
  const [email, setEmail] = useState('');
  const [childName, setChildName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-[540px] bg-[#000000] p-8 md:p-12 rounded-[24px] border border-[#262626] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#9a9a9a] hover:text-white transition-colors bg-transparent border-none cursor-pointer text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="label-amber">SUMMER BATCH RESERVATION</div>
              <h2 className="text-[36px] font-normal text-white tracking-tight leading-tight">
                Reserve your child's spot.
              </h2>
              <p className="text-body-light text-[#bdbdbd]">
                Enter your contact email and child's name to hold a seat in the July cohort.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 pt-2">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.35px] text-[#9a9a9a] mb-2 font-semibold">
                  CHILD'S NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full bg-[#111111] text-white px-5 py-4 rounded-[16px] border border-[#262626] focus:border-[#8052ff] focus:outline-none transition-colors text-[16px] font-light"
                />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-[0.35px] text-[#9a9a9a] mb-2 font-semibold">
                  PARENT'S EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111111] text-white px-5 py-4 rounded-[16px] border border-[#262626] focus:border-[#8052ff] focus:outline-none transition-colors text-[16px] font-light"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-electric-iris w-full py-4 text-[14px]"
                >
                  SUBMIT ENROLLMENT REQUEST
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6 py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#8052ff]/20 text-[#8052ff] flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h2 className="text-[36px] font-normal text-white tracking-tight">
              Seat Reserved.
            </h2>
            <p className="text-body-light text-[#bdbdbd]">
              Thank you! Our admissions team will email <span className="text-white font-normal">{email}</span> within 24 hours with class schedules and onboarding details.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-electric-iris px-8"
              >
                RETURN TO SITE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
