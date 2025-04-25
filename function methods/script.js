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