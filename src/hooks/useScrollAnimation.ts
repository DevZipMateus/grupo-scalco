
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, baseDelay = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Para mobile, usar configurações menos restritivas
    const isMobile = window.innerWidth < 768;
    const mobileThreshold = isMobile ? 0.05 : 0.1;
    const mobileRootMargin = isMobile ? '0px' : '0px 0px -50px 0px';
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animation
          Array.from({ length: itemCount }).forEach((_, index) => {
            // Reduzir delay no mobile para melhor performance
            const delay = isMobile ? Math.min(baseDelay, 30) : baseDelay;
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * delay);
          });
        }
      },
      { 
        threshold: mobileThreshold, 
        rootMargin: mobileRootMargin 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [itemCount, baseDelay]);

  return { ref, visibleItems };
};
