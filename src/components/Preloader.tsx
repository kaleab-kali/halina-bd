import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mediaItems } from '../config/mediaConfig';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    // Get priority media (cover, pharmacist, habesha, gym, favorite - first few from each)
    const priorityMedia = mediaItems.filter(item =>
      item.category === 'cover' ||
      item.category === 'pharmacist' ||
      item.category === 'habesha' ||
      item.category === 'gym' ||
      item.category === 'favorite'
    ).slice(0, 20); // Load first 20 priority items

    const totalItems = priorityMedia.length;
    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      setLoadedCount(loaded);
      const percentage = Math.round((loaded / totalItems) * 100);
      setProgress(percentage);

      if (loaded >= totalItems) {
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    };

    // Preload each media item
    priorityMedia.forEach((item) => {
      if (item.type === 'video') {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = item.src;
        video.onloadedmetadata = updateProgress;
        video.onerror = updateProgress; // Continue even if one fails
      } else {
        const img = new Image();
        img.src = item.src;
        img.onload = updateProgress;
        img.onerror = updateProgress; // Continue even if one fails
      }
    });

    // Fallback timeout in case some media fails to load
    const timeout = setTimeout(() => {
      if (progress < 100) {
        setProgress(100);
        setIsComplete(true);
        setTimeout(onComplete, 500);
      }
    }, 15000); // 15 second max wait

    return () => clearTimeout(timeout);
  }, [onComplete, progress]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
        >
          <div className="text-center space-y-8 px-4">
            {/* Loading animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                Helina
              </h1>
              <p className="text-[#FFB6C1] text-lg md:text-xl tracking-widest">
                Loading Your Special Day...
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 md:w-96 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress info */}
            <div className="space-y-2">
              <motion.p
                className="text-white text-2xl font-bold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress}%
              </motion.p>
              <p className="text-white/40 text-xs">
                Loading media {loadedCount}/20
              </p>
            </div>

            {/* Loading dots */}
            <div className="flex justify-center space-x-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{ background: i === 0 ? '#DC143C' : i === 1 ? '#FFB6C1' : '#D4AF37' }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
