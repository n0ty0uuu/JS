// Nullish coalescing Operator (??)

// jab hum database sai koi value retrive krte hai toh kabhi kabha
// waha  sai null/undefined value aa jati hai jiske karan problem ho skta hai code mai 
// toh ye operator use kiya jata hai toh isme hota kya hai 
// null ?? 10 agar null aye hai value toh 10 aa jyega 

let val1;

val1 = 5 ?? 10
let val2;
// val2 = null ?? 15
val2 = undefined ?? 16


console.log(val1);
console.log(val2);

let val3;
val3 = null ?? 10 ?? 20 
// is case mai null / undefined kai baad ke first value assign hoge

console.log(val3);

let val4;
val4 = null ?? undefined // result undefined
console.log(val4);

