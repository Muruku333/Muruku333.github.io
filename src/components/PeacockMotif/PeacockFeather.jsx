export default function PeacockFeather({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shaft" x1="210" y1="520" x2="210" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B5FA5" stopOpacity="0.1" />
          <stop offset="0.45" stopColor="#00A896" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F0C75E" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="ocellus" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 168) rotate(90) scale(118 96)">
          <stop stopColor="#F0C75E" />
          <stop offset="0.22" stopColor="#1B8A6B" />
          <stop offset="0.48" stopColor="#0B5FA5" />
          <stop offset="0.78" stopColor="#062A4A" />
          <stop offset="1" stopColor="#061018" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="barb" x1="210" y1="120" x2="60" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5CE1E6" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#0B5FA5" stopOpacity="0.35" />
          <stop offset="1" stopColor="#00A896" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="barbR" x1="210" y1="120" x2="360" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0C75E" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#1A8CD8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#0D6B4F" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M210 520C210 520 198 360 205 250C210 180 210 120 210 80"
        stroke="url(#shaft)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const t = i / 7;
        const y = 140 + t * 280;
        const spread = 40 + t * 130;
        return (
          <g key={i} opacity={0.55 + (1 - t) * 0.35}>
            <path
              d={`M210 ${y} C ${210 - spread * 0.4} ${y + 20}, ${210 - spread} ${y + 60}, ${210 - spread * 1.05} ${y + 110}`}
              stroke="url(#barb)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d={`M210 ${y} C ${210 + spread * 0.4} ${y + 20}, ${210 + spread} ${y + 60}, ${210 + spread * 1.05} ${y + 110}`}
              stroke="url(#barbR)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>
        );
      })}

      <ellipse cx="210" cy="168" rx="118" ry="96" fill="url(#ocellus)" />
      <circle cx="210" cy="158" r="28" fill="#061018" opacity="0.92" />
      <circle cx="210" cy="158" r="11" fill="#F0C75E" />
      <circle cx="214" cy="154" r="3.5" fill="#FFF6D6" opacity="0.85" />
    </svg>
  );
}
