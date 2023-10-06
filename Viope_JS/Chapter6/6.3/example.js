function getSmallest(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getBiggest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];
let min = getSmallest(minigolf)
let max = getBiggest(minigolf)