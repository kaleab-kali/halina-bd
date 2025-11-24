import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mediaItems } from '../config/mediaConfig';

interface PreloaderProps {
  readonly onComplete: () => void;
}

const loadMedia = (src: string, type: 'image' | 'video'): Promise<void> =>
  new Promise((resolve) => {
    if (type === 'video') {
      const video = globalThis.document.createElement('video');
      video.preload = 'metadata';
      video.src = src;
      video.onloadedmetadata = () => resolve();
      video.onerror = () => resolve();
    } else {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve();
    }
  });

const PreloaderComponent = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const priorityMedia = useMemo(
    () =>
      mediaItems
        .filter(
          (item) =>
            item.category === 'cover' ||
            item.category === 'pharmacist' ||
            item.category === 'habesha' ||
            item.category === 'favorite'
        )
        .slice(0, 10),
    []
  );

  const startLoading = useCallback(async () => {
    const total = priorityMedia.length;
    const promises: Promise<void>[] = [];

    for (const [index, item] of priorityMedia.entries()) {
      const promise = loadMedia(item.src, item.type).then(() => {
        const newProgress = Math.round(((index + 1) / total) * 100);
        setProgress(newProgress);
      });
      promises.push(promise);
    }

    await Promise.race([
      Promise.all(promises),
      new Promise((resolve) => globalThis.setTimeout(resolve, 8000))
    ]);

    setProgress(100);
    await new Promise((resolve) => globalThis.setTimeout(resolve, 300));
    setIsComplete(true);
    await new Promise((resolve) => globalThis.setTimeout(resolve, 400));
    onComplete();
  }, [priorityMedia, onComplete]);

  useMemo(() => {
    startLoading();
  }, [startLoading]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
        >
          <div className="text-center space-y-8 px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
                Helina
              </h1>
              <p className="text-[#FFB6C1] text-xl md:text-2xl tracking-[0.3em]">
                LOADING
              </p>
            </motion.div>

            <div className="w-72 md:w-96 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>

            <motion.p
              className="text-white/60 text-3xl font-light tabular-nums"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {progress}%
            </motion.p>

            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#DC143C]"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut',
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

PreloaderComponent.displayName = 'Preloader';

export const Preloader = memo(
  PreloaderComponent,
  (prev, next) => prev.onComplete === next.onComplete
);
