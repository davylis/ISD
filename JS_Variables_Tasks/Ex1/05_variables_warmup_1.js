// 05_variables_warmup_1 JavasScript code

function showEmail() {
 // Read the value from the input field into a variable
    var name = document.getElementById("txtGivenName").value;

    var surname = document.getElementById("txtSurname").value;

    var email = name + '.' + surname + "@myy.haaga-helia.fi";

    document.getElementById("pOutput").innerHTML = email;
}
