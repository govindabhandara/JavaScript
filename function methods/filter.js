//create a new array of elements that give true for a condition/filter
//eg: all even elements

let arr=[1,2,3,4,5,6,7];

let evenArr=arr.filter((val)=>{
    return val % 2 === 0;
})

// 

let marks=[96,45,65,76,99,34,54];
let topper=marks.filter((val)=>{
    return val > 90;

})
console.log(topper);