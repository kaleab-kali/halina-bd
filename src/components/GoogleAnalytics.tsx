import { useMemo, memo, useCallback } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface GoogleAnalyticsProps {
  readonly measurementId: string;
}

const GoogleAnalyticsComponent = ({ measurementId }: GoogleAnalyticsProps) => {
  const initializeAnalytics = useCallback(() => {
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      return;
    }

    const script = globalThis.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    globalThis.document.head.appendChild(script);

    globalThis.window.dataLayer = globalThis.window.dataLayer || [];
    globalThis.window.gtag = (...args: unknown[]) => {
      globalThis.window.dataLayer?.push(args);
    };
    globalThis.window.gtag('js', new Date());
    globalThis.window.gtag('config', measurementId, {
      page_path: globalThis.window.location.pathname,
    });

    return () => {
      script.remove();
    };
  }, [measurementId]);

  useMemo(() => {
    initializeAnalytics();
  }, [initializeAnalytics]);

  return null;
};

GoogleAnalyticsComponent.displayName = 'GoogleAnalytics';

export const GoogleAnalytics = memo(
  GoogleAnalyticsComponent,
  (prev, next) => prev.measurementId === next.measurementId
);

export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (globalThis.window.gtag) {
    globalThis.window.gtag('event', eventName, eventParams);
  }
};
