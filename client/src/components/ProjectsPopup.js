import React from "react";
import './Top.css';

function ProjectsPopup(props){
    return (props.trigger) ? (
            <div className="popupbutton">
                <div className="popupbutton-inner">
                    { props.children }
                </div>
            </div>
    ) : "";
}

export default ProjectsPopup;