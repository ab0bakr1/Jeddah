import React from 'react'
import './Services.css'
import { Container, Row } from 'react-bootstrap'
import Health from "../../IMG/healthy-food.png"
import cinema from "../../IMG/cinema.png"
import food from "../../IMG/fast-food.png"
import fitness from "../../IMG/fitness.png"
import game from "../../IMG/game.png"
import horse from "../../IMG/horse.png"
import hotel from "../../IMG/hotel.png"
import resort from "../../IMG/resort.png"
import shopping from "../../IMG/shopping.png"
import care from "../../IMG/skin-care.png"
import sport from "../../IMG/sport.png"
import stadium from "../../IMG/stadium.png"


const Services = () => {
  return (
    <section className='Services'>
        <Container>
            <Row xl={6} lg={6} md={4} sm={1} className="Services-item">
                <div className="Services-card">
                    <img src={Health} alt="" />
                    <h3>Health</h3>
                    <p>Health<span>20</span></p>
                </div>
                <div className="Services-card">
                    <img src={shopping} alt="" />
                    <h3>shopping</h3>
                    <p>shopping<span>153</span></p>
                </div>
                <div className="Services-card">
                    <img src={hotel} alt="" />
                    <h3>hotel</h3>
                    <p>hotel<span>124</span></p>
                </div>
                <div className="Services-card">
                    <img src={resort} alt="" />
                    <h3>resort</h3>
                    <p>resort<span>34</span></p>
                </div>
                <div className="Services-card">
                    <img src={game} alt="" />
                    <h3>game</h3>
                    <p>game<span>27</span></p>
                </div>
                <div className="Services-card">
                    <img src={food} alt="" />
                    <h3>Fast-Food</h3>
                    <p>Fast-Food<span>495</span></p>
                </div>
                <div className="Services-card">
                    <img src={fitness} alt="" />
                    <h3>fitness</h3>
                    <p>fitness<span>140</span></p>
                </div>
                <div className="Services-card">
                    <img src={cinema} alt="" />
                    <h3>cinema</h3>
                    <p>cinema<span>12</span></p>
                </div>
                <div className="Services-card">
                    <img src={horse} alt="" />
                    <h3>horse</h3>
                    <p>horse<span>18</span></p>
                </div>
                <div className="Services-card">
                    <img src={care} alt="" />
                    <h3>care</h3>
                    <p>care<span>274</span></p>
                </div>
                <div className="Services-card">
                    <img src={sport} alt="" />
                    <h3>sport</h3>
                    <p>sport<span>153</span></p>
                </div>
                <div className="Services-card">
                    <img src={stadium} alt="" />
                    <h3>stadium</h3>
                    <p>stadium<span>3</span></p>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Services