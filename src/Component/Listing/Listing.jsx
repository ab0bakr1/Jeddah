import React, { useState } from 'react'
import './Listing.css'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartCircleCheck, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Popular1 = require('../../IMG/Popular1.png')

const Listing = () => {
    const [count, setCount] = useState(32)
    const [like, setLike] = useState(faHeart)
    let Name = document.querySelectorAll(".Listing-info h3")
    console.log(Name.values)
    
    function handleClick(like) {
        if (like === faHeart) {
            setLike(faHeart)
            setCount(32)
        } else {
            setLike(faHeartCircleCheck)
            setCount(33)
            console.log(like)
        }
    }

  return (
    <section className='Listing py-5'>
        <h5 className='text-center pt-3'>LISTING</h5>
        <h2 className="text-center pb-3">our Listing</h2>
        <Container>
            <Row xl={4} lg={4} md={2} sm={1} className="gap-4 justify-content-center g-0">
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src={Popular1} alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>SHOPPING</h6>
                        <h3 values="RedSea">RedSea mall</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://destinationksa.com/wp-content/uploads/2023/03/Jeddah-sculpture-museum-1.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Museum</h6>
                        <h3>Open Museum</h3>
                        <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                        <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                        <hr />
                        <div className="Listing-re d-flex w-100">
                            <div className="">
                                <p>Review: 5/5</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p>liked: </p>
                                <button onClick={handleClick}><span>{count}</span> <FontAwesomeIcon icon={like} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/thesix-image/2023/09/%5B23/4016736-155183105.png?itok=zJcgzSWx" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Museum</h6>
                        <h3>Home Art</h3>
                        <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                        <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                        <hr />
                        <div className="Listing-re d-flex w-100">
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://www.visitsaudi.com/content/dam/jeddah/attractions-in-jeddah/al-shafi-mosque.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Mosque</h6>
                        <h3>Al Shafei</h3>
                        <p><FontAwesomeIcon icon={faLocationDot} /> jeddah, Saudi Arabia</p>
                        <p><FontAwesomeIcon icon={faPhone} />+966 12 215 1551</p>
                        <hr />
                        <div className="Listing-re d-flex w-100">
                            <div className="">
                                <p>Review: 5/5</p>
                            </div>
                            <div className="d-flex gap-2">
                                <p>liked: </p>
                                <button onClick={handleClick}><span>{count}</span> <FontAwesomeIcon icon={like} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://www.abouther.com/sites/default/files/2020/01/09/shutterstock_1288750927.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Rebat</h6>
                        <h3>Rebat Alkhonji</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://cazcorpwebsitesprod.blob.core.windows.net/caz-corpwebsites-prod/img/project-photos/Jeddah-City-Airport.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Airport</h6>
                        <h3>Jeddah Airport</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://www.sail-world.com/photos/americascup/yysw411331.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Club</h6>
                        <h3>Yacht Club</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://www.timeoutriyadh.com/cloud/timeoutriyadh/2023/02/13/saudi-arabian-gp-jeddah-corniche-circuit.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>sport</h6>
                        <h3>Formula 1</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/29/b0/f9/al-salam-mall.jpg?w=1200&h=-1&s=1" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>SHOPPING</h6>
                        <h3>Al Salam Mall</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://blog.wasalt.com/wp-content/uploads/2023/10/%D9%85%D9%88%D9%82%D8%B9-%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>SHOPPING</h6>
                        <h3>arabia mall</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://infinityt.net/wp-content/uploads/2021/03/st1.jpg" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Stadium</h6>
                        <h3>Abdullah AlFaisal</h3>
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
                <div className="Listing-cards p-0">
                    <div className="Listing-img w-100 h-50">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/dd/d2/b3/caption.jpg?w=1200&h=-1&s=1" alt="" className='w-100 h-100' />
                    </div>
                    <div className="Listing-info">
                        <h6>Mosque</h6>
                        <h3>Al Rahma</h3>
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