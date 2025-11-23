import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getSelfieMedia, MediaItem } from '../../config/mediaConfig';

export const PhotoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const media = getSelfieMedia();

  const openLightbox = (index: number) => {
    setSelectedMedia(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia + 1) % media.length);
    }
  };

  const prevMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia(selectedMedia === 0 ? media.length - 1 : selectedMedia - 1);
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-[#FFB6C1] text-sm md:text-base tracking-[0.3em] uppercase mb-4">Magazine Moments</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Moments with Helina</h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]" />
          <p className="text-gray-400 text-lg mt-6">Every moment tells a story of elegance and grace</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {media.map((item, index) => (
            <MediaCard key={index} media={item} index={index} isInView={isInView} onClick={() => openLightbox(index)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia !== null && (
          <Lightbox media={media[selectedMedia]} onClose={closeLightbox} onNext={nextMedia} onPrev={prevMedia} currentIndex={selectedMedia} totalMedia={media.length} />
        )}
      </AnimatePresence>
    </section>
  );
};

const MediaCard = ({ media, index, isInView, onClick }: { media: MediaItem; index: number; isInView: boolean; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderColors = ['#DC143C', '#FFB6C1', '#D4AF37'];
  const borderColor = borderColors[index % borderColors.length];

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: Math.min(index * 0.02, 1), duration: 0.5 }} whileHover={{ y: -5, scale: 1.02 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} onClick={onClick} className="relative group cursor-pointer custom-cursor-heart overflow-hidden rounded-xl">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl border-2 bg-[#1a1a1a]" style={{ borderColor }}>
        {media.type === 'video' ? (
          <video src={media.src} className="w-full h-full object-cover" muted loop playsInline preload="metadata" onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }} />
        ) : (
          <img src={media.src} alt="Helina" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {media.type === 'video' && (
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full p-2">
            <Play className="w-4 h-4 text-white" />
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-white text-xl md:text-2xl font-serif font-bold drop-shadow-lg">{media.compliment || 'Beautiful'}</p>
          </div>
        </motion.div>

        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `inset 0 0 60px ${borderColor}40, 0 0 30px ${borderColor}30` }} />
      </div>
    </motion.div>
  );
};

const Lightbox = ({ media, onClose, onNext, onPrev, currentIndex, totalMedia }: { media: MediaItem; onClose: () => void; onNext: () => void; onPrev: () => void; currentIndex: number; totalMedia: number }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-[#DC143C] transition-colors z-10">
        <X className="w-8 h-8" />
      </button>

      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#DC143C] transition-colors z-10">
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#DC143C] transition-colors z-10">
        <ChevronRight className="w-12 h-12" />
      </button>

      <motion.div key={currentIndex} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full">
        {media.type === 'video' ? (
          <video src={media.src} className="w-full h-auto max-h-[85vh] object-contain rounded-lg" controls autoPlay loop playsInline />
        ) : (
          <img src={media.src} alt="Helina" className="w-full h-auto max-h-[85vh] object-contain rounded-lg" />
        )}

        <div className="mt-6 text-center">
          <p className="text-white text-2xl md:text-3xl font-serif font-bold mb-2">{media.compliment || 'Beautiful'}</p>
          <p className="text-gray-400 text-sm">{currentIndex + 1} of {totalMedia}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
