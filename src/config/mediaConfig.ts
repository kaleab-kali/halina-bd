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
  { src: '/src/assets/images/18.jpg', type: 'video', category: 'cover', compliment: 'Simply Stunning' },


  // Pharmacist/Professional (assign 5-8 media)
  { src: '/src/assets/images/14.jpg', type: 'image', category: 'pharmacist', compliment: 'The Healer' },
  { src: '/src/assets/images/2.mp4', type: 'video', category: 'pharmacist' },
  { src: '/src/assets/images/3.mp4', type: 'video', category: 'pharmacist' },

  // Habesha dress (assign 8-12 media)
  { src: '/src/assets/images/4.mp4', type: 'video', category: 'habesha' },
  { src: '/src/assets/images/5.mp4', type: 'video', category: 'habesha' },
  { src: '/src/assets/images/6.mp4', type: 'video', category: 'habesha' },
  { src: '/src/assets/images/7.mp4', type: 'video', category: 'habesha' },
  { src: '/src/assets/images/8.mp4', type: 'video', category: 'habesha' },
  { src: '/src/assets/images/9.mp4', type: 'video', category: 'habesha' },

  // Gym/Fitness (assign 8-12 media)
  { src: '/src/assets/images/10.mp4', type: 'video', category: 'gym' },
  { src: '/src/assets/images/11.mp4', type: 'video', category: 'gym' },
  { src: '/src/assets/images/12.mp4', type: 'video', category: 'gym' },
  { src: '/src/assets/images/13.mp4', type: 'video', category: 'gym' },
  { src: '/src/assets/images/15.mp4', type: 'video', category: 'gym' },
  { src: '/src/assets/images/16.mp4', type: 'video', category: 'gym' },

  // Favorite child
  { src: '/src/assets/images/62.png', type: 'image', category: 'favorite' },
  { src: '/src/assets/images/73.jpg', type: 'image', category: 'favorite' },

  // Selfies and general content (rest of the media)
  { src: '/src/assets/images/17.mp4', type: 'video', category: 'selfie', compliment: 'Absolutely Stunning' },
  { src: '/src/assets/images/18.mp4', type: 'video', category: 'selfie', compliment: 'Main Character Energy' },
  { src: '/src/assets/images/19.mp4', type: 'video', category: 'selfie', compliment: 'Elegance Defined' },
  { src: '/src/assets/images/20.mp4', type: 'video', category: 'selfie', compliment: 'Simply Beautiful' },
  { src: '/src/assets/images/21.mp4', type: 'video', category: 'selfie', compliment: 'Radiant' },
  { src: '/src/assets/images/22.mp4', type: 'video', category: 'selfie', compliment: 'Pure Grace' },
  { src: '/src/assets/images/23.mp4', type: 'video', category: 'selfie', compliment: 'Breathtaking' },
  { src: '/src/assets/images/24.mp4', type: 'video', category: 'selfie', compliment: 'Gorgeous' },
  { src: '/src/assets/images/25.mp4', type: 'video', category: 'selfie', compliment: 'Flawless' },
  { src: '/src/assets/images/26.mp4', type: 'video', category: 'selfie', compliment: 'Queen Energy' },
  { src: '/src/assets/images/27.mp4', type: 'video', category: 'selfie', compliment: 'Absolutely Perfect' },
  { src: '/src/assets/images/28.mp4', type: 'video', category: 'selfie', compliment: 'Mesmerizing' },
  { src: '/src/assets/images/29.mp4', type: 'video', category: 'selfie', compliment: 'Pure Beauty' },
  { src: '/src/assets/images/30.mp4', type: 'video', category: 'selfie', compliment: 'Star Quality' },
  { src: '/src/assets/images/31.mp4', type: 'video', category: 'selfie', compliment: 'Captivating' },
  { src: '/src/assets/images/32.mp4', type: 'video', category: 'selfie', compliment: 'Stunning' },
  { src: '/src/assets/images/33.mp4', type: 'video', category: 'selfie', compliment: 'Phenomenal' },
  { src: '/src/assets/images/34.mp4', type: 'video', category: 'selfie', compliment: 'Incredible' },
  { src: '/src/assets/images/35.mp4', type: 'video', category: 'selfie', compliment: 'Magnificent' },
  { src: '/src/assets/images/36.mp4', type: 'video', category: 'selfie', compliment: 'Glowing' },
  { src: '/src/assets/images/37.mp4', type: 'video', category: 'general', compliment: 'Beautiful Soul' },
  { src: '/src/assets/images/38.mp4', type: 'video', category: 'general', compliment: 'Radiance' },
  { src: '/src/assets/images/39.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/src/assets/images/40.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/src/assets/images/41.mp4', type: 'video', category: 'general', compliment: 'Charming' },
  { src: '/src/assets/images/42.mp4', type: 'video', category: 'general', compliment: 'Graceful' },
  { src: '/src/assets/images/43.mp4', type: 'video', category: 'general', compliment: 'Dazzling' },
  { src: '/src/assets/images/44.mp4', type: 'video', category: 'general', compliment: 'Brilliant' },
  { src: '/src/assets/images/45.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/src/assets/images/46.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/src/assets/images/47.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },
  { src: '/src/assets/images/48.mp4', type: 'video', category: 'general', compliment: 'Extraordinary' },
  { src: '/src/assets/images/49.mp4', type: 'video', category: 'general', compliment: 'Spectacular' },
  { src: '/src/assets/images/50.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/src/assets/images/51.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/src/assets/images/52.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/src/assets/images/53.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/src/assets/images/54.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },
  { src: '/src/assets/images/55.mp4', type: 'video', category: 'general', compliment: 'Incredible' },
  { src: '/src/assets/images/56.mp4', type: 'video', category: 'general', compliment: 'Perfect' },
  { src: '/src/assets/images/57.mp4', type: 'video', category: 'general', compliment: 'Radiant' },
  { src: '/src/assets/images/58.mp4', type: 'video', category: 'general', compliment: 'Glowing' },
  { src: '/src/assets/images/59.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/src/assets/images/60.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/src/assets/images/61.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/src/assets/images/63.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/src/assets/images/64.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/src/assets/images/65.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/src/assets/images/66.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/src/assets/images/67.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },
  { src: '/src/assets/images/68.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },
  { src: '/src/assets/images/69.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/src/assets/images/70.mp4', type: 'video', category: 'general', compliment: 'Radiant' },
  { src: '/src/assets/images/71.mp4', type: 'video', category: 'general', compliment: 'Perfect' },
  { src: '/src/assets/images/72.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/src/assets/images/74.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/src/assets/images/75.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/src/assets/images/76.mp4', type: 'video', category: 'general', compliment: 'Wonderful' },
  { src: '/src/assets/images/77.mp4', type: 'video', category: 'general', compliment: 'Elegant' },
  { src: '/src/assets/images/78.mp4', type: 'video', category: 'general', compliment: 'Gorgeous' },
  { src: '/src/assets/images/79.mp4', type: 'video', category: 'general', compliment: 'Lovely' },
  { src: '/src/assets/images/80.mp4', type: 'video', category: 'general', compliment: 'Fabulous' },
  { src: '/src/assets/images/81.mp4', type: 'video', category: 'general', compliment: 'Beautiful' },
  { src: '/src/assets/images/82.mp4', type: 'video', category: 'general', compliment: 'Stunning' },
  { src: '/src/assets/images/83.mp4', type: 'video', category: 'general', compliment: 'Amazing' },
  { src: '/src/assets/images/84.mp4', type: 'video', category: 'general', compliment: 'Perfect' },
  { src: '/src/assets/images/85.mp4', type: 'video', category: 'general', compliment: 'Radiant' },
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
