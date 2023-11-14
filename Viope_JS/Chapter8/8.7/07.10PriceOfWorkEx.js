function modifyTitle() {
    // Read value of title from the input field
	let title = document.getElementById("title").value
    // Call allCapsTitleTrimmed() function 
	allCapsTitleTrimmed(title);


}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
	let trim = text.trim();
    
	// Changes the text given to it to be ALL CAPS
	trim = text.toUpperCase();
    
	// Return the changed text
	return trim;
}

function calculate() {
	let startTimeRaw = document.getElementById("startTime").value;
	let endTimeRaw = document.getElementById("endTime").value;
	let dateRaw = document.getElementById("date").value;
	/* make an array */
	let start_hm = [
		parseInt(startTimeRaw.substring(0, 2)), 
		parseInt(startTimeRaw.substring(3, 5))
	];
	let end_hm = [
		parseInt(endTimeRaw.substring(0, 2)), 
		parseInt(endTimeRaw.substring(3, 5))
	];

	let startTime = new Date();
	startTime.setHours(start_hm[0]);
	startTime.setMinutes(start_hm[1]);
	let endTime = new Date();
	endTime.setHours(end_hm[0]);
	endTime.setMinutes(end_hm[1]);

	/*
	Date - Date will always return answer in milliseconds
	endTime - startTime gives a difference between times in milliseconds.
	That is why it is divided by 1000, to get seconds and again by 60, 
	to get minutes.
	*/
	 // Calculate length of the work as minutes.

	const work_in_minutes = (endTime - startTime) / 1000 / 60;
	const work_in_hours = work_in_minutes / 60;
	let result = "Length of the work was " + work_in_minutes + " minutes.<br>"
	let final_price;
    // If it is Sunday  (Call isSunday() function)
	//In If-else statement you get true, it will automatically step into if. If it is false, it goes to else.
	//0 is false, everything else is true
	if(isSunday(dateRaw)) {
        //Calculate and show price of the repair work during the workdays
		result += "The hourly price is during the Sundays 72.00 euros.<br>"
		final_price = work_in_hours * 72.00;
    //otherwise
	} else {			
        //Calculate and showprice of the repair work on Sundays
		result += "The hourly price is during the workdays 48.00 euros.<br>"
		final_price = work_in_hours * 48.00;
	}
	result += "The price of this repair work is " + final_price.toFixed(2) + " euros.";
	document.getElementById("answer").innerHTML = result;
	
}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	// Split the given date text into day, month and year parts using the subStr() method
	let day = parseInt(dateText.substring(0, 2));
    let month = parseInt(dateText.substring(3, 5));
    let year = parseInt(dateText.substring(6, 10));

	// Create a new Date object to a variable asDate
	let d = new Date();
    d.setMonth(month-1);
    d.setDate(day);
    d.setFullYear(year)

	// Get the day of the week with its getDay() method. Sunday is number 0 .
	let result = d.getDay();

	// If day of the week is Sunday 
	if (result === 0){
		// return Boolean value true
		return true;
	// otherwise	
	} else {
       // return Boolean value false		
	   return false;
    }
}

/*	
How to get "1 hour 20 minutes in inner HTML"->

let x = 1.33
	console.log("HH:mm " + x.toFixed(0) + ":" + (x - x.toFixed(0)) * 60)
*/
