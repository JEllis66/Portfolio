import React from "react";
import {Link} from "react-router-dom";
import profpic from "../images/je2022.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import gmail from "../images/gmail.png";

const Contact = () => {



    return (
        <div id="contactComp">
            <div className="my-1 px-5 py-5 border border-5 rounded-5 grayed" id="card">
                <div id="contactCard" className=" d-flex justify-content-between">
                    <img id="contactIMG" className="img-fluid rounded-circle mb-5" src={profpic}/>
                    <div className="d-flex-inline text-end mt-3 mb-5">   
                        <h1 className="text-white grayed">Jamie Ellis</h1>
                        <h2 className="text-white mt-5">Email: jamie@jtellis.com</h2>
                        <h2 className="text-white">Phone: (774) 444-6405</h2>
                    </div> 
                </div>
                <div className="d-flex justify-content-between mt-2 mb-0">
                    <div></div>
                    <img className="cardIcons" src={github}/>
                    <img className="cardIcons" src={linkedin}/>
                    <img className="cardIcons" src={facebook}/>
                    <img className="cardIcons" src={gmail}/>
                    <div></div>
                </div>
                
            </div>

        </div>
    )

}

export default Contact;