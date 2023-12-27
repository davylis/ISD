function getGreetingWithAge(n, y){
    let currentYear = new Date().getFullYear();
    let age = currentYear - y;
    const result = "Hello " + n + "! You are " + age + " years old this year.";
    return result;
}

function displayGreetingWithAge(name, yob){
    const greeting = getGreetingWithAge(name, yob);
   console.log(greeting);
}

displayGreetingWithAge("Mike", 1989);
displayGreetingWithAge("Anne", 2002);
displayGreetingWithAge("Joe", 2010);
