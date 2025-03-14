const balance = new Number(300.6598) // ye specially cast krta hai ke ye number hai 

//console.log(balance.toString());
//console.log(typeof balance);

//console.log(balance.toFixed(3)); // decimal kai baad kitne digits chaiye vo batata (2) -> decimal kai baad 2 digits


const otherNumber = 23.6532
//console.log(otherNumber.toPrecision(3));

const zeroes = 1000000
//console.log(zeroes.toLocaleString('en-IN')); // comma laga deta hai , 'en-IN' indian system kai hisab sai lagayega ab


//+++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // Negative -> positive 
// console.log(Math.round(4.55)); // roundoff kr deta 
// console.log(Math.ceil(5.0)) // decimal kai baad halka sa bhi zyada koi number ho toh ye next number de dega
// console.log(Math.floor(5.9));// decimmal kai baad koi bhi number ho no matter ye kam number he dega
// console.log(Math.sqrt(4)); // square root dega
// console.log(Math.pow(2,3)) // power value deta (2,3) 2 ke power 3
// console.log(Math.min(3,4,5,6,7,9)); // returns min value from an array
// console.log(Math.max(3,4,6,7,)); // returns ma =x value from an array

// console.log(Math.floor(Math.random()*10)+1) // imp

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min) // IMportant formula jab kisi kai beech mai nikalni ho value

