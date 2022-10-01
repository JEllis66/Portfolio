import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import HomeMenu from "./HomeMenu.js"
import profpic from "../images/je2022.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import phone from "../images/phone.png";
import gmail from "../images/gmail.png";

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

// document.body.style.overflow = "hidden"

function delayReload(){
    setTimeout(function() { window.location.reload(); }, 150);
}

    return (
        <div className="darken">

            <div>
                <h1 className="text-primary darken mb-5"> Hello, my name is Jamie Ellis!</h1>
                <div className="d-flex row justify-content-around">
                    <div className="col-1"></div>
                    <div className="col-xs-10 col-md-4">
                        <img id="aboutPic" className="img-fluid rounded-circle" src={profpic}/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-xs-10 col-md-4 d-flex-inline text-center mt-3 mb-4">   
                        <h2 className="text-white mt-5">Email: jamie@jtellis.com</h2>
                        <h2 className="text-white">Phone: (774) 444-6405</h2>
                    </div> 
                    <div className="col-1"></div>
                </div>
                <div className="d-flex justify-content-between mt-5 mb-0">
                    <div></div>
                    <a href="tel:7744446405"><img className="cardIcons" src={phone}/></a>
                    <a href={"https://github.com/JEllis66"} id="git"> <img className="cardIcons" src={github}/></a>
                    <a href="https://www.linkedin.com/in/jellis66/"><img className="cardIcons" src={linkedin}/></a>
                    <a href="emailto:jamie@jtellis.com"><img className="cardIcons" src={gmail}/></a>
                    <div></div>
                </div>
            </div>


            {/* <div className="justify-content-center align-center">
                <h1 className="text-white mb-5"> Hello, my name is Jamie Ellis!</h1>
                <div className="grayed">
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
                            <a href={"https://github.com/JEllis66"}> <img className="cardIcons" src={github}/></a>
                            <a href="https://www.linkedin.com/in/jellis66/"><img className="cardIcons" src={linkedin}/></a>
                            <a href="https://www.facebook.com/jamie.ellis.790/"><img className="cardIcons" src={facebook}/></a>
                            <a href="emailto:jamie@jtellis.com"><img className="cardIcons" src={gmail}/></a>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div> */}

            {/* <HomeMenu>
                <div className="justify-content-center align-center"><h1 className="text-white"> Hello, my name is Jamie Ellis!</h1>
                    <button onClick={() => delayReload()} id='homeBtn' className="btn btn-primary"><Link className="text-decoration-none text-white" to={"/Portfolio/About"}>View Portfolio</Link></button>
                </div>
            </HomeMenu> */}
        </div>
    )
}
export default Home;