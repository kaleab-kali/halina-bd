import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Music, Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';

// YouTube embed IDs or audio file paths
const songs = [
  { title: 'Happy Birthday', artist: 'Stevie Wonder', youtubeId: 'inS9gAgSENE', duration: '3:45' },
  { title: 'Celebration', artist: 'Kool & The Gang', youtubeId: '3GwjfUFyY6M', duration: '4:58' },
  { title: 'Birthday', artist: 'The Beatles', youtubeId: 'ho08MMZW68E', duration: '2:42' },
  { title: 'In Da Club', artist: '50 Cent', youtubeId: '5qm8PH4xAss', duration: '3:13' },
  { title: 'Cake By The Ocean', artist: 'DNCE', youtubeId: 'PAzH-YAlFYc', duration: '3:37' },
  { title: 'Birthday Cake', artist: 'Rihanna', youtubeId: 'WKYxeUxhQu4', duration: '3:27' },
];

export const Playlist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const playSong = (index: number) => {
    setCurrentSong(index);
    setIsPlaying(true);
    setShowPlayer(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-[#FFB6C1] text-sm md:text-base tracking-[0.3em] uppercase mb-4">Curated For You</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">The Soundtrack to Your Special Day</h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC143C] via-[#FFB6C1] to-[#D4AF37]" />
          <p className="text-gray-400 text-sm mt-4">Click any song to play • Powered by YouTube</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.8 }} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-[#DC143C]/30">
          {/* Album art / vinyl */}
          <div className="flex items-center justify-center mb-8">
            <motion.div animate={isPlaying ? { rotate: 360 } : {}} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#DC143C] to-[#a00f2b] flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                <Music className="w-12 h-12 text-[#DC143C]" />
              </div>
            </motion.div>
          </div>

          {/* Song list */}
          <div className="space-y-3 mb-8">
            {songs.map((song, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + i * 0.1 }} whileHover={{ x: 5 }} onClick={() => playSong(i)} className={`flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer custom-cursor-heart ${i === currentSong && isPlaying ? 'bg-[#DC143C]/20 border-[#DC143C]' : 'bg-[#0a0a0a]/50 border-white/5 hover:border-[#DC143C]/30'}`}>
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === currentSong && isPlaying ? 'bg-[#DC143C]' : 'bg-gradient-to-br from-[#DC143C] to-[#FFB6C1]'}`}>
                    {i === currentSong && isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{song.title}</h4>
                    <p className="text-gray-500 text-sm">{song.artist}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{song.duration}</span>
              </motion.div>
            ))}
          </div>

          {/* Player controls */}
          <div className="space-y-6">
            {showPlayer && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                <div className="bg-[#0a0a0a] rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Volume2 className="w-5 h-5 text-[#DC143C]" />
                    <p className="text-white text-sm font-medium">Now Playing: {songs[currentSong].title}</p>
                  </div>
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${songs[currentSong].youtubeId}?autoplay=${isPlaying ? 1 : 0}&controls=1&modestbranding=1`}
                    title={songs[currentSong].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            )}

            <div className="flex items-center justify-center space-x-6">
              <button onClick={prevSong} className="w-12 h-12 rounded-full bg-[#DC143C]/20 hover:bg-[#DC143C]/30 flex items-center justify-center transition-colors custom-cursor-heart">
                <SkipBack className="w-5 h-5 text-[#DC143C]" />
              </button>
              <button onClick={togglePlay} className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DC143C] to-[#a00f2b] hover:shadow-lg hover:shadow-[#DC143C]/50 flex items-center justify-center transition-all custom-cursor-heart">
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-white" />
                ) : (
                  <Play className="w-7 h-7 text-white ml-1" />
                )}
              </button>
              <button onClick={nextSong} className="w-12 h-12 rounded-full bg-[#DC143C]/20 hover:bg-[#DC143C]/30 flex items-center justify-center transition-colors custom-cursor-heart">
                <SkipForward className="w-5 h-5 text-[#DC143C]" />
              </button>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-gray-500 text-xs mt-6">
          🎵 Music provided via YouTube embeds • May require internet connection
        </p>
      </div>
    </section>
  );
};
