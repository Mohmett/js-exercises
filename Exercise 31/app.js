// Exercise 31



async function fetchUserData(params) {

    try{
        console.log("Starting Fetching Data From JSON Rest API");
        // GET Method
        const response=await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            throw new Error(`error status ${response.status}`);
        }

        const data= await response.json();
        console.log(data)

    }catch(error) {

        console.log(error);
    }
    
}
fetchUserData();


// Post-Practice
// async function PostData() {
//     try{

//         const response= await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method:"POST",
//             headers: {
//                 "content-type": 'application/JSON',
//             },
//             body: JSON.stringify({
//                 title: 'Testing',
//                 body: 'Testing Body is here',
//                 userId: 1,
//             }),
//         })

//         if(!response.ok){
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         //waxaa xiga
//         console.log(response);

//         const data= await response.json();
//         console.log(data);

//     }
//     catch(error){
//         console.log(error);
//     }
// }
// PostData();