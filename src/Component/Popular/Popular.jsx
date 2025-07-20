import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Popular.css"
import Popular1 from "../../IMG/Popular1.png"
import Popular2 from "../../IMG/Popular2.png"
import Popular3 from "../../IMG/Popular3.png"
import Popular4 from "../../IMG/Popular4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCircleCheck, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'



const Popular = () => {
  const [count, setCount] = useState(47)
  const [like, setLike] = useState(faHeart)
  function handleClick() {
    setCount(48)
    setLike (faHeartCircleCheck)
  }
  return (
    <section className='Popular py-5 my-5'>
        <Container>
            <h4>OUR LISTING</h4>
            <h3>Popular Listing</h3>
            <Row xxl={4} xl={4} md={2} sm={1} className="Popular-item">
              <div className="Popular-card p-0">
                <div className="Popular-img w-100 h-50">
                  <img src={Popular1} alt="" className='w-100 h-100' />
                </div>
                <div className="Popular-info">
                  <h6>SHOPPING</h6>
                  <h3>RedSea mall</h3>
                  <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                  <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                  <hr />
                  <div className="Popular-re d-flex w-100">
                    <div className="">
                      <p>Review: 4/5</p>
                    </div>
                    <div className="d-flex gap-2">
                      <p>liked: </p>
                      <button onClick={handleClick}><span>{count}</span> <FontAwesomeIcon icon={like} /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Popular-card p-0">
                <div className="Popular-img w-100 h-50">
                  <img src={Popular2} alt="" className='w-100 h-100' />
                </div>
                <div className="Popular-info">
                  <h6>SHOPPING</h6>
                  <h3>RedSea mall</h3>
                  <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                  <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                  <hr />
                  <div className="Popular-re d-flex w-100">
                    <div className="">
                      <p>Review: 4/5</p>
                    </div>
                    <div className="d-flex gap-2">
                      <p>liked: </p>
                      <button onClick={handleClick}><span>{count}</span> <FontAwesomeIcon icon={like} /></button>
                    </div>
                  </div>
                </div>

              </div>
              <div className="Popular-card p-0">
                <div className="Popular-img w-100 h-50">
                  <img src={Popular3} alt="" className='w-100 h-100' />
                </div>
                <div className="Popular-info">
                <h6>SHOPPING</h6>
                  <h3>RedSea mall</h3>
                  <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                  <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                  <hr />
                  <div className="Popular-re d-flex w-100">
                    <div className="">
                      <p>Review: 4/5</p>
                    </div>
                    <div className="d-flex gap-2">
                      <p>liked: </p>
                      <button onClick={handleClick}><span>{count}</span> <FontAwesomeIcon icon={like} /></button>
                    </div>
                  </div>
                </div>

              </div>
              <div className="Popular-card p-0">
                <div className="Popular-img w-100 h-50">
                  <img src={Popular4} alt="" className='w-100 h-100' />
                </div>
                <div className="Popular-info">
                <h6>SHOPPING</h6>
                  <h3>RedSea mall</h3>
                  <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                  <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                  <hr />
                  <div className="Popular-re d-flex w-100">
                    <div className="">
                      <p>Review: 4/5</p>
                    </div>
                    <div className="d-flex gap-2">
                      <p>liked: </p>
                      <button onClick={handleClick}><span>{count}</span> <FontAwesomeIcon icon={like} /></button>
                    </div>
                  </div>
                </div>

              </div>
            </Row>
        </Container>
    </section>
  )
}

export default Popular