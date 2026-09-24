import './Atmosphere.css';

export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere__base" />
      <div className="atmosphere__blob atmosphere__blob--1" />
      <div className="atmosphere__blob atmosphere__blob--2" />
      <div className="atmosphere__blob atmosphere__blob--3" />
      <div className="atmosphere__feather atmosphere__feather--1" />
      <div className="atmosphere__feather atmosphere__feather--2" />
      <div className="atmosphere__grid" />
      <div className="atmosphere__particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
    </div>
  );
}
