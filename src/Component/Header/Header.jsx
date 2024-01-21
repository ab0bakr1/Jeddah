import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../../IMG/logo.png"
import "./Header.css"
import Navbar from "./Navbar";
import { motion } from "framer-motion"
import Button from "../Header/Button"
import Navmobile from "./Navmobile";


const variants = {
    open: {
      clipPath: "circle(1200px at 350px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 350px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header>
            <Container>
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <Navbar />
                    <div className="ul-mobile">
                        <motion.div className="nav-side" animate={open ? "open" : "closed"}>
                            <motion.div className="nav-back" variants={variants}>
                            <Navmobile />
                            </motion.div>
                            <Button setOpen={setOpen} />
                        </motion.div>
                    </div>
                    <button className="btn btn-primary">+ add listing</button>
                </div>
            </Container>
        </header>
    )
}
export default Header;