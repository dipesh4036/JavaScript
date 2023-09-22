// let name = "Dipesh"
// let repoCount = 50

// // console.log(`my is my name is ${name} and my Repo. number is ${repoCount}`);

// let gameName = "Dipesh"
// console.log(gameName.substring(0,4));  //this is include only positive value
// console.log(gameName.slice(-5,4));  //this is positive nad negative value include

// const name = "hitesh"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('hitesh-hc-com')

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));

let number = 23;  // first way to define Number

let Number2 = new Number(233.89534); // second way to define Number
console.log(Number2);

// Some Method in Numbers

console.log(Number2.toString().length); //Convert into String
console.log(Number2.toPrecision(4)); //Precision values
console.log(Number2.toFixed(3)); // after point values 
console.log(Number2.toExponential());

// ************** Maths *************** 

console.log(Math.abs(-4));
console.log(Math.round(45.67));
console.log(Math.sqrt(25));

console.log(Math.random()); //Returns a pseudorandom number between 0 and 1.
let max = 20 ;
let min = 10 ;
console.log(Math.floor(Math.random()*(max-min+1))+min); //for 1 random number

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
