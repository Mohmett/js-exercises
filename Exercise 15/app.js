// Exercise 15


// let students=["Ahmed", "Jama", "Abdi"]
// for(let student of students){
//     console.log(student);
// }

let people=[
    {
    name:"Jama",
    Id:1200,
    Phone:1122,
    city:"Mogadishu"},
        {
    name:"Ahmed",
    Id:2222,
    Phone:343434,
    city:"Hargeisa"},
]
for(person of people){
    for(anyone in person){
        console.log(anyone + ":" +person[anyone]);
    }
}