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
console.log(loginuserMessage())
