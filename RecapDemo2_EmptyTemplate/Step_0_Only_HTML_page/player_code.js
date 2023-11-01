let names = [];
let scores = [];

//function displayPlayers(n, s){
  //  console.log()


function addPlayer(){
    let name = document.getElementById("txtName").value;
    let score = document.getElementById("txtScore").value;
    names.push(name);
    scores.push(score);
}

function listPlayers(){
    let output = "";
    for (let i = 0; i<names.length; i++){
        output+=names[i] + "-" + scores[i] +"<br>";
    }
    document.getElementById("pOutput").innerHTML = output;
}

function searchPlayers(){
    let name = document.getElementById("Nsearch").value  
    let output = "";
    for(let i = 0; i<names.length; i++){
        if (name === names[i]){
            output+=names[i] + "-" + scores[i] + "<br>";
        }
    }
    document.getElementById("pOutput2").innerHTML = output;
}

function findWinner(){
    let maxScore=0;
    
}