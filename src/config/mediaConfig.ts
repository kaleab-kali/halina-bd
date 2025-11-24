// Media configuration for all photos and videos
export interface MediaItem {
  src: string;
  type: 'image' | 'video';
  category: 'cover' | 'pharmacist' | 'habesha' | 'gym' | 'favorite' | 'selfie' | 'general';
  compliment?: string;
}

// Auto-generate media list from assets/images
export const mediaItems: MediaItem[] = [
  // Cover image (best photo for magazine cover)
  { src: '/images/18.mp4', type: 'video', category: 'cover', compliment: 'Simply Stunning' },


  // Pharmacist/Professional (assign 5-8 media)
  { src: '/images/41.mp4', type: 'video', category: 'pharmacist', compliment: 'The Healer' },
  

  // Habesha dress (assign 8-12 media)
  { src: '/images/18.mp4', type: 'video', category: 'habesha' },
  { src: '/images/85.mp4', type: 'video', category: 'habesha' },
 

  // Gym/Fitness (assign 8-12 media)
  { src: '/images/76.mp4', type: 'video', category: 'gym' },
 

  // Favorite child (pick one best photo showing her name on items)
  { src: '/images/19.mp4', type: 'video', category: 'favorite' },
  

  // Selfies and general content (rest of the media)
  { src: '/images/8.mp4', type: 'video', category: 'selfie', compliment: 'Absolutely Stunning' },
  { src: '/images/18.mp4', type: 'video', category: 'selfie', compliment: 'Main Character Energy' },
  { src: '/images/11.mp4', type: 'video', category: 'selfie', compliment: 'Elegance Defined' },
  { src: '/images/12.mp4', type: 'video', category: 'selfie', compliment: 'Simply Beautiful' },
  { src: '/images/21.mp4', type: 'video', category: 'selfie', compliment: 'Mysterious' },
  { src: '/images/22.mp4', type: 'video', category: 'selfie', compliment: 'Pure Grace' },

  { src: '/images/23.mp4', type: 'video', category: 'selfie', compliment: 'Breathtaking' },
  { src: '/images/24.mp4', type: 'video', category: 'selfie', compliment: 'Gorgeous' },
  { src: '/images/25.mp4', type: 'video', category: 'selfie', compliment: 'Flawless' },
  { src: '/images/26.mp4', type: 'video', category: 'selfie', compliment: 'Queen Energy' },
  { src: '/images/27.mp4', type: 'video', category: 'selfie', compliment: 'Absolutely Perfect' },

  { src: '/images/28.mp4', type: 'video', category: 'selfie', compliment: 'Mesmerizing' },
  { src: '/images/30.mp4', type: 'video', category: 'selfie', compliment: 'Star Quality' },
  { src: '/images/31.mp4', type: 'video', category: 'selfie', compliment: 'Captivating' },
  { src: '/images/32.mp4', type: 'video', category: 'selfie', compliment: 'Stunning' },
  { src: '/images/33.mp4', type: 'video', category: 'selfie', compliment: 'Phenomenal' },

  { src: '/images/34.mp4', type: 'video', category: 'selfie', compliment: 'Incredible' },
  { src: '/images/35.mp4', type: 'video', category: 'selfie', compliment: 'Magnificent' },
  { src: '/images/36.mp4', type: 'video', category: 'selfie', compliment: 'Glowing' },
  { src: '/images/37.mp4', type: 'video', category: 'general', compliment: 'Beautiful Soul' },
  { src: '/images/39.mp4', type: 'video', category: 'general', compliment: 'Elegant' },

  { src: '/images/40.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/42.mp4', type: 'video', category: 'general', compliment: 'Graceful' },
  { src: '/images/43.mp4', type: 'video', category: 'general', compliment: 'Dazzling' },
  { src: '/images/45.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/images/48.mp4', type: 'video', category: 'general', compliment: 'Extraordinary' },

  { src: '/images/49.mp4', type: 'video', category: 'general', compliment: 'Spectacular' },
  { src: '/images/50.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/images/51.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/52.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/images/54.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },

  { src: '/images/59.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/60.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/images/61.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/images/64.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/images/68.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },

 
  { src: '/images/70.mp4', type: 'video', category: 'general', compliment: 'Radiant' },
  { src: '/images/72.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/images/74.mp4', type: 'video', category: 'general', compliment: 'Dedicated' },
  { src: '/images/77.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/images/78.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },

  { src: '/images/79.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/80.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },
  { src: '/images/84.mp4', type: 'video', category: 'general', compliment: 'Perfect' },
  { src: '/images/85.mp4', type: 'video', category: 'general', compliment: 'Radiant' },
];

// Helper functions to get media by category
export const getMediaByCategory = (category: MediaItem['category']) => {
  return mediaItems.filter(item => item.category === category);
};

export const getCoverImage = () => mediaItems.find(item => item.category === 'cover');
export const getPharmacistMedia = () => getMediaByCategory('pharmacist');
export const getHabeshaMedia = () => getMediaByCategory('habesha');
export const getGymMedia = () => getMediaByCategory('gym');
export const getFavoriteMedia = () => getMediaByCategory('favorite');
export const getSelfieMedia = () => [...getMediaByCategory('selfie'), ...getMediaByCategory('general')];
