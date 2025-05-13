// const coding = ["js","riby","java","python","cpp"]

// const values = coding.forEach((item)=> {
//     console.log(item);
//     return item // -> will always returns undefined
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((item)=> item>4) // aise hum value nikal skte hai array mai sai 
// console.log(newNums);


// const newNums = myNums.filter((nums)=> {
//     return nums>4 // aise hum return mar skte hai values
// })
// console.log(newNums);

// const newNum = []

myNums.forEach((num) => { // eik tarika jis sai hum return kara skte hai for each loop mai value
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum);


