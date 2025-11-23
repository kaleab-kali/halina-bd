# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to https://analytics.google.com/
2. Click **Start measuring** (or sign in if you have an account)
3. Create a new **Account** (e.g., "Helina Birthday Site")
4. Create a new **Property** (e.g., "Birthday Website 2025")
5. Select **Web** as the platform
6. Enter your website URL (even if temporary)
7. Complete the setup

## Step 2: Get Your Measurement ID

After creating the property, you'll see a **Measurement ID** like:
```
G-XXXXXXXXXX
```

Example: `G-ABC123DEF4`

## Step 3: Add ID to Website

1. Open `src/App.tsx`
2. Find this line (around line 34):
   ```tsx
   <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```tsx
   <GoogleAnalytics measurementId="G-ABC123DEF4" />
   ```
4. Save the file

## Step 4: Verify It's Working

1. Run your site: `npm run dev`
2. Open browser console (F12) - you should see:
   ```
   ✅ Google Analytics initialized: G-ABC123DEF4
   ```
3. Visit your site for 1-2 minutes
4. Go back to Google Analytics dashboard
5. Click **Reports** → **Realtime** → You should see yourself as a visitor!

## What Data You'll See

### Real-time Reports:
- Current visitors on the site
- What pages they're viewing
- Their location (city/country)
- Device type (mobile/desktop)

### Standard Reports (after 24-48 hours):
- **Total visits** (Sessions)
- **Unique visitors** (Users)
- **Page views** per section
- **Average time** spent on site
- **Bounce rate**
- **Traffic sources** (how they found the site)
- **Geographic location** of visitors
- **Device breakdown** (mobile vs desktop)
- **Browser/OS** used

## Viewing Your Stats

### Dashboard:
1. Go to https://analytics.google.com/
2. Select your property: "Birthday Website 2025"
3. Click **Reports** in left sidebar

### Key Metrics to Check:
- **Home** → Overview card shows total users
- **Realtime** → See current visitors (updates every few seconds)
- **Engagement** → Pages and screens → See which sections are most popular
- **User attributes** → Demographics → Age, gender, location
- **Tech** → Device category, browser, screen resolution

## Privacy Note

Google Analytics is GDPR compliant when configured properly. For a personal birthday site, you typically don't need a cookie banner, but check your local laws.

## Troubleshooting

**Not seeing data?**
1. Check console for errors (F12)
2. Verify Measurement ID is correct
3. Wait 24-48 hours for non-realtime reports
4. Make sure ad blockers are off when testing
5. Check that the site is deployed (not just localhost)

**Want to track custom events?**
Use the helper function in your code:
```tsx
import { trackEvent } from './components/GoogleAnalytics';

// Track when someone clicks "Make a Wish"
trackEvent('candle_blown', { section: 'birthday_cake' });
```

## Alternative: Vercel Analytics

If you deploy on Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Click **Analytics** tab
4. Enable it (free tier available)
5. No code changes needed!

Vercel Analytics is simpler but has less detail than Google Analytics.
