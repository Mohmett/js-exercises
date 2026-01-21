// Exercise 34


// ById
const students = document.querySelector("#students")


function addNewStudent() {
    const newStudent = document.createElement("li");
    newStudent.textContent = "New Student";
    students.appendChild(newStudent);
}


function removeStudent(){

    if(students.lastChild){

    students.removeChild(students.lastChild);

    } else{
        alert("There's no item to remove")
    }
}
