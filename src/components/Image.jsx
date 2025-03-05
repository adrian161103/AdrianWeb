
import useNeonParticles   from '../hooks/particles.jsx'
import Particles from "react-tsparticles";
function image() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { particlesInit, particlesLoaded, options } = useNeonParticles()
  return (
    <>
    <Particles  init={particlesInit}
            loaded={particlesLoaded}
            options={options} />
      <img className="Image"  src="img/cyber.jpg" alt="CyberPunk" draggable="false" style={{ userSelect: "none", pointerEvents: "none" }}/>
    </>
  );
}

export default image;
