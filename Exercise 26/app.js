// Exercise 26


// Blocking 
function readData(){
    alert("Reading User Data");
    return {id: 100, name:"Ahmed Suleiman"}
}

console.log("Starting reading data from the method");
const student = readData();

console.log("The data is: ", student);

console.log("this is blocking message until data is reading");


// Non-Blocking


function reading(reeder){
    setTimeout(()=>{
        const teacher={id:202, name:"Adan Techer"}
        reeder(teacher);
    },3000)
}
console.log("Star reading data before setTimeout");
reading(function(teacher){
    console.log(teacher);
});
console.log("Start reading data after setTimeout");