import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Gift, ArrowUp } from 'lucide-react';

export const SurpriseEnding = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        {!showSurprise ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <motion.button onClick={() => setShowSurprise(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group relative px-12 py-6 bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37] rounded-full text-white font-serif text-2xl md:text-3xl font-bold shadow-lg hover:shadow-2xl hover:shadow-[#DC143C]/50 transition-all custom-cursor-heart">
              <span className="relative z-10 flex items-center space-x-3">
                <Gift className="w-8 h-8" />
                <span>P.S. One More Thing...</span>
              </span>
              <motion.div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.button>
            <motion.p className="mt-6 text-gray-500 text-sm" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>Click to reveal the surprise</motion.p>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Confetti />

              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring', stiffness: 200 }} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 md:p-12 border-4 border-[#D4AF37] mb-8">
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Thank You for Being You! 🌟</h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">This is just the beginning of an extraordinary year. Every moment with you is a gift, and watching you shine brings joy to everyone around you.</p>
                <div className="inline-block bg-[#DC143C]/20 border border-[#DC143C] rounded-lg px-6 py-4">
                  <p className="text-[#FFB6C1] text-lg font-serif italic">"The best is yet to come, and it's going to be legendary."</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="space-y-4">
                <button onClick={scrollToTop} className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white transition-all custom-cursor-heart">
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  <span>Restart the Experience</span>
                </button>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-gray-500 text-sm">Made with ❤️ for Helina Solomon</p>
                  <p className="text-gray-600 text-xs mt-2">© {new Date().getFullYear()} • A Birthday to Remember</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

const Confetti = () => {
  const colors = ['#DC143C', '#FFB6C1', '#D4AF37', '#22c55e', '#eab308'];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <motion.div key={i} className="absolute w-3 h-3 rounded-full" style={{ backgroundColor: colors[i % colors.length], left: `${Math.random() * 100}%`, top: '-10%' }} initial={{ y: 0, opacity: 1, rotate: 0 }} animate={{ y: '120vh', opacity: [1, 1, 0], rotate: 720 * (Math.random() > 0.5 ? 1 : -1), x: (Math.random() - 0.5) * 100 }} transition={{ duration: 3 + Math.random() * 2, delay: Math.random(), ease: 'easeIn' }} />
      ))}
    </div>
  );
};
