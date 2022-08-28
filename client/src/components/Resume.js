import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import resume from "../downloads/Jamie_Ellis_Resume_Q3_2022.pdf"

const Resume = () => {



    return (
        <div>
            <div className="d-flex justify-content-around px-5 mb-5">
                <button className="btn btn-danger"><a href={resume} download className="text-decoration-none text-white">Download Resume ↓</a></button>
                <button className="btn btn-secondary"><a href="mailto:jamie@jtellis.com" className="text-decoration-none text-white">Email Jamie</a></button>
                <button className="btn btn-primary"><Link to={"/Portfolio/Contact"} className="text-decoration-none text-white">All Contact Info</Link></button>
            </div>
            <div>
                <h2 className="text-secondary">Full Resume:</h2>
                <embed id="resumePDF" src={resume}/>
            </div>
        </div>
    )

}

export default Resume;