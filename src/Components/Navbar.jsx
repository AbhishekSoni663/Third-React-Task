import React from 'react'
import NavLogo from "../assets/img/Group 5671.png"
import "../Components/Navbar.css"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <a href="" className="navbar-brand text-light nav-logo"><img src={NavLogo} alt="" className='img-fluid w-50' /></a>
                    <ul className="navbar-nav w-50 justify-content-between">
                        <li className="nav-item fs-6 fw-medium"><a href="" className="nav-link active fs-">Home</a></li>
                        <li className="nav-item fs-6 fw-medium"><a href="" className="nav-link active">For Business</a></li>
                        <li className="nav-item fs-6 fw-medium"><a href="" className="nav-link active">Contact Us</a></li>
                        <li className="nav-item fs-6 fw-medium"><a href="" className="nav-link active">About Us</a></li>
                    </ul>
                    <div className="first-nav">
                        <button className="navbar-toggler border-0"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon border-0" />
                        </button>
                        <div className="offcanvas offcanvas-start border-0 w-100" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                <button  className="btn-close border-0" data-bs-dismiss="offcanvas" aria-label="Close" />
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar