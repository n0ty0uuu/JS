const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map((nums)=> nums+10)//.map() is an array method used to transform each item in an array and return a new array with the transformed values.

//Chaining method -> 2-3 methods eik sath use karna

const newNumbers = myNumbers
.map((nm)=>nm*10)
.map((nm)=>nm-1)
.filter((nm)=>nm>20)


console.log(newNumbers);
