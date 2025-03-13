const name = "Aditya"
const age = 21

// console.log("Hello my name is"+name+ "and am "+age+ "years old") => outdated way

//console.log(`Hello my name is ${name} and i am ${age} years old`); // => new way of doing this 

const gameName = new String('NOTYOU') // another way to declare string

// console.log(name.__proto__); 
// console.log(name.toUpperCase()); => value ko upper case mai convert kar dega.
// console.log(name.charAt(3)); => location of the character


const ty = new String('ADITYA')

const newString = ty.substring(1,5) //=> STring sai he doosri string banage (startindex,end index) last index not included
// console.log(newString); ==> output DITY 

const anotherString = ty.slice(-5,4) // like substring but it can also take negative  value too 
// console.log(anotherString);


const newString1 = "Aditya jayant sakshi abhas aman kosang"

//console.log(newString1.trim()); // => removes spaces from the string

const url = "https://aditya.com%20prakash"

//console.log(url.replace('%20','-')) // replace the choosen thing with the new provided thing 

//console.log(url.includes('prakash'))// used to know weather the word or anything is in the string 

console.log(newString1.split(' ')); // split the given string on the bases of the splitter provided and make an array of the values 




