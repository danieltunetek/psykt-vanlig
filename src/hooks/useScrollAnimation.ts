'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally disconnect after first animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isVisible } as { ref: RefObject<T>; isVisible: boolean };
};

