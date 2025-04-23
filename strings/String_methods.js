/*  these are built-in functions to manipulate a string.
    str.toUpperCase()
    str.toLowerCase()
    str.trim() // removes whitespaces
    Methods is like a block of code.
*/

let str="abc";
str.toUpperCase();
console.log(str)

//
let str1="sdf";
let newStr1=str.toUpperCase();
console.log(str1);
console.log(newStr1)

// original values are not chaged because string are immutable in javascript.

//lowercase
let fullName="GOVINDA"
console.log(fullName.toLowerCase())

// trim : remove whitespaces

let yname="       govinda bhandara js             ";
console.log(yname.trim())
