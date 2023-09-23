function checkAge() {
	// assign the age input field value into a variable
	const age = document.getElementById("age").value
	//if age smaller than 18
	if(age < 18 && age > 0){
		let result1 = "Adolescents are not allowed to play."
		document.getElementById("answer").innerHTML = result1;
	}
		// assign text "Adolescents are not allowed to play." to a variable
		
	else if(age > 18 && age < 150){
		let result2 = "Old enough to play."
		document.getElementById("answer").innerHTML = result2;

	}
	// otherwise 
	
		// assign text "Old enough to play." to a variable  
	else {
		let result3 = "Enter a valid age."
		document.getElementById("answer").innerHTML = result3;
	}
		
	}
	
	// Write the answer to the web page DOM, in the answer div, as the content