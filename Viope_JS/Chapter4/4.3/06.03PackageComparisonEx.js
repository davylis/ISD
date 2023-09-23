function comparePackages() {
	
		// assign input field values into a variables
		let txt = document.getElementById("textMessages").value;
		let call = document.getElementById("callTime").value;
		// calculate the costs of the Special Package
		let txt_calculation = 0.069 * txt;
		let call_calculation = 0.069 * call;
		let result_calculation = 19.90 + txt_calculation + call_calculation;

		// If the Special package is cheaper than the All-inclusive package 
		// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
		// to a variable
		if (result_calculation < 29.90){
			document.getElementById("answer").innerHTML = "The Special package (" + result_calculation.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)"
		}
					
		// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
			else {
				document.getElementById("answer").innerHTML = "The All-inclusive package (29.90) is cheaper than the Special package (" + result_calculation.toFixed(2) + ")"
			}
		
		// write the answer to the web page DOM, in the answer div, as the content
		
}