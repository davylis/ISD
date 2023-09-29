// Randomize the pips once
let pips1 = Math.round((Math.random() * 5) + 1);
let pips2 = Math.round((Math.random() * 5) + 1);


// Set the count to be one (now you have randomized once)
let rounds = 1;

// Repeat as long as (pips are not equal) 
while (pips1 != pips2){
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1);
    rounds++;

}
    // Randomize again
    
    // Increment counter by one
const result1="Same dice pips: " + pips1 + " and " + pips2;
const result2="There were " + rounds + " randomization counts until we got the same pips.";

// Write the answer (including the count) to the html page (answer div)
document.getElementById("answer").innerHTML= result1 + "<br>" + result2;
