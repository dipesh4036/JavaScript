const accountId = 123456 ;
let accountEmail = "dipesh@gmail.com" ;
var accountPassword = "20202020" ;
accountcity = "jaipur" ;
let accountCIF;  // gives undefind

// accountId = 7890123 ;   can't cahnge
accountEmail = "rahul@gmail.com" ;
accountPassword = "10101010" ; 
accountcity = "rajkot";


// Can't Use Var in Code only use Let 

console.table([accountId , accountEmail ,accountPassword ,accountcity ,accountCIF]);


// ==> Data Types:- 

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


let score = 32

console.log(typeof score);

let value = Number(score);
console.log(typeof value);
console.log(value);