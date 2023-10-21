//Array's of inputs
let names = [];
let ages = [];

//function for getting input's from HTML
function saveInformation(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    

    if (!isNaN(age) && age>0 && age<250 && name !== "") {
    names.push(name);
    ages.push(age);
    }
    document.getElementById("pOutput").innerHTML = names.length + " members";
}
//function for defining oldest person
function showOldest() {
    let oldest = [];
    let max = 0;
    for(let i=0; i<ages.length; i++){
        if(ages[i]>max){
            max = ages[i];
        }
    }
    for(let i=0; i<ages.length; i++){
        if(ages[i]==max){
            oldest.push(i)
        }
    }
    printArray(oldest)
}
//function for defining youngest person
function showYoungest() {
    let youngest = [];
    let min = 100;
    for(let i=0; i<ages.length; i++){
        if(ages[i]<min){
            min = ages[i];
        }
    }
    for(let i=0; i<ages.length; i++){
        if(ages[i]==min){
            youngest.push(i)
        }
    }
    printArray(youngest)
}
//function for defining minor members
function showMinors() {
    let minors = [];
    for(let i=0; i<ages.length; i++){
        if (ages[i]<18){
            minors.push(i);
        }
    }
    printArray(minors)
}
    
    
//function for defining adult members
function showAdults() {
    let adults = [];
    for(let i=0; i<ages.length; i++){
        if (ages[i]>=18){
            adults.push(i);
        }
    }
    printArray(adults)
}
//function for printing arrays
function printArray(array){
    let result = "";
    for(let i=0; i<array.length; i++){
        result+=names[array[i]] + ", " + ages[array[i]] + " years<br>"
    }
    document.getElementById("names").innerHTML=result
}

document.write("KU, KU LJA, LJA CHI, CHI GA, GA")