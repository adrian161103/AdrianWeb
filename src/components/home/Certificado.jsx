import React from 'react';

function Certificado() {
  return (
    <section id="Certificado" className="HBcontainer">
      <h2 className="titleHB">Certificado</h2>
      
      <div className="certificadoContainer">
        <p className="textHB1">
          <span>certificado de aprobacion otorgado por la{" "}</span>
          <span style={{ color: "rgb(115, 221, 221)" }}>
            "Universidad Tecnologica Nacional"
          </span>
        </p>
        
       
        <div className="container">
          <a 
            className="linkWrapper" 
            href="Certificados.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              className="imgCertificado"
              src="img/Certificado.png"
              alt="certificado"
            />  <span className='overlays'>CLICK PARA VER EL CERTIFICADO</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certificado;