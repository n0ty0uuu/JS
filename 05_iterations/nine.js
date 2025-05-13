//reduce method

const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function (acc,curr){
    // console.log(`acc: ${acc} and curr:${curr}`);
    return acc + curr
},0) // ye 0 intitial valye di hai humne

/* 
acc: 0 and  curr: 1
acc: 1 and  curr: 2
acc: 3 and  curr: 3
acc: 6 and  curr: 4
acc: 10 and  curr: 5
*/
// console.log(myTotal);
const initialval = 0
const newTotal = myNums
.reduce((acc , curr)=> {
console.log(`acc: ${acc} and curr: ${curr}`);
return acc+curr
},initialval);


// console.log(newTotal);


const shoppingcart = [
    {
        itemName: "Js course",
        price: 2900
    },
        {
        itemName: "java course",
        price: 3900
    },
        {
        itemName: "Python course",
        price: 900
    },
        {
        itemName: "Bootstrap course",
        price: 2000
    },
        {
        itemName: "backend course",
        price: 6000
    },
        {
        itemName: "Appdev course",
        price: 1900
    },    {
        itemName:  "Rust course",
        price: 2300
    },

]

const addPrice = shoppingcart.reduce((acc ,item)=> acc+item.price , 0)
console.log(addPrice);


