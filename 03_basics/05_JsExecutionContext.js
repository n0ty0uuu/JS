// JavaScript Execution Context
// iska mtlb hota hai ke jo bhi file humne banai hai js kai ander usko js execute kaise krage run kaise krage 

// ye Programs ko 2 phase mai run karti hai , jB run kre hai toh sabse pehle banta hai 
//{} - > global execution context -> (this) iske ander GEC ko rakh dia jata hai
// in browser (this) ke value aati hai 'Window Object' ye aati hai 

// 2, Function execution context 


// How program is Executed in Js
//1) Memory Creation phase 
//2) Execution phase

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,5)
console.log(result1);
console.log(result2);


//  memory phase           | execution phase
//val1 = undefined         | 10
//val2 = undefined         |  5
//addNum = defination         
//result = undefined        addNum - > new executional context 1)new variable enviornment, 2)execution thread ->delete after work done
//restul = undefined

