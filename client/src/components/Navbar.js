import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import profpic from "../images/profilepic.jpeg"
import profpic2 from "../images/profilepic2.jpeg"

const Navbar = () => {



    return (
        <div className="d-flex justify-content-between pt-3 px-5" id="navigationBar">
            <div className="d-flex justify-content-start">
                <img id="profPicNav" className='img-fluid rounded-circle' src={profpic}/>
                <h2 id="navName" className="mt-1 xs-col-0 lg-col-2">Jamie Ellis</h2>
            </div>
            <div className="lg-col-2 xs-col-1"></div>
            <div className="d-flex justify-content-end xs-col-9 lg-col-6 pt-2">
                <Link to={"/"} className="text-decoration-none mx-2 navvy">Home</Link>
                <Link to={"/PortfolioAbout"} className="text-decoration-none mx-2 navvy">About</Link>
                <Link to={"/PortfolioProjects"} className="text-decoration-none mx-2 navvy">Projects</Link>
                <Link to={"/PortFolioResume"} className="text-decoration-none mx-2 navvy">Resume</Link>
                <Link to={"/PortfolioContact"} className="text-decoration-none mx-2 navvy">Contact</Link>
            </div>
        </div>
    )

}

export default Navbar;