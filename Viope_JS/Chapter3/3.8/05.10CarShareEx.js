function calculateCosts() {

    let kilom = Number(document.getElementById("kilometers").value);
    let consump = Number(document.getElementById("consumption").value);
    let price = Number(document.getElementById("price").value);
    let partici = Number(document.getElementById("participants").value);
    let result = kilom / 100 * consump * price / partici;

    document.getElementById("answerId").innerHTML = "Fuel costs per participant is " + result.toFixed(2) + " euros.";
}