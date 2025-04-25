//for index
let cities=["pune","mumbai","banglore","delhi"];

cities.forEach((val,idx)=>{
    console.log(val.toUpperCase(),idx   );
});

//Array itself
cities=["pune","mumbai","banglore","delhi"];

cities.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});

