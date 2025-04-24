// print all elements of an array 
let heroes=["ironman","thor","batman","shaktiman","spiderman","rajesh"];
for (i=0;i<5;i++) {
    console.log(heroes[i]);
}
// for of
for (let el of heroes) {
    console.log(el);
}

let cities=["delhi","harayana","gudgaun","mumbai","pune"];
for (let city of cities) {
    console.log(city);
    console.log(city.toUpperCase());
}

