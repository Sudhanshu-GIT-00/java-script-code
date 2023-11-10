// singleton :- it is created by constructor object and it is single object. ye constructor se jo banega wo singleton oject hota h.
// Object.create : created through constructor method.

// object literals

// how to use symble 
const mysym = Symbol("key1")

const jsUser ={
    name:"aman",
    "full-name":"aman kumar",// it is not accesable to object.full-name it worng
    age:15,
    location:"bihar",
    //mysym:"mykey1",// its  not use like symble
    [mysym]:"mykey1",// its refering to const mysym= symble("key1")
    email:"aman@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["monday","sunday"]
}

// accesing the Object
// console.log(jsUser.email)
// console.log(jsUser["email"])

// console.log(jsUser.full-name) // its worng
// console.log(jsUser["full-name"]) // its wright
// console.log(jsUser[mysym])// accesing the symble


// // changing the value of object
// jsUser.email="aman213@gmail.com"
// // lock the value
// Object.email=""


const rguser={
    email:"aman@gmail.com",
    fullname:{
        userfullname:{
            fname:"aman",
            lname:"kumar"
        }
    }
}

// console.log(rguser.fullname.userfullname.fname)//nested object useing


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3={obj1,obj2} // it will print the like nasted object 
// const obj3 =Object.assign({},obj1,obj2) // {} this sing will marge the all multipale object
const obj3 = {...obj1, ...obj3}
console.log(obj3);