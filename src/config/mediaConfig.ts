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
  { src: '/images/18.jpg', type: 'video', category: 'cover', compliment: 'Simply Stunning' },


  // Pharmacist/Professional (assign 5-8 media)
  { src: '/images/14.jpg', type: 'image', category: 'pharmacist', compliment: 'The Healer' },
  { src: '/images/2.mp4', type: 'video', category: 'pharmacist' },
  { src: '/images/3.mp4', type: 'video', category: 'pharmacist' },

  // Habesha dress (assign 8-12 media)
  { src: '/images/4.mp4', type: 'video', category: 'habesha' },
  { src: '/images/5.mp4', type: 'video', category: 'habesha' },
  { src: '/images/6.mp4', type: 'video', category: 'habesha' },
  { src: '/images/7.mp4', type: 'video', category: 'habesha' },
  { src: '/images/8.mp4', type: 'video', category: 'habesha' },
  { src: '/images/9.mp4', type: 'video', category: 'habesha' },

  // Gym/Fitness (assign 8-12 media)
  { src: '/images/10.mp4', type: 'video', category: 'gym' },
  { src: '/images/11.mp4', type: 'video', category: 'gym' },
  { src: '/images/12.mp4', type: 'video', category: 'gym' },
  { src: '/images/13.mp4', type: 'video', category: 'gym' },
  { src: '/images/15.mp4', type: 'video', category: 'gym' },
  { src: '/images/16.mp4', type: 'video', category: 'gym' },

  // Favorite child (pick one best photo showing her name on items)
  { src: '/images/73.jpg', type: 'image', category: 'favorite' },
  { src: '/images/62.png', type: 'image', category: 'favorite' },

  // Selfies and general content (rest of the media)
  { src: '/images/17.mp4', type: 'video', category: 'selfie', compliment: 'Absolutely Stunning' },
  { src: '/images/18.mp4', type: 'video', category: 'selfie', compliment: 'Main Character Energy' },
  { src: '/images/19.mp4', type: 'video', category: 'selfie', compliment: 'Elegance Defined' },
  { src: '/images/20.mp4', type: 'video', category: 'selfie', compliment: 'Simply Beautiful' },
  { src: '/images/21.mp4', type: 'video', category: 'selfie', compliment: 'Radiant' },
  { src: '/images/22.mp4', type: 'video', category: 'selfie', compliment: 'Pure Grace' },
  { src: '/images/23.mp4', type: 'video', category: 'selfie', compliment: 'Breathtaking' },
  { src: '/images/24.mp4', type: 'video', category: 'selfie', compliment: 'Gorgeous' },
  { src: '/images/25.mp4', type: 'video', category: 'selfie', compliment: 'Flawless' },
  { src: '/images/26.mp4', type: 'video', category: 'selfie', compliment: 'Queen Energy' },
  { src: '/images/27.mp4', type: 'video', category: 'selfie', compliment: 'Absolutely Perfect' },
  { src: '/images/28.mp4', type: 'video', category: 'selfie', compliment: 'Mesmerizing' },
  { src: '/images/29.mp4', type: 'video', category: 'selfie', compliment: 'Pure Beauty' },
  { src: '/images/30.mp4', type: 'video', category: 'selfie', compliment: 'Star Quality' },
  { src: '/images/31.mp4', type: 'video', category: 'selfie', compliment: 'Captivating' },
  { src: '/images/32.mp4', type: 'video', category: 'selfie', compliment: 'Stunning' },
  { src: '/images/33.mp4', type: 'video', category: 'selfie', compliment: 'Phenomenal' },
  { src: '/images/34.mp4', type: 'video', category: 'selfie', compliment: 'Incredible' },
  { src: '/images/35.mp4', type: 'video', category: 'selfie', compliment: 'Magnificent' },
  { src: '/images/36.mp4', type: 'video', category: 'selfie', compliment: 'Glowing' },
  { src: '/images/37.mp4', type: 'video', category: 'general', compliment: 'Beautiful Soul' },
  { src: '/images/38.mp4', type: 'video', category: 'general', compliment: 'Radiance' },
  { src: '/images/39.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/images/40.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/41.mp4', type: 'video', category: 'general', compliment: 'Charming' },
  { src: '/images/42.mp4', type: 'video', category: 'general', compliment: 'Graceful' },
  { src: '/images/43.mp4', type: 'video', category: 'general', compliment: 'Dazzling' },
  { src: '/images/44.mp4', type: 'video', category: 'general', compliment: 'Brilliant' },
  { src: '/images/45.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/images/46.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/images/47.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },
  { src: '/images/48.mp4', type: 'video', category: 'general', compliment: 'Extraordinary' },
  { src: '/images/49.mp4', type: 'video', category: 'general', compliment: 'Spectacular' },
  { src: '/images/50.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/images/51.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/52.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/images/53.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/images/54.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },
  { src: '/images/55.mp4', type: 'video', category: 'general', compliment: 'Incredible' },
  { src: '/images/56.mp4', type: 'video', category: 'general', compliment: 'Perfect' },
  { src: '/images/57.mp4', type: 'video', category: 'general', compliment: 'Radiant' },
  { src: '/images/58.mp4', type: 'video', category: 'general', compliment: 'Glowing' },
  { src: '/images/59.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/60.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/images/61.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/images/63.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/images/64.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/images/65.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/images/66.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/images/67.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },
  { src: '/images/68.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },
  { src: '/images/69.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/70.mp4', type: 'video', category: 'general', compliment: 'Radiant' },
  { src: '/images/71.mp4', type: 'video', category: 'general', compliment: 'Perfect' },
  { src: '/images/72.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/images/74.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/images/75.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/images/76.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/images/77.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/images/78.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },
  { src: '/images/79.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/images/80.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },
  { src: '/images/81.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/images/82.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/images/83.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
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
