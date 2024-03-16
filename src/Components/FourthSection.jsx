import React from 'react'
import FourthImg from "../assets/img/Polaroid1.jpeg"
import FourthImg1 from "../assets/img/threading.png"
import FourthImg2 from "../assets/img/hair2.png"
import FourthImg3 from "../assets/img/haircolor.png"
import FourthImg4 from "../assets/img/straighetening.png"

import "../Components/FourthSection.css"
const FourthSection = () => {
    return (
        <>
            <section className="fourth-section py-5">
                <div className="container h-100 d-flex flex-column align-items-center justify-content-around">
                    <div className="fourth-box d-flex justify-content-between  h-75">
                        <div className="fourth-img bg-light d-flex flex-column align-items-center justify-content-around">
                            <img src={FourthImg} alt="" className='img-fluid object-fit-cover px-1'/>
                            <h6>Hair Cut</h6>
                        </div>
                        <div className="fourth-text w-50 h-100 d-flex align-items-center justify-content-center text-center">
                            <h3 className='fourth-h3 w-75'>Craft your vibe
                                With Us</h3>
                        </div>
                        <div className="fourth-img1 bg-light d-flex flex-column align-items-center justify-content-around">
                            <img src={FourthImg1} alt="" className='img-fluid px-1'/>
                            <h6>Threading</h6>
                        </div>
                    </div>
                    <div className="fourth-box2 d-flex justify-content-between h-75 py-3">
                        <div className="fourth-img2  bg-light d-flex flex-column align-items-center justify-content-around mt-xl-5 mt-lg-5">
                            <img src={FourthImg2} alt="" className='img-fluid '/>
                            <h6>Hair Curling</h6>
                        </div>
                        <div className="fourth-img3 bg-light d-flex flex-column align-items-center justify-content-evenly">
                            <img src={FourthImg3} alt="" className='img-fluid'/>
                            <h6>Hair Colouring</h6>
                        </div>
                        <div className="fourth-img4 bg-light d-flex flex-column align-items-center justify-content-evenly">
                            <img src={FourthImg4} alt="" className='img-fluid'/>
                            <h6>Straightening</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FourthSection