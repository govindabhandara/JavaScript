// create a H2 heading element with text - "Hello JavaScript". 
// Append "from Govinda Bhandara" to this text using JS.

let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+"from Govinda Bhandara";

// Create 3 divs with common class name-"box". Access them and add some unique text to each of them.
let divs=document.querySelectorAll(".box");
for (div of divs){
    console.log(div);
}
divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";
