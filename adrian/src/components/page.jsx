import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import propTypes from "prop-types";
import { BiLogoGmail } from "react-icons/bi";

function Page({ children, gap }) {
  const socials = [
    { url: "https://github.com/adrian161103 ", name: "GitHub", icon: <FiGithub className=" github" /> },
    { url: "https://www.linkedin.com/in/adrianalejosgarcia/", name: "LinkedIn", icon: <SlSocialLinkedin className=" linkedin" /> },
    { url: "https://www.instagram.com/adrian.alej0s?igsh=djBybXYzNWl2ejl6", name: "instagram", icon: < FaInstagram className=" instagram"/> },
    { url: "mailto:adriankeomaa@gmail.com/", name: "gmail", icon: < BiLogoGmail className="gmail"/> },
  ];

  return (
    <section className={`pageSection ${gap ? "pageSectionGap" : ""}`}>
      <Header />
      {children}
      <Footer socials={socials} />
    </section>
  );
}

Page.propTypes = {
  children: propTypes.node.isRequired,
  gap: propTypes.bool,
};

export default Page;