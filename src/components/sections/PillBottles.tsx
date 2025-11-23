import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart } from 'lucide-react';

interface Ingredient {
  name: string;
  dosage: string;
  color: string;
}

const ingredients: Ingredient[] = [
  { name: 'Intelligence', dosage: '100mg', color: '#DC143C' },
  { name: 'Style', dosage: 'Unlimited Dose', color: '#FFB6C1' },
  { name: 'Favorite Child Energy', dosage: 'Daily', color: '#D4AF37' },
  { name: 'Gym Dedication', dosage: 'Morning Routine', color: '#DC143C' },
  { name: 'Cultural Pride', dosage: 'Constant', color: '#D4AF37' },
  { name: 'Beauty', dosage: 'Natural', color: '#FFB6C1' },
];

// Floating hearts animation
const FloatingHearts = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-10%',
          }}
          initial={{ y: 0, opacity: 1, scale: 0 }}
          animate={{
            y: -300,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.5],
            x: (Math.random() - 0.5) * 50,
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: Math.random() * 0.5,
            ease: 'easeOut',
          }}
        >
          <Heart className="w-6 h-6 fill-[#FFB6C1] text-[#FFB6C1]" />
        </motion.div>
      ))}
    </>
  );
};

// Pill bottle component
const PillBottle = ({ ingredient, index }: { ingredient: Ingredient; index: number }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 border-2 cursor-pointer custom-cursor-heart overflow-hidden"
        style={{ borderColor: ingredient.color }}
      >
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={isActive ? { opacity: [0, 0.3, 0] } : {}}
          transition={{ duration: 1 }}
          style={{
            background: `radial-gradient(circle at center, ${ingredient.color}40 0%, transparent 70%)`,
          }}
        />

        {/* Pill bottle illustration */}
        <div className="relative mb-4">
          <svg
            width="100"
            height="120"
            viewBox="0 0 100 120"
            className="mx-auto"
            fill="none"
          >
            {/* Bottle body */}
            <rect
              x="25"
              y="30"
              width="50"
              height="80"
              rx="10"
              fill={ingredient.color}
              opacity="0.2"
              stroke={ingredient.color}
              strokeWidth="2"
            />
            {/* Bottle cap */}
            <rect
              x="35"
              y="20"
              width="30"
              height="15"
              rx="5"
              fill={ingredient.color}
              stroke={ingredient.color}
              strokeWidth="2"
            />
            {/* Label */}
            <rect
              x="30"
              y="50"
              width="40"
              height="35"
              rx="3"
              fill="white"
              opacity="0.9"
            />

            {/* Pills inside bottle */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={40 + (i % 2) * 20}
                cy={75 + Math.floor(i / 2) * 10}
                r="4"
                fill={ingredient.color}
                initial={{ y: 0 }}
                animate={
                  isActive
                    ? {
                        y: [-10, -20, -30],
                        opacity: [1, 1, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Ingredient details */}
        <div className="text-center space-y-2">
          <h3
            className="text-xl md:text-2xl font-serif font-bold"
            style={{ color: ingredient.color }}
          >
            {ingredient.name}
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            <span className="font-mono">{ingredient.dosage}</span>
          </p>
          <div className="pt-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Click to activate
            </span>
          </div>
        </div>

        {/* Floating hearts on activation */}
        {isActive && (
          <div className="absolute inset-0 pointer-events-none">
            <FloatingHearts />
          </div>
        )}

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%', y: '-100%' }}
          whileHover={{ x: '100%', y: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const PillBottles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            Pharmaceutical Breakdown
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Active Ingredients of Helina
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A carefully formulated combination of extraordinary qualities.
            <br />
            <span className="text-sm italic">Side effects include: Being absolutely amazing</span>
          </p>
        </motion.div>

        {/* Pills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <PillBottle key={index} ingredient={ingredient} index={index} />
          ))}
        </div>

        {/* Pharmacy disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#1a1a1a] border border-[#DC143C]/30 rounded-lg px-6 py-4">
            <p className="text-gray-500 text-xs md:text-sm italic">
              ⚕️ Prescribed by the Universe | Refills: Unlimited | Do not operate machinery while
              being this fabulous
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
