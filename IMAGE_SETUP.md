# Image Setup Guide for Helina's Birthday Website

## Required Images

Place all images in the `public/images/` directory with these exact filenames:

### 1. Cover/Hero Section (1 image)
- `cover-selfie.jpg` - Best selfie for the magazine cover (high quality, portrait)

### 2. Identity Reveals (6 images total)
#### The Healer (1 image)
- `pharmacist.jpg` - Photo in pharmacist attire/at work

#### The Culture Icon (2 images)
- `habesha1.jpg` - First Habesha dress photo
- `habesha2.jpg` - Second Habesha dress photo

#### The Unstoppable (3 images)
- `gym1.jpg` - First gym/workout photo
- `gym2.jpg` - Second gym/workout photo
- `gym3.jpg` - Third gym/workout photo

### 3. Favorite Child Section (1 image)
- `favorite-child.jpg` - Photo showing her name on house items

### 4. Selfie Gallery (5-7 images)
- `selfie1.jpg`
- `selfie2.jpg`
- `selfie3.jpg`
- `selfie4.jpg`
- `selfie5.jpg`
- `selfie6.jpg` (optional)
- `selfie7.jpg` (optional)

## Image Specifications

### Recommended Sizes:
- **Cover selfie**: 1080x1920px (portrait, high quality)
- **Identity photos**: 900x1200px (portrait orientation)
- **Selfies**: 800x1067px or higher (portrait)
- **Favorite child**: 1200x900px (landscape or portrait)

### Format:
- Use `.jpg` or `.jpeg` format
- Optimize for web (compress without losing quality)
- Tools: TinyPNG, Squoosh, or Photoshop "Save for Web"

### Quality Guidelines:
- High resolution, well-lit photos
- Clear faces, good composition
- Minimal blur or pixelation
- Consistent color grading (optional but nice)

## Quick Setup Steps

1. Create directory:
   ```bash
   mkdir -p public/images
   ```

2. Copy your photos to `public/images/` and rename them according to the list above

3. Verify all images are in place:
   ```bash
   ls public/images/
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

## Optional: Custom Compliments

Edit the compliments in `src/components/sections/PhotoGallery.tsx` at line 9-15 to personalize the text that appears on hover over each selfie.

## Troubleshooting

**Images not loading?**
- Check filenames match exactly (case-sensitive)
- Ensure images are in `public/images/` not `src/assets/images/`
- Clear browser cache and refresh
- Check browser console for 404 errors

**Need different image names?**
- Edit `src/App.tsx` and update the image paths in the component props
