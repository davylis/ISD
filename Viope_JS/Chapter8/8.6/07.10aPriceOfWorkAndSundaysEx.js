

function calculate() {

    // Read date text from the input field
    let date = document.getElementById("date").value;
    isSunday(date);
    // If it is not Sunday  (Call isSunday() function with a date text as a parameter)
    let result = isSunday(date);
    if (result === false){
        //Show price of the repair work per hour during the workdays
        document.getElementById("answer").innerHTML = "Date " + date + " (work day).<br>The price of this repair work is  48 euros per hour."
    //otherwise		
    } else {	
        //Show price of the repair work per hour on Sundays
        document.getElementById("answer").innerHTML = "Date " + date + " (Sunday).<br>The price of this repair work is  72 euros per hour."
    }
}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	// Split the given dateText into day, month and year parts using the substr() method
    let day = parseInt(dateText.substring(0, 2));
    let month = parseInt(dateText.substring(3, 5));
    let year = parseInt(dateText.substring(6, 10));

	// Create a new Date object to a variable 
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


