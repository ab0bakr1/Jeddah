import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Footer.css'
import logo from '../../IMG/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

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
                        <li><a href="">About Us</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">FQAs</a></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Feedbacks</a></li>
                        <li><a href="">Listing</a></li>
                        <li><a href="">Pricing Packages</a></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="">Food & Drinks</a></li>
                        <li><a href="">Hotels</a></li>
                        <li><a href="">Shopping</a></li>
                        <li><a href="">Beauty</a></li>
                        <li><a href="">Fitness</a></li>
                        <li><a href="">Bar & Club</a></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>Have a Questions?</h3>
                    <ul className='d-flex flex-column text-start' style={{listStyle: 'none'}}>
                        <li><a href=""><FontAwesomeIcon icon={faPhone} /> +966 12 215 1551</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faLocationDot} /> +966 12 215 1551</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faPaperPlane} /> +966 12 215 1551</a></li>
                    </ul>
                </div>
            </Row>
        </Container>
            <Row className='footer-copyright text-center g-0 py-3'>
                <p>Copyright ©2024 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <a href='https://portfolio-opal-delta-29.vercel.app/' target='_blank'>Abobakr Almashhor</a></p>
            </Row>
    </footer>
  )
}

export default Footer