// selecting with id:
let heading=document.getElementById("header");
console.dir(heading);

let button=document.getElementById("myId");
console.dir(button);

// selecting with id:
let heading2=document.getElementsByClassName("heading2");
console.dir(heading2);

//selecting with tags
let para=document.getElementsByTagName("p");
console.dir(para);

//Query Selector
let elements=document.querySelector("p");
console.dir(elements); // return first element.

let allelement=document.querySelectorAll("p");
console.dir(allelement);                        // return all element. 
// in query used . in the class.
// and # use in the id.




