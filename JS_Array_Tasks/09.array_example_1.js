// 09.array_example_1.js JavasScript code
 
var attendees = [];	        // Creates an empty array

attendees.push("Fall seven times, stand up eight.");        // Adds a new element to the end of the array

attendees.push("Opportunities don’t happen. You create them.");        // Adds a new element to the end of the array

attendees.push("There is do, or do not. There is no try.");	        // Adds a new element to the end of the array

attendees.push("With great power comes great responsibility.");	

attendees.push("Keep your friends close, but your enemies closer.");	

let random=Math.floor(Math.random()*attendees.length);

document.getElementById("answer").innerHTML=attendees[random];
// End