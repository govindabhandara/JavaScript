/*  logical AND &&
    Logical OR ||
    Logical NOT ! 
*/
//Logical AND &&
let a=6;
let b=5;
let cond1= a>b;
let cond2=a===6;
console.log("cond1 && cond2 = ", cond1 && cond2);
// console.log("cond1 && cond2=",a>b && a===6);
cond1=a>b;
cond2=a===4;
console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond1 && cond2=",a>b && a===4);



// Logical OR ||

cond1=a>b;
cond2=a===4;
console.log("cond1 || cond2 = ",cond1 || cond2);
// console.log("cond1 || cond2=",a>b||a===4);

cond1= a>b;
cond2=a===6;
console.log("cond1 || cond2 = ", cond1 || cond2);
// console.log("cond1 || cond2=",a>b||a===6);

cond1=a<b;
cond2=a===2;
console.log("cond1 || cond2 =",cond1 || cond2);
// console.log("cond1 || cond2=",a<b||a===2);

//logical NOT !
let c=5;
let d=4;
console.log("!(c>d) = ",!(c>d));
console.log("!(c<d) = ",!(c<d))