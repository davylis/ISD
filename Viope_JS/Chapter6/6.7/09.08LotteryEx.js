	// The array variable names is declared inside the script element, but NOT inside the function. 
	// The array is availabe for both functions to read from or write to.
	let names = [];


	function addName() {
		// Assign name from the input field to the array (use push())
		let name = document.getElementById("name").value
		names.push(name)
		let sum = "";
		// Go through the array in a for loop adding each name at the end of the namesText
		for(let i=0; i<names.length; i++){
			sum+=names[i];
			sum+=" ";
			
		}
		// Write the names on the page, to the names div, as content of the div
		document.getElementById("nameList").innerHTML="Inserted names: " + sum;
	}

	function makeDraw() {

		// Randomize the index of the winner
		let randomIndex=Number(Math.floor(Math.random() * names.length));
		
		// Write the answer on the page, to the answer div, as content of the div
		(document.getElementById("answer").innerHTML="<br>Winner is " + names[randomIndex]);
		

	}
