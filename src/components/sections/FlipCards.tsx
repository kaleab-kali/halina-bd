import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface Card {
  front: string;
  back: string;
}

const cards: Card[] = [
  { front: '?', back: 'Your Habesha dress game is unmatched' },
  { front: '?', back: 'Pharmacist by day, fashion icon always' },
  { front: '?', back: 'The favorite child for a reason' },
  { front: '?', back: 'Gym motivation + brains = unstoppable' },
  { front: '?', back: 'Ethiopian pride personified' },
  { front: '?', back: 'Style that turns heads' },
  { front: '?', back: 'Intelligence meets elegance' },
  { front: '?', back: 'The definition of grace' },
  { front: '?', back: 'Beauty, brains, and determination' },
  { front: '?', back: 'Simply extraordinary in every way' },
];

export const FlipCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#FFB6C1] text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Reasons to Celebrate
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Why You're Amazing
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]" />
          <p className="text-gray-400 text-lg mt-6">
            Tap each card to reveal the truth
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <FlipCard key={index} card={card} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual flip card
const FlipCard = ({
  card,
  index,
  isInView,
}: {
  card: Card;
  index: number;
  isInView: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const gradients = [
    'from-[#DC143C] to-[#a00f2b]',
    'from-[#FFB6C1] to-[#ff8fab]',
    'from-[#D4AF37] to-[#b8941f]',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -20 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="aspect-square perspective-1000"
    >
      <motion.div
        className="relative w-full h-full cursor-pointer custom-cursor-heart preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br ${gradient} p-6 flex items-center justify-center border-2 border-white/20 shadow-lg`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-white/90 mb-2">
              {card.front}
            </div>
            <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider">
              Tap to reveal
            </div>
          </div>

          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${(i * 23) % 100}%`,
                  top: `${(i * 37) % 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-4 flex items-center justify-center border-2 shadow-lg`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: gradient.includes('DC143C')
              ? '#DC143C'
              : gradient.includes('FFB6C1')
              ? '#FFB6C1'
              : '#D4AF37',
          }}
        >
          <p className="text-white text-center text-sm md:text-base font-medium leading-relaxed">
            {card.back}
          </p>

          {/* Sparkle effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? [0, 1, 0] : 0 }}
            transition={{ duration: 1 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + (i * 15) % 60}%`,
                  top: `${20 + (i * 20) % 60}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
