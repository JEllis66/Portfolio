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
                <h3 className="text-white"> I grew up on Cape Cod in Massachusetts, and went to University of Massachusetts, Amherst (2014-2018) for a B.S. in Chemical Engineering. I then and moved to Phoenix and followed graduation by starting my professional career as an Engineer at Intel. As June 2021, I am back in Boston working as an Engineer for Siemens Healthineers.
                </h3>
                <hr className='aboutLine my-5'/>

                <h2 className="text-primary mb-3 darken"> Professional Summary:</h2>
                <h3 className="text-white"> I am Chemical Process Engineer, with 4 years of work experience at Intel and Siemens. I just graduated from Coding Dojo - (3x) Full-Stack Software Engineering Bootcamp in August 2022. I am in pursuit of trasnitioning from a Chemical Engineer to a <u>full-time</u> Software Engineer!</h3>
                <hr className='aboutLine my-5'/>

                <h2 className="text-primary mb-3 darken"> Educational/Industrial Skills:</h2>
                <h3 className="text-white"> 
                    <p>Full-Stack Development, HTML, CSS, JavaScript, Python, Flask, Java, Spring Boot, MySQL, MongoDB, Express, React, Node.js, AWS, EC2, REST API, PowerBI, Model-Based Problem Solving (MBPS), LEAN Manufacturing </p>
                </h3>
                <hr className='aboutLine my-5'/>

                <div className="d-flex justify-content-center"><button className="btn btn-primary mb-5"><Link className="text-decoration-none text-white" to={"/Portfolio/Resume"}>Full Resume →</Link></button></div>

            
            </div>
            
        </div>
    )

}

export default About;