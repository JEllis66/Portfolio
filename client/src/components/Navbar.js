import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import profpic from "../images/je_logo_short.png";

const Navbar = props => {

    const [pagePosition, setPagePosition] = useState("home");

    function changePage(page){
        console.log("1")
        setGreen();
        switch (page){
            case "home":
                console.log("home")
                document.getElementById("homeLink").className = "text-decoration-none mx-2 navvy currentPage";
                break;
            case "about":
                console.log("about")
                document.getElementById("aboutLink").className = "text-decoration-none mx-2 navvy currentPage";
                break;
            case "projects":
                console.log("projects")
                document.getElementById("projectsLink").className = "text-decoration-none mx-2 navvy currentPage";
                break;
            case "resume":
                console.log("resume")
                document.getElementById("resumeLink").className = "text-decoration-none mx-2 navvy currentPage";
                break;
            case "contacts":
                console.log("contacts")
                document.getElementById("contactsLink").className = "text-decoration-none mx-2 navvy currentPage";
                break;
        }
    }

    function setGreen(){
        document.getElementById("homeLink").className = "text-decoration-none mx-2 navvy"
        document.getElementById("aboutLink").className = "text-decoration-none mx-2 navvy"
        document.getElementById("projectsLink").className = "text-decoration-none mx-2 navvy"
        document.getElementById("resumeLink").className = "text-decoration-none mx-2 navvy"
        document.getElementById("contactLink").className = "text-decoration-none mx-2 navvy"
    }

    return (
        <div className="d-flex justify-content-between pt-3 px-3 mb-2" id="navigationBar">
            <div className="d-flex justify-content-start">
                <img id="profPicNav" className='img-fluid pb-2' src={profpic}/>
            </div>
            <div className="lg-col-2 xs-col-1"></div>
            <div className="d-flex justify-content-end xs-col-9 lg-col-6 pt-2">
                <Link to={"/"} id="homeLink" onclick={changePage("home")} className="text-decoration-none mx-2 navvy currentPage">Home</Link>
                <Link to={"/Portfolio/About"} id="aboutLink"  onclick={changePage("about")}  className="text-decoration-none mx-2 navvy">About</Link>
                <Link to={"/Portfolio/Projects"} id="projectsLink"  onclick={changePage("projects")}  className="text-decoration-none mx-2 navvy">Projects</Link>
                <Link to={"/Portfolio/Resume"} id="resumeLink"  onclick={changePage("reusume")}  className="text-decoration-none mx-2 navvy">Resume</Link>
                <Link to={"/Portfolio/Contact"} id="contactLink"  onclick={changePage("contact")}  className="text-decoration-none mx-2 navvy">Contact</Link>
            </div>
        </div>
    )

}

export default Navbar;