function calculateRent() {
		
    var rent = Number(document.getElementById("rent").value);
    var partici = Number(document.getElementById("text").value);
    var price = rent / partici
    var result = "Rent per participants is " + price.toFixed(2) + "euros.";

    document.getElementById("answerDiv").innerHTML = result;
   
}