import React from 'react'
import { Row } from 'react-bootstrap'
import './Special.css'
import special from "../../IMG/hero.png"

const Special = () => {
  return (
    <section className='my-5' style={{position: 'relative'}}>
        <div className="container">
            <Row className="special-item g-0">
                <div className="special-img col-md-4">
                    <img src="https://www.okaz.com.sa/uploads/images/2021/03/06/1751789.jpg" alt="" className='w-100 h-100' />
                </div>
                <div className="special-info col-md-8">
                    <div className="special-text px-5 py-3">
                        <h6>special offer</h6>
                        <h3>We Have Special Offers Every Now and Then</h3>
                    </div>
                    <div className="special-btn">
                        <button>show special offers</button>
                    </div>
                </div>
            </Row>
        </div>
    </section>
  )
}

export default Special