import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import resume from "../downloads/Jamie_Ellis_Resume_Q3_2022.pdf"

const Resume = () => {



    return (
        <div>
            <hr className='aboutLine mt-2'/>
                <h1 className="text-warning align-text-middle text-center mb-4">Full Resume:</h1>
                <hr className='aboutLine mb-5'/>
            <div className="d-flex justify-content-around px-5 mb-5">
                <button className="btn btn-danger"><a href={resume} download className="text-decoration-none text-white">Download Resume ↓</a></button>
                <button className="btn btn-primary"><a href="mailto:jamie@jtellis.com" className="text-decoration-none text-white">Email Jamie</a></button>
            </div>
            <div>
                
                <iframe id="resumePDF" src={resume}/>
            </div>
        </div>
    )

}

export default Resume;