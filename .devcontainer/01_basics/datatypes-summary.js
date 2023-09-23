//  primitive

// 7 type = string, number, undefined, null, boolean, symbol, BigInt

const Score = 100
const Scorevalue = 100.4

const inLoggedIn = false
const outTemp = null
let useEmail ;

const id = Symbol ('123')
const anotherId = Symbol ( '123')

// console.log ( id === anotherId);

// const bigNumber = 12275896575788n


// Reference

// Array, objects, Functions 

const Heros = ["Shaktiman","Naagraj","Doga"]
let myObj = {
    name : "roli",
    age :18 ,
}

const myFunction = Function() 
{
  console.log ("hello world") ;   
} 
console.log (typeof anotherId);

// https://262.ecma-international-org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), Heap(non-primitive)

let  myYoutubename = "Rolitiwaridotcom"

let anOthername =  myYoutubename
anOthername = "chai or code"

console.log(myYoutubename);
console.log(anOthername);

let userOne = {
  email : "user@google.com",
  upi : "user@ybi"
}

let userTwo =  userOne

userTwo.email = "roli@google.com"

console.log(userOne);
console.log(userTwo);

