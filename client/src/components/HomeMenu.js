import React from "react";
import './Popup.css';

function HomeMenu(props){
    return (
            <div className="popup">
                <div className="popup-inner">
                    { props.children }
                </div>
            </div>
    )
}

export default HomeMenu;