import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground({ theme }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const isDark = theme === 'dark';

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: isDark ? '#5CE1E6' : '#0B5FA5' },
          links: {
            color: isDark ? '#00C8D7' : '#0891B2',
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50,
            limit: 80,
          },
          opacity: { value: 0.35 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
