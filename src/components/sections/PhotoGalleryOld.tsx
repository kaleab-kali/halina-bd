import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
  compliment: string;
}

// Default photos - user will replace with actual images
const defaultPhotos: Photo[] = [
  { src: '/images/selfie1.jpg', alt: 'Helina', compliment: 'Absolutely Stunning' },
  { src: '/images/selfie2.jpg', alt: 'Helina', compliment: 'Main Character Energy' },
  { src: '/images/selfie3.jpg', alt: 'Helina', compliment: 'Elegance Defined' },
  { src: '/images/selfie4.jpg', alt: 'Helina', compliment: 'Simply Beautiful' },
  { src: '/images/selfie5.jpg', alt: 'Helina', compliment: 'Radiant' },
  { src: '/images/selfie6.jpg', alt: 'Helina', compliment: 'Pure Grace' },
  { src: '/images/selfie7.jpg', alt: 'Helina', compliment: 'Breathtaking' },
];

interface PhotoGalleryProps {
  photos?: Photo[];
}

export const PhotoGallery = ({ photos = defaultPhotos }: PhotoGalleryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

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
            Magazine Moments
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Moments with Helina
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]" />
          <p className="text-gray-400 text-lg mt-6">
            Every picture tells a story of elegance and grace
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              photo={photo}
              index={index}
              isInView={isInView}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <Lightbox
            photo={photos[selectedPhoto]}
            onClose={closeLightbox}
            onNext={nextPhoto}
            onPrev={prevPhoto}
            currentIndex={selectedPhoto}
            totalPhotos={photos.length}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Individual photo card
const PhotoCard = ({
  photo,
  index,
  isInView,
  onClick,
}: {
  photo: Photo;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const borderColors = ['#DC143C', '#FFB6C1', '#D4AF37'];
  const borderColor = borderColors[index % borderColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="relative group cursor-pointer custom-cursor-heart overflow-hidden rounded-xl"
    >
      {/* Card container */}
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-xl border-2 bg-[#1a1a1a]"
        style={{ borderColor }}
      >
        {/* Photo */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Compliment overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center px-4">
            <p className="text-white text-2xl md:text-3xl font-serif font-bold drop-shadow-lg">
              {photo.compliment}
            </p>
          </div>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 60px ${borderColor}40, 0 0 30px ${borderColor}30`,
          }}
        />
      </div>
    </motion.div>
  );
};

// Lightbox component
const Lightbox = ({
  photo,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalPhotos,
}: {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalPhotos: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#DC143C] transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#DC143C] transition-colors z-10"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#DC143C] transition-colors z-10"
        aria-label="Next photo"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      {/* Photo container */}
      <motion.div
        key={currentIndex}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
        />

        {/* Photo info */}
        <div className="mt-6 text-center">
          <p className="text-white text-2xl md:text-3xl font-serif font-bold mb-2">
            {photo.compliment}
          </p>
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} of {totalPhotos}
          </p>
        </div>
      </motion.div>

      {/* Keyboard hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
        Use arrow keys to navigate • ESC to close
      </div>
    </motion.div>
  );
};
