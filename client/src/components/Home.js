import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from 'react';
import HomeMenu from "./HomeMenu.js";
import Navbar from "./Navbar.js";
import scroll1 from "../images/Scroll_1.png";
import scroll2 from "../images/Scroll_2.png";
import scroll3 from "../images/Scroll_3.png";
import scroll4 from "../images/Scroll_4.png";
import scroll5 from "../images/Scroll_5.png";

const Home = (props) => {


// const randGroup = "0123456789ABCDEFGHIJ";
// const numLoops= 128;
// const binaryString = "01001000 01100101 01101100 01101100 01101111 00101100 00100000 01101101 01111001 00100000 01001110 01100001 01101101 01100101 00100000 01101001 01110011 00100000 01001010 01100001 01101101 01101001 01100101 00100000 01000101 01101100 01101100 01101001 01110011 00101110 "
// let finHTML = ""
// let lastTwoGroups = "";

// function fullStringer(){
//     let finalString = "";

//     for(let i = 0; i < numLoops; i++){
//         finalString += binaryString;
//     }
//     console.log(finalString)
//     return finalString;
// }

// let intermediate = fullStringer();

// function randomizer(num){
//     let res = ""
//     let tmp = randGroup[Math.floor(Math.random()*randGroup.length)];

//     if(num === 0){
//         lastTwoGroups += tmp;
//         return tmp;
//     }

//     if(lastTwoGroups.includes(tmp)){
//             randomizer(num);
//     } 

//     if(num === 1){
//         lastTwoGroups += tmp
//         res += tmp;
//     } else {
//         lastTwoGroups += tmp;
//         let lastTwoGroupsNew = lastTwoGroups[1] + lastTwoGroups[2];
//         res = lastTwoGroupsNew;
//     }

//     return res;
// }

// function grouper(){

//     const num = intermediate.length;
//     finHTML += "<p>"

//     for(let j = 0; j < num; j++){
//         let rand = ""
//         // rand = randomizer(j)
//         rand = randGroup[Math.floor(Math.random()*randGroup.length)];

//         if(intermediate[j] === " "){
//             console.log("space")
//         } else {
//             finHTML += `<span className='group${rand}'>`
//             finHTML += intermediate[j]
//             finHTML += `</span>`
//         }
//     }

//     finHTML += `</p>`

//     console.log(finHTML)
//     return finHTML;
// }
// grouper();

document.body.style.overflow = "hidden"

function delayReload(){
    setTimeout(function() { window.location.reload(); }, 150);
}

// window.onscroll = function(e) {
//   // print "false" if direction is down and "true" if up
//     console.log(this.oldScroll > this.scrollY);
//     if(this.oldScroll < this.scrollY){
//         setScrollPosition(2);
//         navigate("/Portfolio/About");
//     }
//     this.oldScroll = this.scrollY;
// }

    return (
        <div id="home">

            <div>
                <div>
                    <Navbar/>
                </div>
                <div className="row d-flex-inline">
                    
                    <div>
                        <HomeMenu>
                            <div className="justify-content-center align-center">
                                <h1 className="text-white"> Hello, my name is Jamie Ellis!</h1>
                                <div className="row d-flex-inline">
                                    <div id="scrollDiv" className="col-1">
                                        <img id="scrollImg" src={scroll1}/>
                                    </div>
                                    <div className="col-11">
                                        
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => delayReload()} id='homeBtn' className="btn btn-primary"><Link className="text-decoration-none text-white" to={"/Portfolio/About"}>View Portfolio</Link></button>
                                </div>
                                
                            </div>
                        </HomeMenu>
                    </div>
                </div>
            </div>

            
        </div>
    )

}

export default Home;