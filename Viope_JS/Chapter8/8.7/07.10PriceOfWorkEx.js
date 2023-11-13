function modifyTitle() {

    // Read value of title from the input field
    // Call allCapsTitleTrimmed() function 


}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
    
	// Changes the text given to it to be ALL CAPS
    
	// Return the changed text
	
}

function calculate() {

    // Calculate length of the work as minutes.

    // If it is not Sunday  (Call isSunday() function)
        //Calculate and show price of the repair work during the workdays
    //otherwise			
        //Calculate and showprice of the repair work on Sundays

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


