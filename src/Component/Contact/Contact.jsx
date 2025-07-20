import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Contact.css'
import { Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className='contact'>
        <Container>
            <Row xl={2} lg={2} md={1} sm={1} className='contact-item g-0'>
                <div className="contact-info py-5 px-2">
                    <h3>contact us</h3>
                    <h6>For more details you can contact with us</h6>
                    <div className="contact-us">
                        <div className="contact-card">
                            <h5>Phone</h5>
                            <p>+966 50 132 2844</p>
                        </div>
                        <div className="contact-card">
                            <h5>Email</h5>
                            <p>gGQp9@example.com</p>
                        </div>
                        <div className="contact-card">
                            <h5>Address:</h5>
                            <p>Jeddah, Saudi Arabia</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form action="">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='Subject' />
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                            <button>send</button>
                        </form>
                    </div>
                    <div className="follow">
                        <h5>follow us</h5>
                        <div className="social">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faXTwitter} />
                        </div>
                    </div>
                </div>
                <div className="contact-img col-md-6">
                    <img src="https://saudipedia.com/saudipedia/uploads/images/2023/08/26/thumbs/400x400/65487.jpg" alt="" className='w-100 h-100' />
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Contact