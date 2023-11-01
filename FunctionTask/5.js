function displayGreetingWithAge(name, yob){
    let currentYear = new Date().getFullYear();
    let age = currentYear - yob;
    console.log("Hello " + name + "! You are " + age + " years old this year."  );
}

displayGreetingWithAge("Mike", 1989);
displayGreetingWithAge("Anne", 2002);
displayGreetingWithAge("Joe", 2010);