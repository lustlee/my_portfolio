import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal<T extends HTMLElement>() {
  const sectionRef = useRef<T | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const targets = sectionRef.current?.querySelectorAll('[data-reveal]');
      if (!targets?.length) {
        return;
      }

      gsap.fromTo(
        targets,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
}
