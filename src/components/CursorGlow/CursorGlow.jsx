import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './CursorGlow.css';

let burstIdCounter = 0;
const SPARK_COUNT = 8;
const SPARK_COLORS = ['#00C8D7', '#00AEEF', '#18D89F', '#00E5C3'];

export default function CursorGlow({ theme }) {
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const [active, setActive] = useState(false);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!supportsFinePointer || prefersReducedMotion) return undefined;

    setActive(true);

    const handleMove = (event) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!glowRef.current) return;
        glowRef.current.style.setProperty('--glow-x', `${event.clientX}px`);
        glowRef.current.style.setProperty('--glow-y', `${event.clientY}px`);
      });
    };

    const handleClick = (event) => {
      const burstId = burstIdCounter++;
      const newSparks = Array.from({ length: SPARK_COUNT }, (_, i) => {
        const angle =
          (i / SPARK_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const distance = 28 + Math.random() * 24;
        return {
          id: `${burstId}-${i}`,
          burstId,
          x: event.clientX,
          y: event.clientY,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          color: SPARK_COLORS[i % SPARK_COLORS.length],
        };
      });

      setSparks((prev) => [...prev, ...newSparks]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.burstId !== burstId));
      }, 650);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleClick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={glowRef}
        className={`cursor-glow-blob cursor-glow-blob--${theme}`}
        aria-hidden="true"
      />
      <div className="cursor-spark-layer" aria-hidden="true">
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.span
              key={spark.id}
              className="cursor-spark"
              style={{
                left: spark.x,
                top: spark.y,
                '--spark-color': spark.color,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ x: spark.dx, y: spark.dy, opacity: 0, scale: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
