const marvel_heros = ["thor","spiderman","hulk"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // array kai ander array bana dega aur doosre array ko as an element le lega 
// console.log(marvel_heros[3][2])// third element doosra array and [2] us array ka element 

// const all_heros = marvel_heros.concat(dc_heros) // concat -> adds 2 arrays and make a new array 
// console.log(all_heros);

// const all_new_heros = [...marvel_heros,...dc_heros] // spread works same as concat 
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity) // flat -> array kai ander array ko hatake sare elements ko eik he array mai dal deta

// console.log(real_another_array);


// console.log(Array.isArray("Aditya")); --> "Aditya" array ni hai ye toh false

const sach_me = "Aditya"

// console.log(Array.from(sach_me)); --> string ko array bana dia

// console.log(Array.from({name:"PRAKASH"}));// interesting case gives  an empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // Array.of --> can combine multiple numbers/strings into a single array

