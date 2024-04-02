import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Listing = () => {
    const [count, setCount] = useState(47)
    const [like, setLike] = useState(faHeart)
    function handleClick() {
      setCount(48)
      setLike (faHeartCircleCheck)
    }
  return (
    <section>
        <h2 className="text-center text-white">Listing</h2>
        <Container>
            <Row xl={4} lg={4} md={2} sm={1} className="Listing-cards">
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src={Popular1} alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>SHOPPING</h6>
                        <h3>RedSea mall</h3>
                        <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                        <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                        <hr />
                        <div className="Listing-re d-flex w-100">
                            <div className="">
                                <p>Review: 3/5</p>
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

export default Listing