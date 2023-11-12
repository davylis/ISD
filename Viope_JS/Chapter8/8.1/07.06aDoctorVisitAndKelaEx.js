// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function buttonClick(length){
	var visit = "";
	if (length <= 10){
		visit = 8;
	} else if (length <= 20){
		visit = 11;
	} else if (length <= 30){
		visit = 13.50;
	} else if (length <= 45){
		visit = 16.50;
	} else if (length > 45){
		visit = 16.50;
	}
	return visit;
}
// Define a function  
function calculate() {
		// Read values from the input fields
		let length = document.getElementById("length").value;
		let doctors_fee = document.getElementById("doctorsFee").value;
		parseInt(length);
		
		// Call the function (1.) which calculates and returns Kela reimbursement 
		let visit = buttonClick(length);
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML= "Length of visit is " + length + " minutes.<br>Kela reimbursement is " + visit.toFixed(3) + " euros."
}