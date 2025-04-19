// Jab hum maan lete hai string kai ander true value hai 

const userEmail = "A@aditya.ai"


if(userEmail) {
    console.log("Got user email");
}else{
    console.log("DOn't have email");
    
}
// jab hum maan le string kai ander false value hai toh vo falsy value 
const UserEmail = ""


if(UserEmail) {
    console.log("Got user email");
}else{
    console.log("DOn't have email");
    
}
// falsy values
// false , 0, -0 , BigInt 0n ,null n undefined, NaN,""

// truthy values
// "0",'String kai ander ke value truthy hai'
//" ", [], {}, function(){}

const MeraEmail = []

if(MeraEmail.length === 0) { 
    console.log("Array is empty");
    
}// is sai pata chal jyega ke jo user email hai uska datatype array hai ke ni 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}// aise object kaa check kar skta hai 