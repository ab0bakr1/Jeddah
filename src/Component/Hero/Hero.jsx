import React from 'react'
import "./Hero.css"
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <main className="hero">
        <Container>
            <div className='hero-info'>
                <h2>Let's explore Jeddah city</h2>
                <p>The city of Jeddah, the bride of the Red Sea</p>
            </div>
        </Container>
    </main>
  )
}

export default Hero