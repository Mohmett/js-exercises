// Exercise 29



// const user={
//     name: "Ali",
//     Id: 12,
//     City: "Somalia"
// }

// console.log(user);

// const JSONStringfy= JSON.stringify(user);
// console.log(JSONStringfy);

// const JSONparset=JSON.parse(JSONStringfy);
// console.log(JSONparset);


async function fromJSON() {
    console.log("Starting Fetching Data from JSON File");

    const response = await fetch("data.json");

    const data = await response.json();
    console.log("Fetched Data: 😍", data);
}
fromJSON();

setTimeout(()=>{
    console.log("The data is Fetched from JSON file data.json❤️");
},2000)
