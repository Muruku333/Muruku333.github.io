import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mqFine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    const sync = () => {
      const on = mqFine.matches && !mqReduce.matches;
      setEnabled(on);
      document.documentElement.classList.toggle('has-custom-cursor', on);
    };

    sync();
    mqFine.addEventListener('change', sync);
    mqReduce.addEventListener('change', sync);
    return () => {
      mqFine.removeEventListener('change', sync);
      mqReduce.removeEventListener('change', sync);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setVisible(true);
    };

    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const interactive = t.closest('a, button, [role="button"], .cursor-target, input, textarea, label');
      setActive(Boolean(interactive));
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={`custom-cursor ${visible ? 'is-visible' : ''} ${active ? 'is-active' : ''}`} aria-hidden="true">
      <div className="custom-cursor__dot" ref={dotRef} />
      <div className="custom-cursor__ring" ref={ringRef} />
    </div>
  );
}
