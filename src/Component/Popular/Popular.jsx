import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Popular.css"

const Popular = () => {
  return (
    <section className='Popular py-5'>
        <Container>
            <h4>OUR LISTING</h4>
            <h3>Popular Listing</h3>
            <Row xl={4} md={2} sm={1} className="Popular-item">
                <Col xl={3} md={6} sm={12} className="Popular-card">
                  
                </Col>
                <Col xl={3} md={6} sm={12} className="Popular-card"></Col>
                <Col xl={3} md={6} sm={12} className="Popular-card"></Col>
                <Col xl={3} md={6} sm={12} className="Popular-card"></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Popular