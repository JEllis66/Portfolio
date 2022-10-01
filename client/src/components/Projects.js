import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';

import nScreen from "../images/numericleScreen.png"
import nAltScreen from "../images/numericleAltScreen.png"
import lScreen from "../images/lancasterScreen.png"
import git from "../images/git3.png"


const Projects = () => {

    const[showDetails, setShowDetails] = useState(false);
    const[direction, setDirection] = useState("↓")
    const[pic, setPic] = useState([nScreen]);
    const[projNum, setProjNum] = useState(1);

    function toggleDetails(){
        if(showDetails === false && projNum === 1){
            setPic([nAltScreen]);
            setDirection("↑");
        } else if(showDetails === false && projNum === 2){
            setPic([lScreen]);
            setDirection("↑");
        } else if(showDetails === true && projNum === 1){
            setPic([nScreen]);
            setDirection("↓");
        } else if(showDetails === true && projNum === 2){
            setPic([lScreen]);
            setDirection("↓");
        }
        setShowDetails(!showDetails);
    }

    function reset(){
            setShowDetails(false);
            setDirection("↓");
    }

    function nextProject(){
        reset();
        if(projNum === 1){
            setProjNum(2)
            setPic(lScreen)
            
        } else if(projNum === 2){
            setProjNum(1)
            setPic(nScreen);
        }
    }

    return (
        <div id="projectPage" className="justify-content-center mb-5 pb-5 whiten">
            <img id="projs" src={pic}/>
            <div id="projButtons" className="d-flex justify-content-around whiten">   
                <button onClick={() => toggleDetails()} className="btn btn-primary mr-1">Details {direction}</button>
                <button onClick={() => nextProject()} className="btn btn-success ml-1">Next Project</button>
            </div> 

            {
                showDetails ? 
                <div id="projectPage2" className="mt-5 pb-5 whiten">
                    {projNum === 1 ? 
                        <div id="details1" className="whiten">
                            <h3 className="text-primary whiten"><a className="text-decoration-none whiten" href="http://numericle.ddns.net">Numericle:</a> <span className="text-secondary whiten">MERN Application - </span></h3>
                            <p className="text-secondary detailText whiten">Find the missing character's of the daily equation that matches the given Daily Solution, "Wordle" Style!</p>
                            <p className="whiten"><span><a className="whiten text-decoration-none projectLinks" href="http://numericle.ddns.net"> Link to deployed Project</a></span> <span className="projectLinks"></span>| <span><a className="whiten text-decoration-none projectLinks" href="https://github.com/JEllis66/Numericle-Deployment"> Link to Github Repo </a></span> <img id='gitimg' src={git}/></p>
                        </div>
                        :
                        <div className="whiten" id="details2">
                            <h3 className="whiten"><a className="text-danger text-decoration-none whiten" href="#">Lancaster's Theater:</a> <span className="text-secondary whiten"> Java/Spring Application - </span></h3>
                            <p className="text-secondary detailText whiten mb-0">An application for an interactive Murder Mystery Party!</p>
                            <p className="text-secondary detailText whiten mt-0">Create any assortment of characters and profiles for a unique experience each time! </p>
                            <p className="whiten"><span><a className="whiten text-decoration-none projectLinks" href="https://github.com/JEllis66/Murder_Mystery"> Link to Github Repo </a></span> <img id='gitimg' src={git}/></p>
                        </div>
                    }
                </div>
                :
                null
            }
        </div>
        
    )

}

export default Projects;