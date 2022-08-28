import React from "react";
import Navbar from "../components/Navbar.js";
import Resume from "../components/Resume.js"


const PortfolioResume = () => {


    return (
        <div id="resume" className="darken">
            <Navbar/>
            <hr className="hr mb-5"/>
            <Resume/>
        </div>
    )



}

export default PortfolioResume;