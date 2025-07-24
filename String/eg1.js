/*  prompt the user to enter  their full name. Generate a username  for them based on the input.
    Start username with @, followed by their fullname and ending with the full length. */
    

let fullName=prompt("enter fullname without spaces");
let userName="@"+fullName+fullName.length;
console.log(userName);