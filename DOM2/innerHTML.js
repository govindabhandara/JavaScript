// innerHTML: returns the plain text or HTML contents in the element
let div=document.querySelector("div");
console.dir(div);
console.dir(div.innerHTML);

// we can change 
let heading=document.querySelector("h1");
console.log("heading");
heading.innerHTML="<i>new Heading</i>";