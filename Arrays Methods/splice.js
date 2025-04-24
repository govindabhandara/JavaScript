//change original array(add ,remove and replace)
let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);

/// to add emelent
let arr1=[8,9,0,1,2,3,4];
arr1.splice(2,0,101);

//to delete element
let arr2=[2,4,6,8,10,12];
    arr2.splice(3,1);

// to replace element
let arr3=[1,3,5,7,9,11];
    arr3.splice(3,1,101);

//
arr3.splice(4) // result: 9,11
    arr.splice() // result null