// Defne a function (1.) 
function buttonClick(length){
	var visit = "";
	if (length <= 10){
		visit = 8;
	} else if (length <= 20){
		visit = 11;
	} else if (length <= 30){
		visit = 13.5;
	} else if (length <= 45){
		visit = 16.5;
	} else if (length > 45){
		visit = 21;
	}
	return visit;
}
// Defne a function (2.) 
function howMuchToPay(price, reimburesement){
	let priceOfFee = price + 15.90 - reimburesement;
	return priceOfFee;
}
	
// Define a function (3.) 
function calculate() {
		// Read values from the input fields
		let length = document.getElementById("length").value;
		let doctors_fee = document.getElementById("doctorsFee").value;
		length = parseInt(length);
		doctors_fee = parseFloat(doctors_fee);
		// Call the function (1.) which calculates Kela reimbursement 
		let visit = buttonClick(length);
		// Call the function (2.) which calculates amount left for the customer to pay
		let price = howMuchToPay(doctors_fee, visit);
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = "Doctor's Fee is " + doctors_fee.toFixed(2) + " euros.<br>Kela reimbursement is " + visit.toFixed(2) + " euros.<br>Office Fee is " + 15.90.toFixed(2) + " euros.<br>Customer needs to pay " + price.toFixed(2) + " euros."
		
		
}