/*  Compact way of writing a function.
    const functionName(param1,param2....) =>{
        //do some work
        }
*/

//sum function
function sum(a, b) {
    return a + b;
}
//modern JS
const arrowSum=(a,b) => {
    console.log(a+b);
}

//multiplication function
const arrowMul=(c,d) => {
    console.log(c*d);
}
