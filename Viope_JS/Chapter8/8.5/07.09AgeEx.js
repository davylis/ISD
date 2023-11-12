function tellAge() {
    // Read value of yearOfBirth from the input field 
   let yearOfBirth = document.getElementById("yearOfBirth").value;
   
    // Figure out the current date into today variable 
    // Use getFullYear() method to get the current year out from the today variable
    var today = new Date();
    let yyyy = today.getFullYear();

    // Calculate the (rough estimate of the) age
    let age = "";
    age = yyyy - yearOfBirth;

    // If age is less than zero
    let text = "";
    if (age < 0){
        //  Show an error message
        document.getElementById("answer").innerHTML = "Error.";
    } 
    // otherwise tell the age
    else {
        document.getElementById("answer").innerHTML = "You are now " + age + "years old.<br> (Current year is " + yyyy + ".)";
    }
   
}