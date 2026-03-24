import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export function PageTransition({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return <div ref={wrapperRef}>{children}</div>;
}
