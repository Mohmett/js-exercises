// Exercise 32


// ById
const header=document.querySelector("#header");
    console.log(header)

const pragraph=document.querySelector("p");
console.log(pragraph);

// changeContent
function changeContent(){
    header.textContent= "Hello JS DOM";
}

function changeElement(){
    pragraph.innerHTML = '<h2 style="color: blue;">Hello pragraphs</h2>';
}


