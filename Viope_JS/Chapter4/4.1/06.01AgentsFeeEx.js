function calculateFee() {
		
	// Read value from the input field
	const price = document.getElementById("price").value;	

	// Calculate fee, save the result to a variable
	let fee = 0.0344 * price;	
		
	// if the fee is under minimum, update it
	if (fee < 2400){
		fee = 2400;
	}

	const result = "Real state agent's fee is " + fee.toFixed(2) + " euros."

	// Write the answer on the page, to the fee div, as content of the div
	document.getElementById("fee").innerHTML = result;
				
}