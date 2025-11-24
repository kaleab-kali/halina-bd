import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback, useMemo, memo } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getSelfieMedia, type MediaItem } from '../../config/mediaConfig';

interface MediaCardProps {
  readonly media: MediaItem;
  readonly index: number;
  readonly isInView: boolean;
  readonly onClick: () => void;
}

interface LightboxProps {
  readonly media: MediaItem;
  readonly onClose: () => void;
  readonly onNext: () => void;
  readonly onPrev: () => void;
  readonly currentIndex: number;
  readonly totalMedia: number;
}

const MediaCardComponent = ({ media, index, isInView, onClick }: MediaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const borderColors = useMemo(() => ['#DC143C', '#FFB6C1', '#D4AF37'] as const, []);
  const borderColor = useMemo(() => borderColors[index % borderColors.length], [borderColors, index]);

  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  const handleVideoEnter = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  }, []);

  const handleVideoLeave = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: Math.min(index * 0.02, 1), duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={onClick}
      className="relative group cursor-pointer custom-cursor-heart overflow-hidden rounded-xl"
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-xl border-2 bg-[#1a1a1a]" style={{ borderColor }}>
        {media.type === 'video' ? (
          <video
            src={media.src}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            onMouseEnter={handleVideoEnter}
            onMouseLeave={handleVideoLeave}
          />
        ) : (
          <img
            src={media.src}
            alt="Helina"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {media.type === 'video' && (
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full p-2">
            <Play className="w-4 h-4 text-white" />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center px-4">
            <p className="text-white text-xl md:text-2xl font-serif font-bold drop-shadow-lg">
              {media.compliment || 'Beautiful'}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `inset 0 0 60px ${borderColor}40, 0 0 30px ${borderColor}30` }}
        />
      </div>
    </motion.div>
  );
};

MediaCardComponent.displayName = 'MediaCard';

const MediaCard = memo(
  MediaCardComponent,
  (prev, next) => prev.media.src === next.media.src && prev.isInView === next.isInView
);

const LightboxComponent = ({ media, onClose, onNext, onPrev, currentIndex, totalMedia }: LightboxProps) => {
  const handlePrevClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onPrev();
    },
    [onPrev]
  );

  const handleNextClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onNext();
    },
    [onNext]
  );

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#DC143C] transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#DC143C] transition-colors z-10"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#DC143C] transition-colors z-10"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      <motion.div
        key={currentIndex}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleContentClick}
        className="relative max-w-5xl w-full"
      >
        {media.type === 'video' ? (
          <video
            src={media.src}
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            controls
            autoPlay
            loop
            playsInline
          />
        ) : (
          <img src={media.src} alt="Helina" className="w-full h-auto max-h-[85vh] object-contain rounded-lg" />
        )}

        <div className="mt-6 text-center">
          <p className="text-white text-2xl md:text-3xl font-serif font-bold mb-2">
            {media.compliment || 'Beautiful'}
          </p>
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} of {totalMedia}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

LightboxComponent.displayName = 'Lightbox';

const Lightbox = memo(
  LightboxComponent,
  (prev, next) => prev.currentIndex === next.currentIndex && prev.media.src === next.media.src
);

const PhotoGalleryComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const media = useMemo(() => getSelfieMedia(), []);

  const openLightbox = useCallback((index: number) => {
    setSelectedMedia(index);
    globalThis.document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedMedia(null);
    globalThis.document.body.style.overflow = 'auto';
  }, []);

  const nextMedia = useCallback(() => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia + 1) % media.length);
    }
  }, [selectedMedia, media.length]);

  const prevMedia = useCallback(() => {
    if (selectedMedia !== null) {
      setSelectedMedia(selectedMedia === 0 ? media.length - 1 : selectedMedia - 1);
    }
  }, [selectedMedia, media.length]);

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#FFB6C1] text-sm md:text-base tracking-[0.3em] uppercase mb-4">Magazine Moments</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Elegance of Helina</h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]" />
          <p className="text-gray-400 text-lg mt-6">Every moment tells a story of elegance and grace</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {media.map((item, index) => (
            <MediaCard
              key={item.src}
              media={item}
              index={index}
              isInView={isInView}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia !== null && (
          <Lightbox
            media={media[selectedMedia]}
            onClose={closeLightbox}
            onNext={nextMedia}
            onPrev={prevMedia}
            currentIndex={selectedMedia}
            totalMedia={media.length}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

PhotoGalleryComponent.displayName = 'PhotoGallery';

export const PhotoGallery = memo(PhotoGalleryComponent);
