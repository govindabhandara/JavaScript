let btn=document.createElement("button");
btn.innerText="click me";
console.log(btn);

let div=document.querySelector("div");
div.append(btn); // Node.append(el) adds at the end of Node(inside)

// let div=document.querySelector("div");
// div.before(btn);    // node.before(el) adds before the node (outside)

// let div=document.querySelector("div");
// div.prepend(btn);     // Node.prepend(el) adds at the start of node(inside)

// let div=document.querySelector("div");
// div.after(btn);   // node.after(el) adds after the node(outside)
 