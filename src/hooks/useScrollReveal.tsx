import { useEffect, useRef, useState } from "react";

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

type AnimationType = 
  | "fade-up" 
  | "fade-in" 
  | "slide-left" 
  | "slide-right" 
  | "slide-down" 
  | "zoom-in" 
  | "rotate-in" 
  | "bounce-in"
  | "scale-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
  duration?: number;
  stagger?: number; // For staggering child animations
}

export const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-up",
  duration = 700,
  stagger = 0
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  const getAnimationClass = () => {
    const animationMap: Record<AnimationType, { visible: string; hidden: string }> = {
      "fade-up": { 
        visible: "opacity-100 translate-y-0", 
        hidden: "opacity-0 translate-y-10" 
      },
      "fade-in": { 
        visible: "opacity-100", 
        hidden: "opacity-0" 
      },
      "slide-left": { 
        visible: "opacity-100 translate-x-0", 
        hidden: "opacity-0 translate-x-12" 
      },
      "slide-right": { 
        visible: "opacity-100 translate-x-0", 
        hidden: "opacity-0 -translate-x-12" 
      },
      "slide-down": { 
        visible: "opacity-100 translate-y-0", 
        hidden: "opacity-0 -translate-y-10" 
      },
      "zoom-in": { 
        visible: "opacity-100 scale-100", 
        hidden: "opacity-0 scale-90" 
      },
      "rotate-in": { 
        visible: "opacity-100 rotate-0 scale-100", 
        hidden: "opacity-0 -rotate-6 scale-95" 
      },
      "bounce-in": { 
        visible: "opacity-100 scale-100", 
        hidden: "opacity-0 scale-50" 
      },
      "scale-up": { 
        visible: "opacity-100 scale-100", 
        hidden: "opacity-0 scale-95" 
      },
    };

    return animationMap[animation];
  };

  const animClasses = getAnimationClass();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all ease-out ${
        isVisible ? animClasses.visible : animClasses.hidden
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

// Stagger component for animating children with delays
interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  animation?: AnimationType;
  className?: string;
}

export const Stagger = ({ 
  children, 
  staggerDelay = 100,
  animation = "fade-up",
  className = "" 
}: StaggerProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <>
      {childrenArray.map((child, index) => (
        <ScrollReveal 
          key={index} 
          delay={index * staggerDelay}
          animation={animation}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
};
