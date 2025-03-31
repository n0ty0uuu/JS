const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);// this current context ke baat karta hai 
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "jayant"
// user.welcomeMessage()

// console.log(this)// node enviornment mai this empty obj ko refer krta hai 

// this -> function mai work ni karta 

// function chai(){
//     let username = "Aditya"
//     console.log(this.username);// underfined bcz this work ni karta function mai 
    
// }
// chai()

const chai = () => {
    let username = "Aditya"
    console.log(this.username)
}
// chai()

//basic arrow function
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,6))

//implecit return 
// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(4,2));
const addTwo = (num1,num2) => ({username: "Shinchan"})
console.log(addTwo(5,6));



