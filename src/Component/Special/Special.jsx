import React from 'react'
import { Row } from 'react-bootstrap'
import './Special.css'
import special from "../../IMG/hero.png"

const Special = () => {
  return (
    <section className='my-5 py-5'>
        <div className="container-s">
            <div className="special-item">
                <div className="special-img">
                    <img src={special} alt="" className='w-100 h-100' />
                </div>
                <div className="special-info">
                    <div className="special-text">
                        <h6>special offer</h6>
                        <h3>We Have Special Offers Every Now and Then</h3>
                    </div>
                    <div className="special-btn">
                        <button>show special offers</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Special