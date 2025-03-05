/* eslint-disable no-unused-vars */
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

const useNeonParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);


  const options = {
    background: {
      color: { value: "#000000" } 
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      color: {
        value: ["#ff007f", "#00ffff", "#7f00ff"] 
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.8,
        random: { enable: true },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.3,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out"}
      }
    },
    detectRetina: true
  };

  return { particlesInit, particlesLoaded, options };
};

export default useNeonParticles;