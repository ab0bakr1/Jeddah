import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Jeddah.css'

const Jeddah = () => {
  return (
    <section className='Jeddah'>
        <Container>
            <Row xl={2} lg={2} md={1} sm={1} className="Jeddah-item g-0">
                <div className="Jeddah-img col-md-6">
                    <img src="https://www.travellwd.com/wp-content/uploads/2020/08/king-fahad-fountain-jeddah-4.jpg" alt="" className='w-100 h-100' />
                </div>
                <div className="Jeddah-info py-5 ps-md-5 col-md-6">
                    <div className="Jeddah-text py-3">
                        <h6>welcome to jeddah</h6>
                        <h3>jeddah A Directory & Listing</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                    <Row xl={4} lg={4} md={2} sm={1} className="Jeddah-card g-0 ">
                        <div className="card-item p-2 text-center">
                            <h4>105</h4>
                            <p>YEARS OF EXPERIENCED</p>
                        </div>
                        <div className="card-item p-2 text-center">
                            <h4>210K+</h4>
                            <p>TOTAL LISTING</p>
                        </div>
                        <div className="card-item p-2 text-center">
                            <h4>450</h4>
                            <p>COMPANY STAF</p>
                        </div>
                        <div className="card-item p-2 text-center">
                            <h4>97%</h4>
                            <p>HAPPY PEOPLE</p>
                        </div>
                    </Row>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Jeddah