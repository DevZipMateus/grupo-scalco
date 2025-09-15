import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals tracking
    const trackWebVitals = async () => {
      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');
        
        const sendToGTM = (metric: any) => {
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'web_vitals',
              metric_name: metric.name,
              metric_value: Math.round(metric.value),
              metric_rating: metric.rating,
              page_url: window.location.href
            });
          }
        };

        onCLS(sendToGTM);
        onINP(sendToGTM);
        onFCP(sendToGTM);
        onLCP(sendToGTM);
        onTTFB(sendToGTM);
      } catch (error) {
        console.log('Web Vitals não disponível:', error);
      }
    };

    trackWebVitals();
  }, []);

  return null;
};

// Resource hints helper
export const addResourceHints = () => {
  const links = [
    { rel: 'dns-prefetch', href: '//wa.me' },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://wa.me' },
  ];

  links.forEach(({ rel, href }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (rel === 'preconnect') link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};