/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Contact from "../../hooks/Home/Contact";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";

const letters = "Alejo".split("");

const letterVariantsDesktop = {
  initial: { x: 0, y: 0, rotate: 0 },
  animate: (i) => ({
    x: i === 0 ? 0 : 10 + 15 * i,       
    y: i === 0 ? 0 : 10 + 20 * i,  
    rotate: i === 0 ? 0 : 10 * i,
    transition: {
      delay: 1 + (letters.length - 1 - i) * 0.4,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const letterVariantsMobile = {
  initial: { x: 0, y: 0, rotate: 0 },
  animate: (i) => ({
    x: i === 0 ? 0 : 5 + 5 * i,       
    y: i === 0 ? 0 : 5 + 8 * i,  
    rotate: i === 0 ? 0 : 5 * i,
    transition: {
      delay: 0.5 + (letters.length - 1 - i) * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const lettersS = "s".split("");

const letterVariantsSDesktop = {
  initial: { x: 0, y: 0, rotate: 0 },
  animate: (i) => ({
    x: 60,       
    y: 140,  
    rotate: 60,
    transition: {
      delay: 1 + (letters.length - i) * 0,
      duration: 0.1,
      ease: "easeOut"
    }
  })
};

const letterVariantsSMobile = {
  initial: { x: 0, y: 0, rotate: 0 },
  animate: (i) => ({
    x: 25,       
    y: 50,  
    rotate: 30,
    transition: {
      delay: 0.5,
      duration: 0.1,
      ease: "easeOut"
    }
  })
};

function Presentacion() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1050);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1050);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socials = [
    { className: 'linkedin', url: 'https://www.linkedin.com/in/adrianalejosgarcia/', name: 'Linkedin', icon: <SlSocialLinkedin /> },
    { className: 'gmail', url: 'mailto:adriankeomaa@gmail.com/', name: 'Gmail', icon: <CiMail /> },
    { className: 'github', url: 'https://github.com/adrian161103', name: 'Github', icon: <FiGithub /> }
  ];

  return (
    <section id="inicio" className="presentacion">
      <p className="title">¡Hola! Mi nombre es</p>
      <h1 className="retro">
        <span className="retroname">Adrian </span>
        <span className="retrolastname">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={isMobile ? letterVariantsMobile : letterVariantsDesktop}
              initial="initial"
              animate="animate"
              style={{ display: "inline-block", transformOrigin: "0% 50%" }}
            >
              {letter}
            </motion.span>
          ))}

          {lettersS.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={isMobile ? letterVariantsSMobile : letterVariantsSDesktop}
              initial="initial"
              animate="animate"
              style={{ display: "inline-block", transformOrigin: "0% 50%" }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </h1>
      <p className="description">
      Bienvenido a mi portafolio. Aquí encontraras mis  conocimientos,  habilidades y proyectos como Web Full Stack Developer.      </p>
      <Contact className="contact" socials={socials} />
    </section>
  );
}

export default Presentacion;