// Exercise 25



const array1=[1,2,3,4];
const array2=[...array1,5,6,7,8,9,10];
console.log(array2);


function multiply(...array1){
    return array1.reduce((total,num)=>total*num,1);
}
    console.log(multiply(2,4,5));