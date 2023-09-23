function calculateBMI() {

  const call_w = document.getElementById("weight").value;
  const call_h = document.getElementById("height").value;

  let bmi = call_w / (call_h / 100 * call_h / 100);

    if (bmi <= 18.4){
      document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (Weight less than normal weight)";
 }
      else if (bmi >= 18.4 && bmi <= 24.9){
       document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (Normal weight)";
 }
        else if (bmi >= 25.0){
          document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (Overweight)";
        }
		
}
