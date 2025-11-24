import { useState, useCallback, useMemo, memo } from 'react';
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

const AppComponent = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showOpening, setShowOpening] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  const coverImage = useMemo(() => getCoverImage(), []);
  const habeshaMedia = useMemo(() => getHabeshaMedia(), []);
  const favoriteMedia = useMemo(() => getFavoriteMedia(), []);

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
    setShowOpening(true);
  }, []);

  const handleOpeningComplete = useCallback(() => {
    setShowOpening(false);
    setShowMainContent(true);
    globalThis.document.body.style.overflow = 'auto';
  }, []);

  useMemo(() => {
    globalThis.document.body.style.overflow = showOpening || showPreloader ? 'hidden' : 'auto';
    return () => {
      globalThis.document.body.style.overflow = 'auto';
    };
  }, [showOpening, showPreloader]);

  const habeshaImages = useMemo(() => habeshaMedia.map((m) => m.src), [habeshaMedia]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <GoogleAnalytics measurementId="G-8HKPESQ2L4" />

      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <AnimatePresence>
        {showOpening && (
          <PrescriptionOpening onComplete={handleOpeningComplete} birthdayDate="November 24, 2025" />
        )}
      </AnimatePresence>

      {showMainContent && (
        <>
          <MagazineCover coverImage={coverImage?.src || '/images/18.mp4'} />
          <IdentityReveal />
          <FavoriteChild image={favoriteMedia[0]?.src || '/images/62.png'} />
          <PillBottles />
          <PhotoGallery />
          <HabeshaSpotlight images={habeshaImages} />
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
};

AppComponent.displayName = 'App';

const App = memo(AppComponent);

export default App;
