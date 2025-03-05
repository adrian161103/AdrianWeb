import PropTypes from "prop-types";
import React from "react";

function Footer({ socials }) {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-links">
        </div>
        <div className="social-mediaS">
          {socials &&
            socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="social-iconS"
                target="_blank"
                rel="noopener noreferrer"
              >
                {typeof social.icon === "string" ? (
                  <i className={`bi bi-${social.icon}`} aria-hidden="true"></i>
                ) : (
                  social.icon
                )}
              </a>
            ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; copyright 2025</p>
        <p>
          Desarrollado por:{" "}
          <a href="https://github.com/adrian161103">ADRIAN</a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    })
  ),
};

export default Footer;