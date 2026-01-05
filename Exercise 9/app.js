// Exercise 9

// Objects

let car={
    Name:"Toyota",
    model: 1967,
    year: "H200",
    start:function(){
        console.log("The car has started in "+this.model);
    }
};

console.log(car);
console.log(car.Name);
console.log(car.model);
console.log(car.year);
console.log(car.start());



