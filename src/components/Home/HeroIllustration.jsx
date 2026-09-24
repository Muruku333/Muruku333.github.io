import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import './HeroIllustration.css';

export default function HeroIllustration() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-40, 40], [-4, 4]);
  const rotateX = useTransform(sy, [-40, 40], [4, -4]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set(((e.clientX - cx) / cx) * 28);
      my.set(((e.clientY - cy) / cy) * 28);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <motion.div
      className="hero-illu"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="hero-illu__glow" />
      <svg className="hero-illu__svg" viewBox="0 0 520 520" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="desk" x1="80" y1="360" x2="440" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B5FA5" />
            <stop offset="0.5" stopColor="#00C8D7" />
            <stop offset="1" stopColor="#18D89F" />
          </linearGradient>
          <linearGradient id="screen" x1="160" y1="180" x2="360" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#04131F" />
            <stop offset="1" stopColor="#0A2740" />
          </linearGradient>
          <radialGradient id="eye" cx="0" cy="0" r="1" gradientTransform="translate(410 120) scale(70)">
            <stop stopColor="#F0C75E" />
            <stop offset="0.25" stopColor="#18D89F" />
            <stop offset="0.55" stopColor="#00AEEF" />
            <stop offset="1" stopColor="#04131F" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Peacock feathers */}
        <g className="hero-illu__feathers" opacity="0.9">
          <ellipse cx="410" cy="120" rx="70" ry="58" fill="url(#eye)" />
          <circle cx="410" cy="112" r="14" fill="#04131F" />
          <circle cx="410" cy="112" r="5" fill="#F0C75E" />
          <path
            d="M405 170C390 230 370 300 360 360"
            stroke="url(#desk)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <ellipse cx="95" cy="150" rx="48" ry="40" fill="url(#eye)" opacity="0.7" />
          <circle cx="95" cy="144" r="10" fill="#04131F" />
          <circle cx="95" cy="144" r="3.5" fill="#F0C75E" />
        </g>

        {/* Floating platform */}
        <g filter="url(#softGlow)">
          <rect x="110" y="300" width="300" height="26" rx="13" fill="url(#desk)" opacity="0.85" />
          <rect x="130" y="318" width="260" height="14" rx="7" fill="#00AEEF" opacity="0.25" />
        </g>

        {/* Laptop */}
        <g className="hero-illu__laptop">
          <rect x="155" y="175" width="210" height="140" rx="14" fill="url(#screen)" stroke="#00C8D7" strokeWidth="2" />
          <rect x="168" y="188" width="184" height="104" rx="8" fill="#061A27" />
          <path d="M178 210h70M178 226h120M178 242h95M178 258h140" stroke="#00E5C3" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
          <rect x="140" y="315" width="240" height="16" rx="5" fill="#0B3A55" />
          <rect x="220" y="318" width="80" height="6" rx="3" fill="#00C8D7" opacity="0.5" />
        </g>

        {/* Code window chrome */}
        <circle cx="178" cy="198" r="4" fill="#18D89F" />
        <circle cx="192" cy="198" r="4" fill="#00C8D7" />
        <circle cx="206" cy="198" r="4" fill="#00AEEF" />

        {/* Abstract developer silhouette hint */}
        <g opacity="0.55">
          <circle cx="260" cy="140" r="22" fill="#00C8D7" opacity="0.35" />
          <path d="M240 168c8 18 32 18 40 0" stroke="#00E5C3" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </motion.div>
  );
}
