import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import profpic from "../images/je_logo_short.png";

const Navbar = () => {

    return (
        <div className="d-flex justify-content-between pt-3 px-3" id="navigationBar">
            <div className="d-flex justify-content-start">
                <img id="profPicNav" className='img-fluid' src={profpic}/>
            </div>
            <div className="lg-col-2 xs-col-1"></div>
            <div className="d-flex justify-content-end xs-col-9 lg-col-6 pt-2">
                <Link to={"/"} className="text-decoration-none mx-2 navvy">Home</Link>
                <Link to={"/Portfolio/About"} className="text-decoration-none mx-2 navvy">About</Link>
                <Link to={"/Portfolio/Projects"} className="text-decoration-none mx-2 navvy">Projects</Link>
                <Link to={"/Portfolio/Resume"} className="text-decoration-none mx-2 navvy">Resume</Link>
                <Link to={"/Portfolio/Contact"} className="text-decoration-none mx-2 navvy">Contact</Link>
            </div>
        </div>
    )

}

export default Navbar;