function calculateSalary(hours, hourlySalary) {
	let calculation = hourlySalary * hours;

	return calculation;
		
}

function showGrossSalary() {

	let hours = Number(document.getElementById("hours").value)										// assign the input field value to the variable hours
	let hourlySalary = Number(document.getElementById("hourlySalary").value)						// assign the second input field value to the variable hourlySalary
	let result = "Gross salary is " + calculateSalary(hours, hourlySalary).toFixed(2) + " euros."	// call the calculateSalary function
	document.getElementById("answer").innerHTML = result;											// write the answer on the html page

}

