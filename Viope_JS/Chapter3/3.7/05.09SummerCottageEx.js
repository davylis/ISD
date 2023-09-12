function calculateRent() {
		
    var rent1 = Number(document.getElementById("rent").value);
    var partici = Number(document.getElementById("participants").value);
    var price = rent1 / partici
    var result = "Rent per participants is " + price.toFixed(2) + " euros.";

    document.getElementById("answerDiv").innerHTML = result;
   
}