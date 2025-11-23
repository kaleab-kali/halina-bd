import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getPharmacistMedia, getHabeshaMedia, getGymMedia } from '../../config/mediaConfig';

const CoffeeCeremony = () => (
  <motion.svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <motion.path d="M25 20 L25 35 L35 35 L35 20 L32 15 L28 15 Z" stroke="#D4AF37" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
    <motion.path d="M35 25 Q40 25 40 30 Q40 35 35 35" stroke="#D4AF37" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }} />
    {[0, 1, 2].map((i) => (
      <motion.path key={i} d={`M${26 + i * 4} 15 Q${27 + i * 4} 10 ${26 + i * 4} 5`} stroke="#FFB6C1" strokeWidth="1.5" fill="none" animate={{ opacity: [0, 1, 0], y: [-5, -10, -15] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
    ))}
  </motion.svg>
);

export const IdentityReveal = () => {
  const pharmacistMedia = getPharmacistMedia();
  const habeshaMedia = getHabeshaMedia();
  const gymMedia = getGymMedia();

  const sections = [
    { title: 'The Healer', subtitle: 'Pharmacist by Calling', media: pharmacistMedia, description: 'Dispensing care, knowledge, and healing with grace' },
    { title: 'The Culture Icon', subtitle: 'Ethiopian Royalty', media: habeshaMedia, description: 'Carrying heritage with pride and elegance' },
    { title: 'The Unstoppable', subtitle: 'Fitness & Dedication', media: gymMedia, description: 'Strength, discipline, and determination personified' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {sections.map((section, index) => (
        <IdentitySection key={index} section={section} index={index} />
      ))}
    </section>
  );
};

const IdentitySection = ({ section, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16">
      <div className="max-w-7xl w-full">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
          <motion.div initial={{ opacity: 0, x: isReversed ? 100 : -100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }} className={`relative ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
            <div className="relative group">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                {section.media[currentIndex]?.type === 'video' ? (
                  <video key={currentIndex} src={section.media[currentIndex].src} className="w-full h-full object-cover" muted loop playsInline autoPlay />
                ) : (
                  <img key={currentIndex} src={section.media[currentIndex]?.src} alt={section.title} className="w-full h-full object-cover" loading="lazy" />
                )}
                <div className="absolute inset-0 ring-4 ring-[#DC143C]/50 rounded-lg pointer-events-none" />
                {section.media[currentIndex]?.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {section.media.length > 1 && (
                <>
                  <button onClick={() => setCurrentIndex((currentIndex - 1 + section.media.length) % section.media.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#DC143C] hover:bg-[#a00f2b] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={() => setCurrentIndex((currentIndex + 1) % section.media.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#DC143C] hover:bg-[#a00f2b] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {section.media.map((_: any, i: number) => (
                      <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#DC143C] w-8' : 'bg-white/50'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>

            {index === 1 && (
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.8, duration: 0.8 }} className="absolute -bottom-8 -right-8 bg-[#1a1a1a] p-4 rounded-full border-2 border-[#D4AF37]">
                <CoffeeCeremony />
              </motion.div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: isReversed ? -100 : 100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.3 }} className={`space-y-6 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
            <div>
              <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="text-[#FFB6C1] text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                {section.subtitle}
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                {section.title}
              </motion.h2>
              <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ delay: 0.8, duration: 0.8 }} className="h-1 w-32 bg-gradient-to-r from-[#DC143C] to-[#D4AF37] origin-left" />
            </div>
            {section.description && (
              <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1 }} className="text-gray-300 text-lg md:text-xl leading-relaxed">
                {section.description}
              </motion.p>
            )}
            <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} className="flex items-center space-x-4 text-[#D4AF37] pt-4">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>✦</motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
