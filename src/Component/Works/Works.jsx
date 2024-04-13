import React from 'react'
import './Works.css'
import { Container, Row } from 'react-bootstrap'
import Work from '../../IMG/hotel.png'

const Works = () => {
  return (
    <section className='Works'>
        <Container>
            <h5 className='text-center'>LET'S FIND OUT</h5>
            <h2 className="text-center">How It Works</h2>
            <div className='Works-video'>
                <iframe className='w-100 h-100' width="1519" height="566" src="https://www.youtube.com/embed/FMbaL6RSkVI" title="JEDDAH Saudi Arabia 🇸🇦 A Blend of Tradition and Modernity | Things to do in Jeddah ksa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Row xl={4} lg={4} md={2} sm={1} className="gap-4 justify-content-center g-0  mt-5">
                <div className="Works-card">
                    <div className="card-img">
                        <img src={Work} alt="" className='w-50 h-50' />
                    </div>
                    <div className="card-title my-4">
                        <h4>1.Choose A Category</h4>
                    </div>
                    <div className="card-text">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
                <div className="Works-card">
                    <div className="card-img">
                        <img src={Work} alt="" className='w-50 h-50' />
                    </div>
                    <div className="card-title my-4">
                        <h4>2.Find What You Want</h4>
                    </div>
                    <div className="card-text">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
                <div className="Works-card">
                    <div className="card-img">
                        <img src={Work} alt="" className='w-50 h-50' />
                    </div>
                    <div className="card-title my-4">
                        <h4>3.Select The Best Place</h4>
                    </div>
                    <div className="card-text">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
                <div className="Works-card">
                    <div className="card-img">
                        <img src={Work} alt="" className='w-50 h-50' />
                    </div>
                    <div className="card-title my-4">
                        <h4>4.Explore The Place</h4>
                    </div>
                    <div className="card-text">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Works