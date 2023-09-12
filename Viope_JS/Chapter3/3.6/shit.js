function calculateUnitFine() {
    // Read the value from the input field into a variable
let income = document.getElementById("txtNetIncome").value;	  

    // Calculate the unit fine and assign the result into another variable
let unitfine = 	(income-255)/60

    // Write the answer to the web page DOM, in the answer div, as the content
    
document.getElementById("answerDiv").innerHTML = "Unit fine is " + unitfine.toFixed(2);
}