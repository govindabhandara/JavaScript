//For a given numbers, print the square of each value using forEach loop.
let num=[2,3,4,5,6];
num.forEach((num)=> {
    console.log(num*num);

});

//or 

num=[2,3,4,5,6];
let calcSquare=(num)=> {
    console.log(num*num);

};
num.forEach(calcSquare);


// we are given an array of marks of students. Filter out the marks of students that scored 90+.
let marks=[96,45,65,76,99,34,54];
let topper=marks.filter((val)=>{
    return val > 90;

})
console.log(topper);

/* Take a number  n as input from user. create  an array of  numbers  from 1 to n.
    use the reduce method to calculate  sum  of all numbers  in the array.
    use the reduce  method  to calculate  product  of all number in the array. */

    let n=prompt("enter a number:");
    let arr=[];
     for ( let i=1;i<=n;i++) {
        arr[i-1]=i;
     }
     console.log(arr);
    
    let sum=arr.reduce((pre,curr)=>{
        return pre+curr;
    });
    console.log(sum) // sum all number

    let factorial=arr.reduce((pre,curr)=>{
        return pre * curr;
    });
    console.log(factorial);