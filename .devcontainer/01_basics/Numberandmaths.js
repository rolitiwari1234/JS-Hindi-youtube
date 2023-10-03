const score = 500
// console.log(score);

const balance = new Number(200)

// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 123.974
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++Maths+++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(3.7));
console.log(Math.ceil(6.8));
console.log(Math.floor(3,9));
console.log(Math.min(1,8,5,0));
console.log(Math.max(1,4,9,5,23));

console.log(Math.random());
console.log((Math.random()*10 ) + 2 );
console.log(Math.floor((Math.random()*20 ) + 3 ));

const min = 20
const max = 30

console.log(Math.floor(Math.random()* (max - min + 1 )) + min );