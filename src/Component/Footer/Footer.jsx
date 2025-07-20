import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Footer.css'
import logo from '../../IMG/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row xl={5} lg={5} md={2} sm={1} className="footer-item g-0 py-5">
                <div className="footer-card">
                    <img src={logo} alt="" className='w-75 h-25' />
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="footer-social">
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
                <div className="footer-card">
                    <h3>Explore</h3>
                    <ul>
                        <li><Link to="/About">About Us</Link></li>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Help</Link></li>
                        <li><Link to="/">FQAs</Link></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/Contact">Contact Us</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Feedbacks</Link></li>
                        <li><Link to="/Listing">Listing</Link></li>
                        <li><Link to="/">Pricing Packages</Link></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to="/">Food & Drinks</Link></li>
                        <li><Link to="/">Hotels</Link></li>
                        <li><Link to="/">Shopping</Link></li>
                        <li><Link to="/">Beauty</Link></li>
                        <li><Link to="/">Fitness</Link></li>
                        <li><Link to="/">Bar & Club</Link></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Have a Questions?</h3>
                    <ul className='d-flex flex-column text-start' style={{listStyle: 'none'}}>
                        <li><Link to="/"><FontAwesomeIcon icon={faPhone} /> +966 12 215 1551</Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faLocationDot} /> +966 12 215 1551</Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faPaperPlane} /> +966 12 215 1551</Link></li>
                    </ul>
                </div>
            </Row>
        </Container>
            <Row className='footer-copyright text-center g-0 py-3'>
                <p>Copyright ©2024 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <a href='https://portfolio-opal-delta-29.vercel.app/' target='_blank' rel="noreferrer">Abobakr Almashhor</a></p>
            </Row>
    </footer>
  ) 
}

export default Footer