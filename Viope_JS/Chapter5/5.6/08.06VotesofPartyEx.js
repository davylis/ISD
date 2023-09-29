function showComparisonScores() {
		
	// For each candidates
	let votes=document.getElementById("votes").value;
	let candidates=document.getElementById("candidates").value;
	let score="";
	let result=""; 
	
		// Calculate comparison score for candidate
		for(i=1; i<=candidates; i++){
			score=votes/i;
			result += i + ". candidate: " + score.toFixed(0) + "<br>";
		}
		
	// Show scores
	document.getElementById("answer").innerHTML= result;
} 
	