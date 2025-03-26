// Singleton --> apni tarha ka ejk hi object banega (ye banta jab hum constructor function se object banate hain)

// object literals
Object.create // object create karne ke liye isme he singleton banta hai
const mySym = Symbol("Keys")

const jsUser = {
    name: "Aditya Prakash",
    [mySym]:"mykey1",
    age: 21,
    email: "Aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}
// console.log(jsUser.lastLoginDays[2]); // --> A way to access data from object
// console.log(jsUser ["age"]); // another way to access data from object
// console.log(jsUser[mySym]); // --> Symbol key se access karne ka tarika

// jsUser.email = "Adityaprakash.chatgpt.com"// aise hum obj kai values ko update kar skte hai 
// Object.freeze(jsUser) // --> isse obj ki values change nhi hogi
// jsUser.email = "Adityaprakash.youtube.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello ${this.name}, Welcome to the world of JavaScript`)// this keyword is used to access the object properties
}
console.log(jsUser.greeting);

