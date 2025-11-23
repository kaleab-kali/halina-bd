import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { Preloader } from './components/Preloader';
import { PrescriptionOpening } from './components/sections/PrescriptionOpening';
import { MagazineCover } from './components/sections/MagazineCover';
import { IdentityReveal } from './components/sections/IdentityReveal';
import { FavoriteChild } from './components/sections/FavoriteChild';
import { PillBottles } from './components/sections/PillBottles';
import { PhotoGallery } from './components/sections/PhotoGallery';
import { HabeshaSpotlight } from './components/sections/HabeshaSpotlight';
import { FlipCards } from './components/sections/FlipCards';
import { MakeAWish } from './components/sections/MakeAWish';
import { Playlist } from './components/sections/Playlist';
import { FinalMessage } from './components/sections/FinalMessage';
import { SurpriseEnding } from './components/sections/SurpriseEnding';
import { getCoverImage, getHabeshaMedia, getFavoriteMedia } from './config/mediaConfig';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showOpening, setShowOpening] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const coverImage = getCoverImage();
  const habeshaMedia = getHabeshaMedia();
  const favoriteMedia = getFavoriteMedia();

  useEffect(() => {
    document.body.style.overflow = showOpening || showPreloader ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showOpening, showPreloader]);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setShowOpening(true);
  };

  const handleOpeningComplete = () => {
    setShowOpening(false);
    setShowMainContent(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Google Analytics - Replace G-XXXXXXXXXX with your tracking ID */}
      <GoogleAnalytics measurementId="G-XXXXXXXXXX" />

      {/* Preloader */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <AnimatePresence>
        {showOpening && (
          <PrescriptionOpening
            onComplete={handleOpeningComplete}
            birthdayDate="November 24, 2025"
          />
        )}
      </AnimatePresence>

      {showMainContent && (
        <>
          <MagazineCover coverImage={coverImage?.src || '/src/assets/images/1.jpg'} />
          <IdentityReveal />
          <FavoriteChild image={favoriteMedia[0]?.src || '/src/assets/images/62.png'} />
          <PillBottles />
          <PhotoGallery />
          <HabeshaSpotlight images={habeshaMedia.map(m => m.src)} />
          <FlipCards />
          <MakeAWish />
          <Playlist />
          <FinalMessage
            message="Here's to another year of being absolutely legendary. May this year bring you endless joy, success in everything you pursue, and all the happiness you deserve. You inspire everyone around you with your intelligence, grace, and determination. Keep shining bright, Helina!"
            senderName="Your Biggest Fan"
          />
          <SurpriseEnding />
        </>
      )}
    </div>
  );
}

export default App;
