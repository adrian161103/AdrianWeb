import React from "react";
function AboutMe() {
  return (
    <section className="AMcontainer" id="AboutMe">
      <h1 className="titleHB">¿Quien Soy?</h1>
      <div className="ContPimg">
      <div className="imgAMCont">
          <img className="imgAM" src="public/img/yo.jpg" alt="yo" />
        </div>
        <div className="textContainerAM">    
        <p className="textAM"> 
          Como estudiante de ingenieria en sistemas me encanta el desarrollo y
          la logica de la programacion, Con una experiencia de 1 año en el area de 
          web full stack development y un buen conocimiento en el area de bases de datos. Me encanta 
          trabajar en equipo y generar nuevos conocimientos. Me considero una persona 
          autodidacta y con buena comunicacion. 
        </p>
        <div className="buttonsAM">
        <button className="buttonAM1">     
               <a className="a1" target="_blank" href="public\Adrian Alejos Curriculum Vitate.pdf">CV ES</a>
        </button>
        <button className="buttonAM2">
        <a  className="a2" target="_blank" href="public\Adrian Alejos Garcia CV PERFORMANCE.pdf"  >CV IN</a>
        </button>
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default AboutMe;
