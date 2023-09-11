// 05_variables_warmup_2 JavasScript code
//Add function call
function add() {
    // create variable for the first number
    let txt1 = Number(document.getElementById("txtFirst").value);
    // create variable for the second number
    let txt2 = Number(document.getElementById("txtSecond").value);
    // create variable for the sum
    let sum = txt1 + txt2
    // show output on the HTML page
    document.getElementById("pOutput").innerHTML = txt1 + '+' + txt2 + '=' + sum;
}
