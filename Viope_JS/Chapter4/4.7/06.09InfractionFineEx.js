function tellInfractionFine() {
		
		// TODO
		const speed = document.getElementById("drivingSpeed").value;
		const limit = document.getElementById("speedLimit").value;
		const excess = speed - limit;
		let fine;


		if (limit >= 10 && limit <= 60){
			if (excess <= 15){
				fine = "Infraction fine is 85 euros."
			} 
			else if(excess >= 15 && excess <= 20){
				fine = "Infraction fine is 115 euros."
			}
			
		}
		else if (limit >= 70 && limit <=120){
			if (excess <= 15){
				fine = "Infraction fine is 70 euros."
			} 
			else if(excess >= 15 && excess <= 20){
				fine = "Infraction fine is 100 euros."
			}
		}

		if (excess > 20){
			fine = "Income-based unit fine."
		}
		else if (excess <= 0){
			fine = "No speeding, no fine."
		}
		document.getElementById("answer").innerHTML = fine;
}