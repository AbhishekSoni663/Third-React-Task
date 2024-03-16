import React from 'react'
import HeroImg from "../assets/img/ray1.png"
import HeroImg2 from "../assets/img/Group.png"
import HeroImg3 from "../assets/img/Google Play.png"
import HeroImg1 from "../assets/img/Group 5676.png"
import "../Components/Hero.css"
const NewHero = () => {
    return (
        <>
            <section className="container-fluid p-0 hero-container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="hero-box d-flex justify-content-between align-items-center img-fluid bg-cover">
                                <div className="hero-detail ps-5 d-felx flex-column justify-content-between">
                                    <div className="hero-text w-75">
                                        <img src={HeroImg1} alt="" className='img-fluid w-75 mt-5' />
                                        <p className='text-light w-100'>Discover the best salons and parlour in your area. Explore a world of beauty and choose from a variety of services that suit your style.</p>
                                    </div>
                                    <div className='hero-btn d-flex justify-content-between'>
                                        <img src={HeroImg2} alt="" />
                                        <img src={HeroImg3} alt="" />
                                    </div>
                                </div>
                                <img src={HeroImg} alt="" className='h-main img-fluid object-fit-cover w-50 mt-5' />
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewHero