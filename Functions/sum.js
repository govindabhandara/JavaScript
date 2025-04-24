//
function sum(x,y) {
    console.log(x+y);
}


// return value
function sum(x,y) {
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);


// Unreachable after return noone execute
function sum(x,y) {
    //local variable -> scope block scope of function till block {}
    s=x+y;
    console.log("before return");
    return s;
    console.log("after return"); // unreachable
}
let value=sum(3,4);
console.log(value);

