
// Define a Course class to store course code and course name
class Course {
    constructor(code, name){
        this.code = code;
        this.name = name;
    }
};

let courseArray = [];

// Get value from input field from a HTML
function addCourse() {
    var courseCode = document.getElementById("txtCourseCode").value;
    var courseName = document.getElementById("txtCourseName").value;
    
    if (courseCode === "" || courseName === "") {
        return;
    }
    
    // Create a new Course object here and insert it into the course array
    
    courseArray.push(new Course(courseCode, courseName))
    
   // This is clearing HTML input fields 
    document.getElementById("txtCourseCode").value = "";
    document.getElementById("txtCourseName").value = "";
    document.getElementById("txtCourseCode").focus();
    document.getElementById("pOutput").innerHTML = "";
}
 //Printing list of courses 
function listCourses() {
    var outputText = "";
    for(i=0; i<courseArray.length; i++){
        outputText+=courseArray[i].name + " (" + courseArray[i].code + ")<br>";
    }
    document.getElementById("pOutput").innerHTML = outputText;
}
// Sorting list of courses
function sortCourseArray() {
    function compareTwoCourses(a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        } else {
            return -1;
        }
    }
    
    courseArray.sort(compareTwoCourses);
    listCourses();
}
