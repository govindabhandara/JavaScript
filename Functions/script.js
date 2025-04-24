//  block of code that executes that perform a specific task can be invoked whenever ordered.
// we always use parenthesis to invoke method in function. we can think as blackbox.
// It helps in redundancy(repeat).

/*  two types
    1) function definition.
    function functionName() {
    //do some work
    }

    function funtionName(param1,param2.....) {
    //do some work
    }

    2) function call / invoke.
    functionName();
*/
function myFunction() {
    console.log("Welcome to my college");
    console.log("we are learning JS:");
}
myFunction();
myFunction();



function mFunction(msg) {
    //parameter -> input
    console.log(msg);
}
mFunction("govinda bhandara"); // argument : we can use in function definition is paramaeter and 
// and used in function call is argument : but parameter and argument are likes as same.

