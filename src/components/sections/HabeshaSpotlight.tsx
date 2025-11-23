import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Music } from 'lucide-react';
import { EthiopianPattern2 } from '../../assets/patterns/EthiopianPattern2';

interface HabeshaSpotlightProps {
  images?: string[];
}

// Gold sparkle particles
const GoldSparkles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
            y: [0, -30],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

// Music note animation
const MusicNotes = () => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#D4AF37]"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 2) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        >
          <Music className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      ))}
    </>
  );
};

export const HabeshaSpotlight = ({
  images = ['/images/habesha1.jpg', '/images/habesha2.jpg'],
}: HabeshaSpotlightProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Only use first 2 media items
  const displayImages = images.slice(0, 2);

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden"
    >
      {/* Ethiopian pattern background */}
      <div className="absolute inset-0 opacity-5">
        <EthiopianPattern2 opacity={0.3} />
      </div>

      {/* Gold sparkles */}
      <GoldSparkles />

      {/* Music notes */}
      <div className="absolute inset-0 pointer-events-none">
        <MusicNotes />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Ethiopian Pride
          </p>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">
            Cultural Icon
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#22c55e] via-[#eab308] to-[#ef4444]" />
          <p className="text-gray-400 text-lg mt-6">
            Carrying heritage with elegance and grace
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image comparison slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {displayImages.length === 2 ? (
              // Image/Video slider
              <div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-ew-resize border-4 border-[#D4AF37]"
                onMouseMove={handleSliderChange}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                {/* Before media */}
                <div className="absolute inset-0">
                  {displayImages[0]?.endsWith('.mp4') ? (
                    <video src={displayImages[0]} className="w-full h-full object-cover" muted loop playsInline autoPlay />
                  ) : (
                    <img src={displayImages[0]} alt="Habesha 1" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* After media with clip path */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  {displayImages[1]?.endsWith('.mp4') ? (
                    <video src={displayImages[1]} className="w-full h-full object-cover" muted loop playsInline autoPlay />
                  ) : (
                    <img src={displayImages[1]} alt="Habesha 2" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Slider handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-0.5 h-4 bg-gray-400" />
                      <div className="w-0.5 h-4 bg-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">Look 1</span>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">Look 2</span>
                </div>
              </div>
            ) : (
              // Side by side layout
              <div className="grid grid-cols-2 gap-4">
                {displayImages.map((media, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                    className="relative aspect-[3/4] rounded-xl overflow-hidden border-4 border-[#D4AF37]"
                  >
                    {media?.endsWith('.mp4') ? (
                      <video src={media} className="w-full h-full object-cover" muted loop playsInline autoPlay />
                    ) : (
                      <img src={media} alt={`Habesha ${i + 1}`} className="w-full h-full object-cover" />
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Gold glow effect */}
            <div className="absolute -inset-4 bg-gradient-radial from-[#D4AF37]/20 via-transparent to-transparent blur-2xl -z-10" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Ethiopian Royalty
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-transparent mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                The habesha dress is more than fabric—it's a story woven with pride,
                tradition, and the elegance of generations.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every thread carries the spirit of Ethiopia, and Helina wears it with
                the grace of true royalty.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4">
              {[
                { icon: '🌟', text: 'Timeless Elegance', color: '#D4AF37' },
                { icon: '🏛️', text: 'Rich Heritage', color: '#22c55e' },
                { icon: '👑', text: 'Regal Presence', color: '#eab308' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg border-l-4"
                  style={{ borderColor: item.color }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-white text-lg font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 rounded-xl border border-[#D4AF37]/30"
            >
              <p className="text-[#D4AF37] text-xl font-serif italic text-center">
                "Culture isn't just worn, it's embodied"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-[#1a1a1a] px-8 py-4 rounded-full border border-[#D4AF37]/30">
            <span className="text-2xl">🇪🇹</span>
            <span className="text-[#D4AF37] font-serif text-lg">
              Proud. Ethiopian. Elegant.
            </span>
            <span className="text-2xl">🇪🇹</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
