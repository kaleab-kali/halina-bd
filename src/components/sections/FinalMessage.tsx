import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EthiopianPattern1 } from '../../assets/patterns/EthiopianPattern1';

interface FinalMessageProps {
  message?: string;
  senderName?: string;
}

export const FinalMessage = ({
  message = "Here's to another year of being absolutely legendary. May this year bring you endless joy, success in everything you pursue, and all the happiness you deserve. You inspire everyone around you with your intelligence, grace, and determination. Keep shining bright, Helina!",
  senderName = "Your Biggest Fan"
}: FinalMessageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-5"><EthiopianPattern1 opacity={0.3} /></div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">The Prescription</h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]" />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, rotateX: -10 }} animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }}>
          <div className="relative">
            <motion.div initial={{ y: -20, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.5 }} className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#DC143C] rounded-full flex items-center justify-center border-4 border-[#0a0a0a] z-10">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="10" y="15" width="30" height="25" rx="3" fill="white" opacity="0.3" />
                <circle cx="20" cy="27" r="4" fill="white" />
                <circle cx="30" cy="27" r="4" fill="white" />
                <path d="M15 12 L20 8 L25 10 L30 8 L35 12" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-[#DC143C]">
              <div className="border-b-2 border-gray-300 pb-6 mb-8">
                <h3 className="text-3xl md:text-4xl font-serif text-[#DC143C] font-bold">℞ Birthday Prescription</h3>
                <p className="text-gray-600 text-sm mt-2">Official Dosage Instructions</p>
              </div>

              <div className="space-y-6 text-left font-mono text-gray-800 mb-8">
                <div><span className="font-bold text-[#DC143C]">To:</span> Helina Solomon</div>
                <div><span className="font-bold text-[#DC143C]">From:</span> {senderName}</div>
                <div className="border-t-2 border-dashed border-gray-300 pt-6"><span className="font-bold text-[#DC143C]">Prescription:</span></div>
                <div className="pl-4 space-y-3">
                  <div>✦ One Amazing Year Ahead</div>
                  <div>✦ 365 Days of Happiness</div>
                  <div>✦ Unlimited Success & Joy</div>
                </div>
                <div><span className="font-bold text-[#DC143C]">Dosage:</span> Daily, with celebration</div>
                <div><span className="font-bold text-[#DC143C]">Refills:</span> ∞ Unlimited</div>
              </div>

              <div className="bg-gradient-to-r from-[#DC143C]/10 via-[#FFB6C1]/10 to-[#D4AF37]/10 rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed font-sans">{message}</p>
              </div>

              <div className="border-t-2 border-gray-300 pt-6">
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Side Effects May Include:</p>
                    <p className="text-sm text-gray-600 italic">Uncontrollable smiling, increased success,<br />and being even more amazing than you already are.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-serif text-[#DC143C] italic mb-1">{senderName}</div>
                    <div className="text-xs text-gray-500">Specialist in Celebrating Legends</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center text-gray-500 text-sm">
                <p>🌹 Happy Birthday, Helina 🌹</p>
                <p className="mt-2 text-xs">Generated with [Claude Code]</p>
              </div>
            </div>
          </div>
        </motion.div>

        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 bg-[#D4AF37] rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 3 }} />
        ))}
      </div>
    </section>
  );
};
