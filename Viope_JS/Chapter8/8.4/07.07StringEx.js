function processName() {

    // read value of name from the input field
    let text = document.getElementById("name").value

    // show it with "ALL CAPS" using toUpperCase()
    let upperCaseText = text.toUpperCase();

    // show it with  "all small letters" using toLowerCase()
    let lowerCaseText = text.toLowerCase();

    //tell how many characters are there (length, includes also all spaces) 
    let characterLength = text.length;

    // tell, whether the input string contains the word 'muumi'
    let findWordMuumi = text.indexOf("muumi");
    let muumi = "";
    if (findWordMuumi === -1){
        muumi = "Doesn't contain the text muumi."
    } else if (findWordMuumi === 0) {
        muumi = "Contains the text muumi."
    }
    
    // tell the first character using charAt()
    let firstChar = text.charAt();

    // tell which ones are the first three characters using substring().
    let firstThreeChar = text.substring(0, 3);
   
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + upperCaseText;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lowerCaseText;
    document.getElementById("length").innerHTML = "Character count: " + characterLength;
    document.getElementById("contains").innerHTML = muumi;
    document.getElementById("firstCharacter").innerHTML = "First character: " + firstChar
    document.getElementById("manyCharacters").innerHTML = "First three characters: " + firstThreeChar
}