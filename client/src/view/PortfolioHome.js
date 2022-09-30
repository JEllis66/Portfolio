import React from "react";
import {useRef, useState} from "react";

import profpic from "../images/je_logo_short.png";
import Home from "../components/Home.js"
import Projects from "../components/Projects.js";
import Resume from "../components/Resume.js";
import Contact from "../components/Contact.js";
import About from "../components/About";
import AboutPopup from "../components/AboutPopup";
import ProjectsPopup from "../components/ProjectsPopup";
import ResumePopup from "../components/ResumePopup";


const PortfolioHome = () => {

    const [pagePosition, setPagePosition] = useState("homeSection");

    const homeSection = useRef(null);
    const aboutSection = useRef(null);
    const projectsSection = useRef(null);
    const resumeSection = useRef(null);

    const [aboutPopup, setAboutPopup] = useState(false);
    const [projectsPopup, setProjectsPopup] = useState(false);
    const [resumePopup, setResumePopup] = useState(false);

    const scrollToPos = (elementRef,str) => {
        setPagePosition(str);
        popup(str)
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        })
    }

    function goHome(){
            scrollToPos(homeSection,"homeSection")
            setAboutPopup(false);
            setProjectsPopup(false);
            setResumePopup(false);
    }

    function popup(input){
        switch(input){
            case input === "homeSection":
                break;
            case input === "aboutSection":
                setAboutPopup(true)
                break;
            case input === "projectSection":
                setProjectsPopup(true)
                break;
            case input === "resumeSection":
                setResumePopup(true)
                break;
        }
    }

    return (

        <div id="contact darken">

            <div className="d-flex justify-content-between pt-3 px-3 mb-2" id="navigationBar">
                <div className="d-flex justify-content-start">
                    <img id="profPicNav" className='img-fluid pb-2' src={profpic}/>
                </div>
                <div className="lg-col-2 xs-col-1"></div>
                <div className="d-flex justify-content-end xs-col-9 lg-col-6 pt-2">
                    {
                        pagePosition === "homeSection" ?    
                            <h3 onClick={()=>scrollToPos(homeSection,"homeSection")} className="text-decoration-none mx-2 navvy currentPage">Home</h3>
                            :
                            <h3 onClick={()=>scrollToPos(homeSection,"homeSection")} className="text-decoration-none mx-2 navvy">Home</h3>
                    }
                    {
                        pagePosition === "aboutSection" ?    
                            <h3 onClick={()=>scrollToPos(aboutSection,"aboutSection")} id="aboutLink"  className="text-decoration-none mx-2 navvy currentPage">About</h3>
                            :
                            <h3 onClick={()=>scrollToPos(aboutSection,"aboutSection")} id="aboutLink"  className="text-decoration-none mx-2 navvy">About</h3>
                    }
                    {
                        pagePosition === "projectsSection" ?    
                            <h3 onClick={()=>scrollToPos(projectsSection,"projectsSection")} id="projectsLink"  className="text-decoration-none mx-2 navvy currentPage">Projects</h3>
                            :
                            <h3 onClick={()=>scrollToPos(projectsSection,"projectsSection")} id="projectsLink"  className="text-decoration-none mx-2 navvy">Projects</h3>
                    }
                    {
                        pagePosition === "resumeSection" ?    
                            <h3 onClick={()=>scrollToPos(resumeSection,"resumeSection")} id="resumeLink"  className="text-decoration-none mx-2 navvy currentPage">Resume</h3>
                            :
                            <h3 onClick={()=>scrollToPos(resumeSection,"resumeSection")} id="resumeLink"  className="text-decoration-none mx-2 navvy">Resume</h3>
                    }
                </div>
            </div>

            <hr className="hr mb-5"/>
            <div className="homeSection" ref={homeSection} ><Home/></div>
            <div className="aboutSection" ref={aboutSection} ><About/></div>
            <AboutPopup trigger={aboutPopup} setTrigger={setAboutPopup}>
                <p onClick={()=> goHome()}>Back to Top</p>
            </AboutPopup>
            <div className="projectsSection"  ref={projectsSection}><Projects/></div>
            <ProjectsPopup trigger={projectsPopup} setTrigger={setProjectsPopup}>
                <p onClick={()=> goHome()}>Back to Top</p>
            </ProjectsPopup>
            <div className="resumeSection" ref={resumeSection}><Resume/></div>
            <ResumePopup trigger={resumePopup} setTrigger={setResumePopup}>
                <p onClick={()=> goHome()}>Back to Top</p>
            </ResumePopup>

        </div>

    )



}

export default PortfolioHome;