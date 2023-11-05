function getRandomInteger(min, max) {
    return randomizedNumber=Math.floor(Math.random() * (max - min) + min);
    
}

function rollTheDice() {
    diceValue=getRandomInteger(1, 6);
    document.getElementById("dice").innerHTML=diceValue;
    
}