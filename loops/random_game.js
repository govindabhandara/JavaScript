let gameNum=25;
let userNum=prompt("Guess the game number:");
console.log(userNum);
while(userNum!=gameNum) {
    userNum=prompt("you enter wrong num. guess again:");

}
console.log("congratulations you enter the correct number");