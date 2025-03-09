import React, { useEffect, useRef } from 'react';
import useNeonParticles from '../hooks/particles.jsx';
import Particles from "react-tsparticles";

function Image() {
  const { particlesInit, particlesLoaded, options } = useNeonParticles();
  const bgRef = useRef(null);

  useEffect(() => {
    const updateBgHeight = () => {
      if (bgRef.current && window.visualViewport) {
        bgRef.current.style.height = `${window.visualViewport.height}px`;
      } else if (bgRef.current) {
        bgRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    updateBgHeight();

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateBgHeight);
    } else {
      window.addEventListener('resize', updateBgHeight);
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateBgHeight);
      } else {
        window.removeEventListener('resize', updateBgHeight);
      }
    };
  }, []);

  return (
    <>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
        }}
      />
      <div ref={bgRef} className="Image"></div>
    </>
  );
}

export default Image;