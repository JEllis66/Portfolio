import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import profpic from "../images/je_logo_short.png";

const Navbar = props => {

    const [pagePosition, setPagePosition] = useState("home");

    function changePage(page){
        setGreen(page);
        setPagePosition(page);
        changeRed();
    }

    function setGreen(page){
        document.getElementById(page).className = "text-decoration-none mx-2 navvy";
    }

    const changeRed = () => {
        setTimeout(function() {
            switch (pagePosition){
                case (pagePosition === "home"):
                    document.getElementById("homeLink").className = "text-decoration-none mx-2 navvy currentPage";
                    break;
                case (pagePosition === "about"):
                    document.getElementById("aboutLink").className = "text-decoration-none mx-2 navvy currentPage";
                    break;
                case (pagePosition === "projects"):
                    document.getElementById("projectsLink").className = "text-decoration-none mx-2 navvy currentPage";
                    break;
                case (pagePosition === "resume"):
                    document.getElementById("resumeLink").className = "text-decoration-none mx-2 navvy currentPage";
                    break;
                case (pagePosition === "contacts"):
                    document.getElementById("contactsLink").className = "text-decoration-none mx-2 navvy currentPage";
                    break;
            }
        }, 100)
    }

    return (
        <div className="d-flex justify-content-between pt-3 px-3 mb-2" id="navigationBar">
            <div className="d-flex justify-content-start">
                <img id="profPicNav" className='img-fluid pb-2' src={profpic}/>
            </div>
            <div className="lg-col-2 xs-col-1"></div>
            <div className="d-flex justify-content-end xs-col-9 lg-col-6 pt-2">
                {
                    pagePosition === "home" ?    
                        <Link to={"/"} id="homeLink" onClick={()=>changePage("home")} className="text-decoration-none mx-2 navvy currentPage">Home</Link>
                        :
                        <Link to={"/"} id="homeLink" onClick={()=>changePage("home")} className="text-decoration-none mx-2 navvy">Home</Link>
                }
                {
                    pagePosition === "about" ?    
                        <Link to={"/Portfolio/About"} onClick={()=>changePage("about")} id="aboutLink"  className="text-decoration-none mx-2 navvy currentPage">About</Link>
                        :
                        <Link to={"/Portfolio/About"} onClick={()=>changePage("about")} id="aboutLink"  className="text-decoration-none mx-2 navvy">About</Link>
                }
                {
                    pagePosition === "projects" ?    
                        <Link to={"/Portfolio/Projects"} onClick={()=>changePage("projects")} id="projectsLink"  className="text-decoration-none mx-2 navvy currentPage">Projects</Link>
                        :
                        <Link to={"/Portfolio/Projects"} onClick={()=>changePage("projects")} id="projectsLink"  className="text-decoration-none mx-2 navvy">Projects</Link>
                }
                {
                    pagePosition === "resume" ?    
                        <Link to={"/Portfolio/Resume"} onClick={()=>changePage("resume")} id="resumeLink"  className="text-decoration-none mx-2 navvy currentPage">Resume</Link>
                        :
                        <Link to={"/Portfolio/Resume"} onClick={()=>changePage("resume")} id="resumeLink"  className="text-decoration-none mx-2 navvy">Resume</Link>
                }
                {
                    pagePosition === "contact" ?    
                        <Link to={"/Portfolio/Contact"} onClick={()=>changePage("contact")} id="contactLink"  className="text-decoration-none mx-2 navvy currentPage">Contact</Link>
                        :
                        <Link to={"/Portfolio/Contact"} onClick={()=>changePage("contact")} id="contactLink"  className="text-decoration-none mx-2 navvy">Contact</Link>
                }
                
            </div>
        </div>
    )

}

export default Navbar;