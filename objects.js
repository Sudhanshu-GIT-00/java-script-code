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

// const tinderUser = new Object() // singletone object
const tinderUser ={} // non singleton object
console.log(tinderuser);
tinderUser.id ="12jd"
tinderUser.name= "aman"
tinderUser.isLoggedIn= false
//  console.log(tinderUser);


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
const obj3 = {...obj1, ...obj3}// it will same the marge the object that is called sprade object it will use every whare

console.log(obj3);

// array with object
const user =[
    {
        id:1,
        email:"aman@gmail.com"
    },
    {
        id:1,
        email:"aman@gmail.com"
    },
    {
        id:1,
        email:"aman@gmail.com"
    },
    {
        id:1,
        email:"aman@gmail.com"
    }
]
user[1].email


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//  if we want to chack object property go to console in inspect
// and enter the const obj1 ={1;"a",2:"b"} then print obj1 then go and check


const course = {
    cname: "hai js",
    price: "5263",
    cInstructor: "aman"
}
// course.cInstructor
const{cInstructor}=course
console.log(cInstructor);
