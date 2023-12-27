// 05_variables_warmup_4 JavasScript code
function showHoursAndMinutes() {
    var min = Number(document.getElementById("txtMinutes").value);
    var mintohour = Math.floor(min / 60); //calculate the whole hours
    var remainder = min % 60; //calculate the remaining minutes
    var result = mintohour + " h " + remainder + " min"
    document.getElementById("pOutput").innerHTML = result;
}
