
import { useEffect, useRef } from 'react';

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealAnimation({ children, className = '', delay = 0 }: RevealAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-animation ${className}`}>
      {children}
    </div>
  );
}
