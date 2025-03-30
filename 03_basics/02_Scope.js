
var c = 500
//{} -> Scope

if(true){ // yaha sai leke 
    // let a = 10
// const b = 20
var c = 30 // --> One should avoid using var in there codes
}// yaha tak hai block scope bahar ka area hai global scope global scope kai bahar ke value scope kai ander available hote hai 
// per scope kai ander ke value bahar ni jani chaiye 


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Aditya"
    
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // will never execute score kai bahar hai kyoki 

    two()
    
}
// one()


//**********************************interesting**************************************** 

function addone(num) {
    return num+1
}

console.log(addone(5))

const addTwo = function(num){
    
    return num + 2
}

console.log(addTwo(5));
