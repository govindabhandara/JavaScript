// create an array to store companies -> "bloomberg","Microsoft","Uber","Google","IBM","Netflix" 
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");