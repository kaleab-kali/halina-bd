import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { EthiopianPattern1 } from '../../assets/patterns/EthiopianPattern1';

interface MagazineCoverProps {
  coverImage?: string;
}

export const MagazineCover = ({
  coverImage = '/src/assets/images/1.jpg'
}: MagazineCoverProps) => {
  // Check if it's a video
  const isVideo = coverImage?.endsWith('.mp4') || false;
  const { scrollY } = useScroll();

  // Parallax effect for background image
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image/video with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        {isVideo ? (
          <>
            <video
              src={coverImage}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              poster=""
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${coverImage})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
      </motion.div>

      {/* Ethiopian pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <EthiopianPattern1 opacity={0.08} />
      </div>

      {/* Magazine cover frame */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center px-4"
      >
        <div className="max-w-4xl w-full">
          {/* Crimson border frame */}
          <div className="border-8 border-[#DC143C] p-8 md:p-16 bg-black/30 backdrop-blur-sm">
            {/* Magazine masthead */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center mb-8"
            >
              <p className="text-[#FFB6C1] text-sm md:text-base tracking-[0.3em] uppercase font-light mb-2">
                Birthday Special Edition
              </p>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-serif font-black text-white text-center tracking-tight leading-none mb-4"
            >
              HELINA
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-center space-y-4"
            >
              <p className="text-[#FFB6C1] text-xl md:text-3xl font-serif italic">
                Solomon
              </p>

              <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[#DC143C] to-transparent my-6" />

              <p className="text-white/90 text-lg md:text-2xl font-light tracking-wide">
                Intelligence. Elegance. Grace.
              </p>

              <div className="flex items-center justify-center space-x-4 text-[#D4AF37] text-sm md:text-base pt-4">
                <span>✦</span>
                <span className="tracking-widest">LEGENDARY EDITION</span>
                <span>✦</span>
              </div>
            </motion.div>

            {/* Bottom decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 flex justify-between items-center text-white/70 text-xs md:text-sm"
            >
              <span className="font-light">VOL. {new Date().getFullYear()}</span>
              <span className="font-light tracking-widest">COLLECTOR'S EDITION</span>
              <span className="font-light">NO. 1</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 cursor-pointer custom-cursor-heart"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[#FFB6C1] text-sm tracking-wider">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6 text-[#DC143C]" />
        </motion.div>
      </motion.div>

      {/* Gold sparkle effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};
