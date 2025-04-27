/*  create a new button element. Give it a text "click me" background color is red and text color is white.
    insert the button as the first element inside the body tag. */
    let btn=document.createElement("button");
    btn.innerText="Click Me";
    console.log(btn);
    let div=document.querySelector("div");
    div.append(btn);
    btn.style.backgroundColor="red";
    btn.style.color="white";
    document.querySelector("body").prepend(btn);  

/*  create a <p> tag in html, give it a class  and type styling.
    now create a  new class  in CSS  and try to append this class to the <p> element 
    Did you notice, how you overwite  the class name when you add a new element .
    solve this  problem using class list */

let para=document.querySelector("p");
para.classList.add("newClass");
