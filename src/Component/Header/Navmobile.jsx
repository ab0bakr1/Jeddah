import React from 'react'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import logo2 from "../../IMG/logo2.png"

const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
const Navmobile = () => {
    const items = ["HOME", "About", "listing", "blog","Contact"];
  return (
    <>
    <div className="logo-mobile" >
      <img src={logo2} alt="" />
    </div>
    <motion.div className="ul-mobile" variants={variants}>
      {items.map((item) => (
        <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {item}
        </motion.a>
        ))}
    </motion.div>
    </>
  )
}

export default Navmobile