let score = 32;

// console.log(typeof score);

let value = Number(score);
// console.log(typeof value);
// console.log(value);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Dipesh" => true


// console.log("1"+2);
// console.log(2+"1");
// console.log("1"+2+2);
// console.log(2+2+"1");

// console.log(+true);

console.log("2">1);

console.log(null >0);
console.log(null == 0);

console.log(undefined >= 0);


console.log("2"==2);
console.log("2"===2);


// Data Types & their return types:
// _____________________________

// 1. primitive (call by value):-

// a) string => string
// b) number => number
// c) boolean => boolean
// d) null => object
// e) undefined => undefined
// f) symbol => symbol
// g) bigint => bigint

// 2. non-primitive (reference type):-

// a) array => object
// b) object => object
// c) function => function (function-object)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
