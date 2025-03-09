const accountId = 173547 //Can't be changed
let accountEmail = "Aditya@yahoo.com" 
var accountPassword = "12345"// We should not use var because of issue in block scope and functional scope
accountCity = "Delhi" // we can declare a variable in js this way but its not preferable to do 

let accountstate; // if not assigned then js will consider this as undefined

// accountId = 45 // not allowed

accountEmail = "Sachmai@google.com"
accountPassword = "738464"
accountCity = "Jammu"

console.log(accountId);

console.table([accountId ,accountEmail,accountPassword,accountCity,accountstate])