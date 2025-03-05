import React from "react";


function Habilidades() {
  return (
    <section id="habilidades" className="HBcontainer">
     
      <h2 className="titleHB">Habilidades</h2>
      <div className="HBcontent">
        <div className="textContainerHB">
        <span  className="">
          <p className="textHB1">
          En cuanto a mis habilidades técnicas, manejo lo siguiente: 
          </p>
          <p className="textHB">
          Frontend:
          Desarrollo interfaces dinámicas y responsivas usando React.js aplicando HTML5, CSS3 y Bootstrap, y utilizando técnicas
          modernas como Flexbox, Grid y HTML semántico. También empleo
          framer-motion para crear animaciones. </p>
          <p className="textHB"> Backend: Trabajo con Node.js y
          Express.js para crear y mantener APIs RESTful, implementando
          autenticación y seguridad mediante JWT y bcrypt. 
          </p>  
          <p className="textHB">Bases de Datos:
          Integro y gestiono bases de datos NoSQL como MongoDB, y también tengo 
          experiencia con Firebase y MySQL, gestionando los verbos http con Postman. 
          </p>
          <p className="textHB">
          Control y Herramientas: Uso Git y
          GitHub para el control de versiones, y configuro proyectos con
          herramientas como Vite. Además, gestiono estados complejos en
          aplicaciones escalables utilizando Redux. Estos conocimientos me
          permiten desarrollar soluciones web completas y optimizadas.
          </p>
        </span>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
