let array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];

function printArray(arr) {
    for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    }
}
function sortArray() {
    array.sort();
    array.reverse();
    printArray(array);
}