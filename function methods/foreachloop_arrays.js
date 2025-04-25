//forEach Loop in arrays

// callbackFunction: Headers, it is a funciton to execute for each element in the Array.
//A callback is a function passed as an argument to another function.
function abc() {
    console.log("hello");
}
function myFunction(abc) {
}

let arr=[1,2,3,4,5];
arr.forEach(function printVal(val) {
    console.log(val);
})

// in arrow function
arr.forEach((val)=>{
    console.log(val);
});

let cities=["pune","mumbai","banglore","delhi"];
cities.forEach((val)=>{
    console.log(val.toUpperCase());
});