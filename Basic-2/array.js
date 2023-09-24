// Array

//first way to create array
let arr = [1,2,3,4,5,6,"dipesh",true];
// console.log(arr);

let arr2 = new Array(23,45,56,778,"dipesh","rahul");
// console.log(arr2);


// Araay method

arr.push(7)  //last me add
arr.pop()    //last element delete

arr.unshift(4)  //first me add
arr.shift()     //first element delete


// console.log(arr.includes(9));
// console.log(arr.indexOf(4));   // for any Question 

let newarr = arr.join();
// console.log(newarr);   // print inform of String that's way typeof is String.
// console.log(arr); 




// console.log(arr.slice(0,4));  // aa hoy eatla print kare 
// console.log(arr.splice(0,3));  // aa hoy eatla print kari baki na main array mathi delete kari
// console.log(arr);


let firstarr = [1,2,3,4,5];
let secondarr = [6,7,8,9,0];

//marge both array
let addarr = [...firstarr , ...secondarr];
// console.log(addarr);

let anotherarr = [1,2,[3,4],5,6,[7,8,[9,0]]];
// console.log(anotherarr.flat(Infinity));

// console.log(Array.isArray("Dipesh"));
// console.log(Array.from("Dipesh"));
// console.log(Array.from({Name:"Dipesh"}));    // interesing


let scroe1 = 100;
let scroe2 = 200;
let scroe3 = 300;
console.log(Array.of(scroe1,scroe2,scroe3));

