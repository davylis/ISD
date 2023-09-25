function play() {
	let bet = document.getElementById("bet").value;
			
	// Randomize dice pips between 1-6
	let pips = Math.round( (Math.random( ) * 5) + 1 );
	// Calculate win base on pips
	if (pips == 2 || pips == 4 ){
		document.getElementById("answer").innerHTML = "Pips was " + pips + " - Paid back " + (bet * 1.25).toFixed(2) + " euros";
	}
	else if (pips == 6 ){
		document.getElementById("answer").innerHTML = "Pips was " + pips + " - Paid back " + (bet * 1.50).toFixed(2) + " euros";
	}
	else{ 
		document.getElementById("answer").innerHTML = "Pips was " + pips + " - no pay";
	}
	return 1;
	}
	   
			// Write the answer on the page, to the answer div, as content of the div