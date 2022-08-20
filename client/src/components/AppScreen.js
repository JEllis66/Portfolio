import React from "react";
import './appholder.css';

function AppScreen(props){
    return (
            <div className="popup">
                <div className="popup-inner">
                    { props.children }
                </div>
            </div>
    )
}

export default AppScreen;