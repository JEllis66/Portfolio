const randGroup = "0123456789ABCDEFGHIJ";
const numLoops= 14;
const binaryString = "01001000 01100101 01101100 01101100 01101111 00101100 00100000 01101101 01111001 00100000 01001110 01100001 01101101 01100101 00100000 01101001 01110011 00100000 01001010 01100001 01101101 01101001 01100101 00100000 01000101 01101100 01101100 01101001 01110011 00101110 "

function fullStringer(){
    let finalString = "";

    for(let i = 0; i < numLoops; i++){
        finalString += binaryString;
    }
    console.log(finalString)
    return finalString;
}

let intermediate = fullStringer();

function randomizer(num){
    let res = randGroup[Math.floor(Math.random()*randGroup.length)];
    if(num === 1){
        if (intermediate[0] === res){
            randomizer(num)
        }
    } else{
        if (intermediate[num - 1] === res || intermediate[num - 2] === res){
            randomizer(num);
        }
    }
    return res;
}

function grouper(){

    const num = intermediate.length;
    let finHTML = ""


    for(let j = 0; j < 30; j++){
        let rand = ""

        rand = randomizer(j)

        if(intermediate[j] === " "){
            null;
        } else if(j === 0){
            finHTML += "<p>"
            finHTML += `<span className='group${rand}'>`
            finHTML += intermediate[j]
            finHTML += `</span>`
        } else if(j === num-1){
            finHTML += `<span className='group${rand}'>`
            finHTML += intermediate[j]
            finHTML += `</span>`
            finHTML += `</p>`
        } else {
            finHTML += `<span className='group${rand}'>`
            finHTML += intermediate[j]
            finHTML += `</span>`
        }
    }

    console.log(finHTML)
    return finHTML;
}

grouper();




// for(let i = 0; i < numOfChars; i++){
//     finalString += " " + 
// }