import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import profpic from "../images/profilepic.jpeg";

const About = () => {

    return (
        <div className="py-4 scrolly">
            <img className="img-fluid rounded-circle" id="aboutPic" src={profpic}/>
            <div id="aboutContent" className="d-flex-inline justify-content-start text-start pt-3">
                <h1 className="text-warning align-text-middle text-center mb-5">Hello, my name is Jamie Ellis!</h1>
                
                <hr className='aboutLine mt-5'/>

                <h2 className="text-primary mb-3 darken"> Background:</h2>
                <h3 className="text-white"> Grew up on Cape Cod in Massachusetts! Went to University of Massachusetts, Amherst (2014-2018) and moved to Phoenix following graduation to start my professional career as an Engineer at Intel. Back in Boston in 2021 to work for Siemens.
                </h3>
                <hr className='aboutLine my-5'/>

                <h2 className="text-primary mb-3 darken"> Professional Summary:</h2>
                <h3 className="text-white"> I am Chemical Process Engineer, with 4 years of work experience at Intel and Siemens. I completed Coding Dojo - (3x) Full-Stack Software Engineering Bootcamp. I am in pursuit of a <u>full-time</u> Software Engineering position!</h3>
                <hr className='aboutLine my-5'/>

                <h2 className="text-primary mb-3 darken"> Educational/Industrial Skills:</h2>
                <h3 className="text-white"> 
                    <p>Full-Stack Development, HTML, CSS, JavaScript, Python, Flask, Java, Spring Boot, MySQL, MongoDB, Express, React, Node.js, AWS, EC2, REST API, PowerBI, Model-Based Problem Solving (MBPS), LEAN Manufacturing </p>
                </h3>
                <hr className='aboutLine my-5'/>

                <div className="d-flex justify-content-center"><button className="btn btn-primary mb-5"><Link className="text-decoration-none text-white" to={"/PortfolioResume"}>Full Resume →</Link></button></div>

            
            </div>
            
        </div>
    )

}

export default About;