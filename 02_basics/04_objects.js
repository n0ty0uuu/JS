// const tinderUser = new Object() --> ye singleton object hai 

const tinderUser = {} // ye non singleton object hai
tinderUser.id = "123abc"
tinderUser.name = "BadBoy"
tinderUser.isLoggedin = false

// console.log(tinderUser)


const regularUser = { // ye hai object kai ander object
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            Lastname: "Prakash"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.middlename) // object kai ander object ko acces kra , ? is used to check if the object is present or not

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2) // --> isse obj1 mai obj2 ka data merge ho jayega,
//{}--> target object hai jisme merge hoga, obj1--> source object hai, obj2--> source object hai

// const obj3 = {...obj1,...obj2} // --> ye easy way hai merge krna ka 
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // --> is sai objects ke sari keys mil jyage 
// console.log(Object.values(tinderUser)) // is sai sare objects ke values mil jyage 
// console.log(Object.entries(tinderUser)) // is sai objects ke keys and values mil jyage as an array
// console.log(tinderUser.hasOwnProperty('id')) // --> is sai check kr skte hai ki object mai koi key hai ya nhi


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor:"hitesh"
// }
// const {courseInstructor: instructor} = course // aise kisi bhi value ko destructor kar skte hai 
// console.log(instructor)

// const {coursename, ...restProps} = course // aise kisi bhi value ko destructor kar skte hai
// console.log(coursename)


// Json ka format hai ye 
{
    "name": "ADitya",
    "age": "40",
    "gender":"Male"
}