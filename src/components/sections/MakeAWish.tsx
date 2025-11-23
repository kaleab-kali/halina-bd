import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export const MakeAWish = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [showConfetti, setShowConfetti] = useState(false);

  const blowCandles = () => {
    candles.forEach((_, i) => {
      setTimeout(() => {
        setCandles((prev) => prev.map((lit, idx) => (idx === i ? false : lit)));
      }, i * 100);
    });
    setTimeout(() => setShowConfetti(true), 600);
  };

  const allOut = candles.every((c) => !c);

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden flex items-center justify-center">
      {showConfetti && <Confetti />}

      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className="text-[#D4AF37] text-sm md:text-base tracking-[0.3em] uppercase mb-4">Ethiopian Coffee Ceremony Vibes</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12">Make a Wish</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.8 }} className="relative">
          <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
            <defs>
              <linearGradient id="cakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DC143C" />
                <stop offset="100%" stopColor="#a00f2b" />
              </linearGradient>
            </defs>

            <ellipse cx="150" cy="160" rx="120" ry="30" fill="#8b4513" opacity="0.3" />
            <rect x="50" y="100" width="200" height="60" rx="10" fill="url(#cakeGradient)" />
            <rect x="50" y="90" width="200" height="15" rx="5" fill="#FFB6C1" />

            {[70, 110, 150, 190, 230].map((x, i) => (
              <g key={i}>
                <rect x={x - 3} y="70" width="6" height="20" fill="#fff" />
                {candles[i] && (
                  <motion.g animate={{ opacity: [1, 0.6, 1], y: [0, -2, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
                    <ellipse cx={x} cy="68" rx="4" ry="6" fill="#ff6b00" opacity="0.8" />
                    <ellipse cx={x} cy="66" rx="3" ry="5" fill="#ffaa00" />
                  </motion.g>
                )}
              </g>
            ))}
          </svg>

          {!allOut ? (
            <motion.button onClick={blowCandles} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#a00f2b] text-white font-serif text-xl rounded-full hover:shadow-lg hover:shadow-[#DC143C]/50 transition-all custom-cursor-heart">
              Click to Blow Out the Candles
            </motion.button>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#DC143C] mt-8 mb-4">Happy Birthday, Helina! 🎉</h3>
              <p className="text-gray-300 text-xl">May all your wishes come true</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Confetti = () => {
  const colors = ['#DC143C', '#FFB6C1', '#D4AF37', '#22c55e', '#eab308', '#ef4444'];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <motion.div key={i} className="absolute w-2 h-2" style={{ backgroundColor: colors[i % colors.length], left: `${Math.random() * 100}%`, top: '-5%' }} initial={{ y: 0, opacity: 1, rotate: 0 }} animate={{ y: '110vh', opacity: [1, 1, 0], rotate: 360 * (Math.random() > 0.5 ? 1 : -1) }} transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 0.5, ease: 'easeIn' }} />
      ))}
    </div>
  );
};
