/* creates a new array with the results of some operation. 
The value its callback returns are used to form new array. */ 

let nums=[56,76,86,34];
nums.map((val)=>{
    console.log(val);
})

//

nums=[56,76,86,34];
let newarr=nums.map((val)=>{
    return val*val;
})
console.log(newarr);