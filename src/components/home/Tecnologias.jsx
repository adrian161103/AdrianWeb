import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { SiVite } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
function Tecnologias() {
  return (
    <section id="Tecnologias"  className="HBcontainer Tcontainer">
          <h2 className="titleHB">Tecnologías que manejo</h2>
      <div className="IconContainerHB">
      <div className="IconWrapper">
        <IoLogoJavascript className="IconHB" color="#F7DF1E" />
        </div>
        <div className="IconWrapper">
        <FaReact className="IconHB" color="#61DAFB" />
        </div>
        <div className="IconWrapper">
        <FaHtml5 className="IconHB" color="#E34F26" />
        </div>
        <div className="IconWrapper">
        <FaCss3Alt className="IconHB" color="#1572B6" />
        </div>
        <div className="IconWrapper">
        <FaNode className="IconHB" color="#68A063" />
        </div>
        <div className="IconWrapper">
        <BiLogoMongodb className="IconHB" color="#4DB33D" />
        </div>
        
        <div className="IconWrapper">
        <FiGithub className="IconHB" color="#181717" />
        </div>
        <div className="IconWrapper">
        <SiVite className="IconHB" color="#646CFF" /> 
        </div>
        <div className="IconWrapper">
        <SiPostman className="IconHB" color="#FF6C37"/>
        </div>
         <div className="IconWrapper">
        <SiTypescript className="IconHB" color="#3178c6"/>
        </div>
        <div className="IconWrapper">
        <RiTailwindCssFill className="IconHB" color="#06B6D4"/>
        </div>

      </div>
    </section>
  )
}

export default Tecnologias