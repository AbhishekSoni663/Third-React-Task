import React from 'react'
import ThirdImg from "../assets/img/OnePlus 10T (1).png"
import ThirdImg1 from "../assets/img/OnePlus 10T.png"
import "../Components/ThirdSection.css"
const ThirdSection = () => {
    return (
        <>
            <section className="third-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className=" col-xl-4 col-lg-7">
                            <h3 className='th-h5 fs-1 fw-medium'>Convenience: </h3>
                            <p className='th-p  text-light fw-normal'>Book appointments anytime, anywhere – whether you're at home, at work, or on the go.</p>
                        </div>
                        <div className="col-xl-8 col-lg-9 ">
                            <div className="third-box d-flex w-100 align-items-center">
                                <div className="third-box-img">
                                    <img src={ThirdImg1} alt="" className='img-fluid w-100 object-fit-cover' />
                                </div>
                                <div className="third-box-img2">
                                    <img src={ThirdImg} alt="" className="third-img2 img-fluid w-100 object-fit-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThirdSection