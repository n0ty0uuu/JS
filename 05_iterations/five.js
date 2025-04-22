//  for each loop

const coding = ["js","riby","java","python","cpp"]
// for each loop basic format
// coding.forEach( function (item) {
//     console.log(item);
    
// } )
//  we can apply arrow fnch too
// coding.forEach( (item) =>{
//     console.log(item);
    
// } )

coding.forEach( (item, index , arr)=>{
    // console.log(item,index,arr);// item , index, arr -> for each mai iske pass in cheezo ka bhi access rhta hai 
    
})

const myCoding = [
    {
    languageName: "javascript",
    LanguageFileName:"js"
    },

    {
    languageName: "java",
    LanguageFileName:"java"
    },

    {
    languageName: "Python",
    LanguageFileName:"Py"
    },
]

myCoding.forEach((element , index,arr) => {
    console.log(element.languageName,index,arr);
    
});