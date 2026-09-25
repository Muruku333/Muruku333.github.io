const REVEAL_CLASS = 'aos-animate';
const OFFSET = 50;

let started = false;

export const initScrollReveal = () => {
  if (started || typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  started = true;

  const nodes = () => document.querySelectorAll('[data-aos]');

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    nodes().forEach((el) => el.classList.add(REVEAL_CLASS));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = el.getAttribute('data-aos-delay');
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add(REVEAL_CLASS);
        observer.unobserve(el);
      });
    },
    { rootMargin: `0px 0px -${OFFSET}px 0px`, threshold: 0 },
  );

  nodes().forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - OFFSET) {
      el.classList.add(REVEAL_CLASS);
    } else {
      observer.observe(el);
    }
  });
};

export const resetScrollReveal = () => {
  started = false;
};
