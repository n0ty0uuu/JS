// console.log(2 > 1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" > 0)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // (the reason is that an equality check ==  and comparisons > < >= <= works differently 
// comparisons converts null to a number treating it as 0 that's why null >= 0 is true and null > 0 is false)

// === strict check  (also checks datatypes)

console.log("2" === 2)
