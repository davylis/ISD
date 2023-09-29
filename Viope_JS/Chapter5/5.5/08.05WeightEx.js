
function showWeightGoals() {
	let original = document.getElementById("weight").value;
	let weight_to_lose = original * 0.1/7
	let result = "";
	for(let i=1; i<8; i++){
		original-=weight_to_lose;
		result+="After " + i + ". week " + original.toFixed(1) + " kg<br>"
	}	
	document.getElementById("answer").innerHTML= result;
} 