import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Crown } from 'lucide-react';

interface FavoriteChildProps {
  image?: string;
}

// Confetti component
const Confetti = () => {
  const colors = ['#22c55e', '#eab308', '#ef4444']; // Ethiopian flag colors

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() - 0.5) * 30;
        const duration = 2 + Math.random() * 2;
        const delay = Math.random() * 0.5;

        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: color,
              left: `${startX}%`,
              top: '-5%',
            }}
            initial={{ y: 0, opacity: 1, rotate: 0 }}
            animate={{
              y: '110vh',
              x: [`0%`, `${endX - startX}%`],
              opacity: [1, 1, 0],
              rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
            }}
            transition={{
              duration,
              delay,
              ease: 'easeIn',
            }}
          />
        );
      })}
    </div>
  );
};

// Crown SVG animation
const AnimatedCrown = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0, rotate: -20 }}
      animate={{
        y: 0,
        opacity: 1,
        rotate: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        duration: 1,
      }}
      className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{
          rotate: [-5, 5, -5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Crown className="w-20 h-20 md:w-32 md:h-32 text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
      </motion.div>

      {/* Sparkles around crown */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
          style={{
            left: `${50 + Math.cos((i * Math.PI) / 3) * 60}%`,
            top: `${50 + Math.sin((i * Math.PI) / 3) * 60}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
};

export const FavoriteChild = ({
  image = '/images/favorite-child.jpg',
}: FavoriteChildProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden"
    >
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Confetti animation */}
      {showConfetti && <Confetti />}

      <div className="relative max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => {
            setTimeout(() => setShowConfetti(true), 500);
          }}
          className="relative"
        >
          {/* Crown animation */}
          {isInView && <AnimatedCrown />}

          {/* Main photo with spotlight effect */}
          <div className="relative mx-auto max-w-2xl">
            {/* Spotlight glow */}
            <div className="absolute inset-0 bg-gradient-radial from-[#DC143C]/30 via-transparent to-transparent blur-3xl" />

            {/* Photo/Video container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border-4 border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.4)]"
            >
              {image?.endsWith('.mp4') ? (
                <video
                  src={image}
                  className="w-full h-auto object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <img
                  src={image}
                  alt="Favorite Child Energy"
                  className="w-full h-auto object-cover"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Text overlays */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12 space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              The Favorite Child Energy
            </h2>

            <div className="flex items-center justify-center space-x-4">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="text-4xl md:text-5xl"
              >
                👑
              </motion.span>
              <p className="text-2xl md:text-3xl font-serif text-[#FFB6C1] italic">
                is REAL
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              When your name is literally on everything in the house because you're
              just THAT special. Royalty recognizes royalty.
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            />

            {/* Fun caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="text-[#D4AF37] text-base md:text-lg font-medium"
            >
              "Not the favorite child" she said... while her name decorates the palace
            </motion.p>
          </motion.div>

          {/* Floating sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl md:text-3xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
