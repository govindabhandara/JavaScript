/*  node.addEventListener(event, callback)
    node.removeEventListener(event, callback)
    
    *Note: the callback references should be same to remove
*/ 
let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",()=> {
    console.log("button 1 must clicked- handler 1");
    // console.log(evt);
    // console.log(evt.type)
});

btn1.addEventListener("click",()=> {
    console.log("button 1 must clicked - handler 2");
});

const handler3=() => {
    console.log("button 1 must clicked - handler 3");
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click",()=> {
    console.log("button 1 must clicked - handler 4");
});

btn1.removeEventListener("click",handler3);