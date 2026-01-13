// Exercise 27


function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const studentInfo=false;

            if(studentInfo){
                resolve({id:202, name:"Jama Ali"})
            } else{
                reject("Failed to read Student's Data")
            }
        },2000)
    });
}

getUserData()
.then(data=>console.log("Student's Data is: ", data))
.catch(error=>console.log("Failed"))