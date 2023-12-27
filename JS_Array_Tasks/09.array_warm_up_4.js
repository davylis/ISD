
let lottery = []
while(lottery.length<7){
    let random = Math.floor(Math.random() * 39) + 1;
    if(duplicateChecker(lottery, random)==true){
        lottery.push(random);
    }
}
console.log(lottery);
document.getElementById("pOutput").innerHTML=lottery.join(" ");

function duplicateChecker(arr, dub){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==dub){
            return false;
        }
    }
    return true;
}