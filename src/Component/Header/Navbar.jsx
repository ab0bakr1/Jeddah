import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

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
const Navbar = () => {
    const items = ["HOME", "About", "Listing", "blog","Contact"];
  return (
        <motion.div className="ul" variants={variants}>
          {items.map((item) => (
            <motion.a
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={`/${item}`}>
                {item}
              </Link>
            </motion.a>
          ))}
        </motion.div>
      )
    }


export default Navbar