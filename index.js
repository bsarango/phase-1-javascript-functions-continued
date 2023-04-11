// code your solution here
function saturdayFun(funEvent){
    if(typeof funEvent === "string"){
        return `This Saturday, I want to ${funEvent}!`;
    }
    else{
        return `This Saturday, I want to roller-skate!`;
    }
}

const mondayWork = function (monEvent){
    if(typeof monEvent === "undefined"){
        return "This Monday, I will go to the office.";
    }
    else{
        return `This Monday, I will ${monEvent}.`;
    }
}


function wrapAdjective(wrapSymbol){
    
    return function(yourPhrase){
        if(typeof yourPhrase === "string" && typeof wrapSymbol === "string"){
            return `You are ${wrapSymbol}${yourPhrase}${wrapSymbol}!`;
        }
        else if(typeof yourPhrase === "undefined" && typeof wrapSymbol === "string"){
            return `You are ${wrapSymbol}special${wrapSymbol}!`;
        }
        else if(typeof yourPhrase === "string" && typeof wrapSymbol === "undefined"){
            return `You are *${yourPhrase}*!`;
        }
        else{
            return "you are *special*!";
        }
    }
}
    
       