// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modeBtn=document.querySelector("#mode");
// let body=document.querySelector("body"); // we can also use through CSS
let currMode="light-mode";

modeBtn.addEventListener("click",()=>{
    // console.log("you are trying to change mode");
    if(currMode==="light") {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        // body.classList.add("dark"); we can also use through CSS
    } else {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
        // body.classList.add("light"); we can also use through CSS
    }
    console.log(currMode);
});