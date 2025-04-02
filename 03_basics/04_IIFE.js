// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`Db Connected`);
    
})(); //    make sure to add semicolons at the end
// Global scope kai pollution sai problem hote hai kai bar toh uss global scope kai pollution ko hatane kai liye hum ye use karte hai 
//()() - first wale mai defination , second wale mai execution

( (name) => {
    // unnamed iffe
    console.log(`DB connected two ${name}`);
    
})('Aditya')