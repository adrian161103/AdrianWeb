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
          <p style={{marginTop: "1rem"}} className="textAM">
          <span> Frontend:</span>
          <ul>
          <li>React.js,TailwindCss, Next.js, HTML5, CSS3, Bootstrap</li>
          <li>Creación de interfaces dinámicas y responsivas.</li>
          <li>Redux, React Router, React Query y Hooks.</li>
          <li> Framer Motion para animaciones y transiciones atractivas.</li>
          <li>Desarrollo de componentes reusables y escalables.</li>
          </ul>
          </p>
          <p className="textAM"> 
            <span>Backend:</span>
            <ul>
          <li>Node.js, Express.js</li>
          <li>Desarrollo y consumo de APIs REST.</li>
          <li>Integración con bases de datos NoSQL (MongoDB) y SQL (MySQL).</li>
          <li>Seguridad y autenticación con JWT y bcrypt.</li>
          </ul>
          </p>
          <p className="textAM">
          Control de Versiones:
          <ul>
          <li>Git y GitHub para el seguimiento y colaboración en proyectos.</li>
          <li>Implementación de CI/CD para despliegues automatizados y optimizados.</li>
          </ul>
          </p>
        </span>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
