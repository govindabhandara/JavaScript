/*DOM Manipulation
        properties 
    tagName: returns tag for element nodes.
    innerText: returns the text content of the element and all its children
    innerHTML: returns the plain text or HTML contents in the element
    textContent: returns textual content even for hidden elements.

*/
// tagName: returns tag for element nodes.
let firstEl=document.querySelector("#myId");
console.dir(firstEl);

console.dir(firstEl.tagName);

//innerText: returns the text content of the element and all its children
//parent , child , sibling

//(text,comment and element.) node

console.dir(document.body.firstChild); //text
document.querySelector("div");
// output <div>abcd</div>

document.querySelector("div").children;

// we use all these for navigation