// JSON form
let json = [
    {
      "number": 1,
      "name": "Samsung Smart LED-TV",
      "price": 449,
      "description": "HD-digi ready"
    },
    {
      "number": 2,
      "name": "Samsung 2.1 SoundBar Home Theater",
      "price": 198,
      "description": "Connect to TV and stream music wireless"
    },
    {
      "number": 3,
      "name": "Dilog CI+/CA module for pay-tv-cards",
      "price": 63.9,
      "description": "CI+ module for the table televisions"
    }
  ]

let products;
// todo: Parse the JSON text into Javascript objects (1 array, 3 'product' objects)
let product1 = json[0];
let product2 = json[1];
let product3 = json[2];

function listProducts() {
    // Handle the product objects from the array. Use i to index the array.
    let outputText = "";
    for(i=0; i<json.length; i++){
      outputText+="<p>Number: "+json[i].number+"<br>Name: "+json[i].name+"<br>Price: "+json[i].price.toFixed(2)+"<br>Description: "+json[i].description+"</p>"
    }

    // Write the output text to the web page (=to the DOM that browser then shows) 
    document.getElementById("productList").innerHTML = outputText;

    listProducts();

}   