// Performs some operations & reduces the array to a single value. It returns that single value.
const array=[1,2,3,4];
//0+1+2+3+4
const output = array.reduce((result,current)=> {
    return result+current;
})
console.log(output);

// largest num in array;

const array1=[5,8,1,9,8];
const outpu = array1.reduce((result,current)=> {
    return result>current ? result:current; 
})
console.log(outpu);