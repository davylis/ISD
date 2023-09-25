function showStudyGrant() {
    
        // Read values from the input fields
		const age = document.getElementById("age").value;
		const parents = document.getElementById("withParents").value;
		
		// if student is living with parents and his/her age is greater than 20 or equal
		if (age >= 20 && parents = 'n' ){
			document.getElementById("answer").innerHTML = "The study grant is 268.23 euros.";
		}
		
		      //assign text "The study grant is 335.20 euros." to a variable
			
		//otherwise if ....
		else if (age >= 20 && parents = 'y') {
			document.getElementById("answer").innerHTML = "The study grant is 87.23 - 196.27 euros.";
		}
		
		else {
			document.getElementById("answer").innerHTML = "Ask Kela.";
		}
		
		// Write the answer on the page, to the answer div, as content of the div
}
	