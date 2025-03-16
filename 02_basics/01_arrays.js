// array

const myArr = [0,1,2,3,4,5]

const myHeros = ["Aditya", "Shaktiman"]

// console.log(myArr.length);


// arrays methods 

//myArr.push(6,7) // used to put element in an array
//myArr.pop()
//myArr.unshift(2) // put the selected element at the beginning of the array and shift each element 
//myArr.shift() // removes the first element of the array
//console.log(myArr.includes(4)); // returns value  in true or false
//console.log(myArr.indexOf(3)); // returns the index of the element , if value not existed in the array then -1

// console.log(myArr);

const newArr = myArr.join() // myArr kai sare elements ko newArr mai dal dega ye as a String

//console.log(myArr);
//console.log(typeof newArr);

// Slice() => This mtds extracts a section of an array and return a new array containing the extracted elements. It doesn't 
//modify the original array

console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

//splice () =>this methods changes the contents of an array bu removing or replacing existing elements and/or adding new 
// elements in place . Id modifies the original arrya and returns an array containing the removed elements.
// if no elements were removed then it returns an empty array
console.log("B", myArr)
const myn2 = myArr.splice(1,3)

console.log("C",myArr)
console.log(myn2);


