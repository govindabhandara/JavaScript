/*  Equal == 
    Equal to & type ===
    Not eual to !=
    Not equal to & type !==
    >, <, >=, <=
*/
// Equal == 
let a=5;
let b=3;
console.log("a==b",a==b)   // false

a=5;
b=5;
console.log("a==b",a==b)  //true

// Not eual to !=
let c=4;
let d=5;
console.log("c!=d",c!=d)    //true

c=5;
d=5;
console.log("c!=d",c!=d)      //false

/*  Equal to & type ===
    5 === 5      // true (same type, same value)
    5 === '5'    // false (number vs string)
    true === 1   // false (boolean vs number)
    null === undefined // false (different types)
    [] === []    // false (different array references)
    {} === {}    // false (different object references)
 */
let e=5;
let f=6;
console.log("e===f = ",e===f)

e=5;
f=5;
console.log("e===f = ", e===f)

// Not equal to & type !==

let g=5;
let h=6;
console.log("g!==h = ", g!==h)

g=5;
h=5;
console.log("g!==h = ",g!==h)

// greater than > and less than <

let i=6;
let j=7;
console.log("i>j =",i>j)
console.log("i<j =",i<j)
console.log("i<=j =",i>=j)
console.log("i<=j =",i<=j)