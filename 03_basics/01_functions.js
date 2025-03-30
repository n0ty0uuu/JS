// Function in js 

function sayMyName (){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// sayMyName => function ka reference
// sayMyName() => function ka execution

// function addTwoNumbers(number1,number2){ //jab function ke defination banate hai toh jo bhi uske ander input lete hai vo parameters
//     let result = number1 + number2;
//     return result;
    
// }
// function addTwoNumbers(number1,number2){ //jab function ke defination banate hai toh jo bhi uske ander input lete hai vo parameters
//     return number1 + number2;
    
// }
// const result = addTwoNumbers(7,9)//function ko call krte time jo input dete hai usko arguments bolte hai 
// console.log(result);

function loginuserMessage(username = "jayant"){ // username = "jayant" => agar kkoi argument ni dia toh jayant else overide kr de jyage 
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginuserMessage())


function calculateCartPrice(val1,val2,...num1){// jab pata na kitne arguments pass honge toh rest operator use krte hai toh vo sabko lte hai
    return num1
}
// console.log(calculateCartPrice(20,20,60,65))

const user = {
    username : "Aditya",
    price: 6000
}
function handleObject(tryObject){
    console.log(`username is ${tryObject.username} and price is ${tryObject.price}`)
}
// handleObject({ //direct object banake bhi pass kar skte hai 
//     username:"ADITYA",
//     price: 500
// })

const newArray = [100,344,546,675]

function returnsecondvalue(getarray){
    return getarray
}
console.log(returnsecondvalue(newArray));
