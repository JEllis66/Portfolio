import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import nScreen from "../images/numericleScreen.png"
import nAltScreen from "../images/numericleAltScreen.png"
import lScreen from "../images/lancasterScreen.png"
import Numericle from "../images/numericleLogo.png"
import AppScreen from "./AppScreen";


const Projects = () => {

    const[showDetails, setShowDetails] = useState(false);
    const[direction, setDirection] = useState("↓")
    const[pic, setPic] = useState([nScreen]);
    const[projNum, setProjNum] = useState(1);

    function toggleDetails(){
        if(showDetails === false && projNum === 1){
            setPic([nAltScreen]);
            setDirection("↑");
        } else if(showDetails === true && projNum === 1){
            setPic([nScreen]);
            setDirection("↓");
        }
        setShowDetails(!showDetails);
    }

    function nextProject(){
        if(projNum === 1){
            setProjNum(2)
            setPic(lScreen)
            
        } else if(projNum === 2){
            setProjNum(1)
            setPic(nScreen);
        }
        setDirection("↑")
    }

    return (
        <div id="projectPage" className="justify-content-center">
            <img id="projs" src={pic}/>
            <div className="d-flex justify-content-around">   
                <button onClick={() => toggleDetails()} className="btn btn-primary mr-1">Details {direction}</button>
                <button onClick={() => nextProject()} className="btn btn-primary ml-1">Next Project</button>
            </div> 

            {
                showDetails ? 
                <div id="projectPage2" className="mt-4">
                    {projNum === 1 ? 
                        <div>
                            <h3 className="text-primary">Numericle: <span className="text-secondary">MERN Application</span></h3> 
                            <p className="text-secondary detailText">Find the missing character's of the daily equation that matches the given Daily Solution, "Wordle" Style</p>
                        </div>
                        :
                        <div>
                            <h3 ><span className='text-primary'>Lancaster's:</span></h3>  
                            <p className="text-secondary detailText">Java/Spring Application - An application for an interactive Murder Myserty!</p>
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