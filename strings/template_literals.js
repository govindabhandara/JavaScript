// Template  Literals in JS
// A way to have embedded expressions in strings

let specialString=`This is a template literal.`;
console.log(typeof specialString)
console.log(specialString)


let obj = {
    item:"pen",
    price:10
}
console.log("the cost of ",obj.item, "is", obj.price,"rupees");

// in template literals
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output)

//
let output1=`The value is ${1+2+3}`;
console.log(output1);