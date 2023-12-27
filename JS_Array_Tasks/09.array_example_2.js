let bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

function insertValue() {
    let blood = document.getElementById("txtValue").value;
    let counter = 0;
    for(let i=0; i<bloodTypes.length; i++){
        if(blood==bloodTypes[i]){
            counter++
        }
    }
    let result = 100 * (counter/bloodTypes.length);
    document.getElementById("divOutput").innerHTML=blood + " " + result + " percent"


}