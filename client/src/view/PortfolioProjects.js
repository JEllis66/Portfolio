import React from "react";
import Navbar from "../components/Navbar.js";
import Projects from "../components/Projects.js";


const PortfolioProjects = () => {


    return (
        <div id="projectsPage">
            <div id="navVH"><Navbar/></div>
            <hr className="hr mb-1"/>
            <div id="projDiv"><Projects/></div>
        </div>
    )



}

export default PortfolioProjects;