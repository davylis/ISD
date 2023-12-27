function duplicateChecker(arr, dub){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==dub){
            return false;
        }
    }
    return true;
}

let bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

let elements = [];
for(let i=0; i<bloodTypes.length; i++){
    if(duplicateChecker(elements, bloodTypes[i])==true){
        elements.push(bloodTypes[i]);  
    }
}

let elements_size = [];
for(let i=0; i<elements.length; i++){
    let element_size=0;
    for(let n=0; n<bloodTypes.length; n++){
        if (elements[i]==bloodTypes[n]){
            element_size++;
        }
    }
    elements_size.push(element_size);
}
let result_sum="";
for (let i=0; i<elements.length; i++){
    let result = 100 * (elements_size[i]/bloodTypes.length);
    result_sum+=result.toFixed(1) + "%: " + elements[i] + "<br>";
}
document.getElementById("answer").innerHTML=result_sum

console.log(elements)
console.log(elements_size)
console.log(result_sum)