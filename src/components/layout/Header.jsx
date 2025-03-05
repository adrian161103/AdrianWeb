import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div  className={`overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}></div>
      <header className="headerContainer">
      <div className="logo">
        <a href="#inicio" >ADRIAN</a>
      </div>

      <div className="menuIcon" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>

      <nav  className={`navMenu ${menuOpen ? "open" : ""}`}>
        <ul className="HeaderUl">
          <li className="HeaderLi">
            <a href="#inicio" onClick={() => setMenuOpen(false)}>INICIO</a>
          </li>
          <li className="HeaderLi">
            <a href="#AboutMe" onClick={() => setMenuOpen(false)}> SOBRE MI</a>
          </li>
          
          <li className="HeaderLi">
            <a href="#Certificado" onClick={() => setMenuOpen(false)}>CERTIFICADO</a>
          </li>
          <li className="HeaderLi">
            <a href="#habilidades" onClick={() => setMenuOpen(false)}>HABILIDADES</a>
          </li>
          <li className="HeaderLi">
            <a href="#Tecnologias" onClick={() => setMenuOpen(false)}>Tecnologias</a>
          </li>
          <li className="HeaderLi">
            <a target="_blank" href="public\Adrian Alejos Garcia CV PERFORMANCE.pdf"  onClick={() => setMenuOpen(false)}>CV INGLES</a>
          </li>
          <li className="HeaderLi">
            <a target="_blank" href="public\Adrian Alejos Curriculum Vitate.pdf" onClick={() => setMenuOpen(false)}>CV ESPAÑOL</a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
