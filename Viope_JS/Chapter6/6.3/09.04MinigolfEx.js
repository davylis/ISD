let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function funcArray(arr) {
    for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    }
}
function showResults()  {
    minigolf.sort();
    let smallest=minigolf[0];
    let biggest=minigolf[minigolf.length-1];
    const result = "The smallest result is " + smallest + "(winner).<br>The biggest result is " + biggest + ".";
    document.getElementById("answer").innerHTML= result;
}
