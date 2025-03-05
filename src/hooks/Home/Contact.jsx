/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const floatVariants = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -10, 0],
    transition: {
      delay: i * 0.4,   
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

function Contact({ socials }) {
  return (
    <section>
      <div className="footer-content">
        <div className="footer-links"></div>
        <div className="social-media">
          {socials &&
            socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={floatVariants}
                animate="animate"
                style={{ display: "inline-block", margin: "0 8px" }}
              >
                {social.icon}
              </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
};

export default Contact;
