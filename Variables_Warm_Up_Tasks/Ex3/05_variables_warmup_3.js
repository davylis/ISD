// 05_variables_warmup_3 JavasScript code
// create function
function showMinutes() {
// create variable for hours
    var h = Number(document.getElementById("txtHours").value);
// create variable for minutes
    var m = Number(document.getElementById("txtMinutes").value);
// create variable for changing hours to minutes
    var htom = h * 60;
// create variable for the result
    document.getElementById("pOutput").innerHTML = htom + m + " " + "minutes";
}
