var speciesArray = ["Pike","Salmon","Salmon","Trout"];
var lengths =      [40, 71, 76, 22];
var weights = [4.925, 3.675, 5.400, 1.510];

// ----------------------------------------------------------------------------
function addFish() {
  let species = document.getElementById("txtSpecies").value;
  let length = parseInt(document.getElementById("txtLength").value);
  let weight = parseFloat(document.getElementById("txtWeight").value);

  speciesArray.push(species);
  lengths.push(length);
  weights.push(weight);

  document.getElementById("txtSpecies").value = "";
  document.getElementById("txtLength").value = "";
  document.getElementById("txtWeight").value = "";
}


// ----------------------------------------------------------------------------
function listAllCatch() {
  var outputText = "";
  for(let i = 0; i < speciesArray.length; i++){
    outputText += "<p>" + speciesArray[i] + ": " + lengths[i] + "cm, " + weights[i] + "kg</p>"
  }
  document.getElementById("pOutput2").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function showAverageWeight() {
  var outputText;
  let total = 0;
  for(let i = 0; i < weights.length; i++){
    total += weights[i]
  }
  outputText = "Average: " + (total / weights.length) + "kg.";

  document.getElementById("pOutput3").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function findFish() {
  let searchFish = document.getElementById("txtSpeciesSearched").value;
  var outputText = "";
  let found = false;

  for(var i=0; i < speciesArray.length; i++) {
    if(searchFish===speciesArray[i]){
      found = true;
      outputText = outputText + speciesArray[i] + ": " +lengths[i]
                    +"cm, "+ weights[i] + "kg.<br />";
    } 
  }

  if(found === false) {
    outputText = searchFish + " not found!";
  }

  // Updating the View
  document.getElementById("pOutput4").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function maxWeightFreshmanWay() {
  
  var outputText = "";

  if(speciesArray.length > 0) {
    var maxWeight = -2;
    var maxSpecies = "N/A";

    for(var i=0; i < speciesArray.length; i++) {
      if( maxWeight < weights[i]  ) {
        maxWeight = weights[i];
        maxSpecies = speciesArray[i];
      }
    }

    outputText = "Max: " +maxWeight + " (" +maxSpecies +")";
  } else {
    outputText = "Error: No fish, no maximum.";
  }

  // Updating the View
  document.getElementById("pOutput5").innerHTML = outputText;
}



// ----------------------------------------------------------------------------
function maxWeightUsingIndex() {
  var outputText = "";

  if(speciesArray.length > 0) {
    var maxIndex = 0;

    for(var i=0; i < speciesArray.length; i++) {
      if( weights[maxIndex] < weights[i]  ) {
        maxIndex = i; 
      }
    }

    var kilograms = weights[maxIndex];
    var species = speciesArray[maxIndex];

    // Updating the View
    outputText = "Max: " + kilograms + "kg (" +species +")"
        + " which in lbs is " + convertKgToLbs(kilograms);
  } else {
    outputText = "Error: No fish, no maximum.";
  }

  // Updating the View
  document.getElementById("pOutput5").innerHTML = outputText;
}
 
// ------------ library function for converting kg to lbs ---------------------
function convertKgToLbs(kilograms) {
  let pounds = kilograms * 2.2;
  return pounds.toFixed(2);
}



























// ----------------------------------------------------------------------------
function fishSpeciesReport() {
  // Read input
  var speciesSearched = document.getElementById("txtSpeciesSearched").value;    
  var found = false;
  var count = 0;
  var outputText = "";

  for(var i=0; i < speciesArray.length; i++) {
    if(speciesSearched===speciesArray[i]){
      found = true;
      count++;
      outputText = outputText + speciesArray[i] + ": " +lengths[i]
                    +"cm, "+ weights[i] + "kg.<br />";
    } 
  }

  if(found === false) {
    outputText = outputText + speciesSearched + " not found!";
  } else {
    outputText = outputText + count + " " +speciesSearched +"(s)";
  }

  // Updating the View
  document.getElementById("txtSpeciesSearched").value = "";
  document.getElementById("pOutput5").innerHTML = outputText;
}