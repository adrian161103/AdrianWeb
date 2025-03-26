import React from "react";
function AboutMe() {
  return (
    <section className="AMcontainer" id="AboutMe">
      <h1 className="titleHB">¿Quien Soy?</h1>
      <div className="ContPimg">
        <div className="imgAMCont">
          <img className="imgAM" src="img/yo.jpg" alt="yo" />
        </div>
        <div className="textContainerAM">
          <p className="textAM">
            <span>
            Soy Adrián Alejos García, estudiante de Ingeniería en Sistemas de
            Información en la UTN y desarrollador Full Stack con experiencia en
            tecnologías como React.js, Node.js y bases de datos NoSQL. Mi
            enfoque está en la construcción de aplicaciones web eficientes,
            escalables y seguras, aplicando principios sólidos de ingeniería. Aquí encontrarás mis proyectos, habilidades y experiencia
            en desarrollo web,
            optimización y mejores prácticas en el mundo del software. Mi
            objetivo es seguir creciendo profesionalmente y compartir mis
            conocimientos con la comunidad tech.
         </span>
          </p>
          <div className="buttonsAM">
            <button className="buttonAM1">
              <a
                className="a1"
                target="_blank"
                href="Adrian Alejos Garcia Curriculum Vitae.pdf"
              >
                CV ES
              </a>
            </button>
            <button className="buttonAM2">
              <a
                className="a2"
                target="_blank"
                href="Adrian Alejos Garcia Curriculum Vitae Performance.pdf"
              >
                CV EN
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
