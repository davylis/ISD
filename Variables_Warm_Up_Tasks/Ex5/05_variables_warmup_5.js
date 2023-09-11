// 05_variables_warmup_5 JavasScript code
function calculate() {
    var num1 = Number(document.getElementById("txtStartingBalance").value);
    var num2 = Number(document.getElementById("txtInterestRate").value);
    var procent = num2 / 100;
    var year1 = procent * num1 + num1;
    var year2 = year1 * procent + year1;

    var output = "1. year: " + year1.toFixed(2) + "<br>2. year: " + year2.toFixed(2)

    document.getElementById("pOutput").innerHTML = output;
}

