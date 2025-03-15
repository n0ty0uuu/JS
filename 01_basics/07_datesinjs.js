// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// ye sare mthds current date time kai hisab sai output dete hai 

// let myCreatedDate = new Date(2023 , 0 , 23) // js mai months starts from 0
// let myCreatedDate = new Date(2023 , 0 , 23,5,3,24) 
//let myCreatedDate = new Date("2023-01-14") // Another way of adding dates
let myCreatedDate = new Date("01-14-2022") // Indian format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp.T()); // gIVES VALUES in milli Seconds

let newDate = new Date("01-14-2023 12:10:13") // months-date-year hours:minuts:seconds
console.log(newDate);
console.log(newDate.getMonth()); // month provide kar dega is sai
console.log(newDate.getFullYear()); // year provide kar dega
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday:"long" ,
})



