import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.log('⚠️ Google Analytics: Add your Measurement ID in App.tsx');
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_path: window.location.pathname,
    });

    console.log('✅ Google Analytics initialized:', measurementId);

    return () => {
      script1.remove();
    };
  }, [measurementId]);

  return null;
};

// Helper to track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};
