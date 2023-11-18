const user={
    uname:"aman",
    price: 888,
    welcome: function(){
        console.log(`${this.uname}, welcome to website`);

        // console.log(this) this is keyword which use to change the value of current context
    }
}
user.welcome()
user.uname = "aman-hh" //here use current context through this keyword
user.welcome()

// function chai(){
//     let usname="aman"
//     console.log(this.usname);
// }
// chai()
// const chai = function(){
//     let uname = "aman"
//     console.log(this.uname);
// }
// chai()
const chai = ()=>{
    let uname = "aman"
    console.log(this.uname);
}
chai()

// const addtwo =(num1, num2) => {
//     return num1 + num2 // explicitly we use return keyword
// }

// const addtwo =(num1, num2) =>  num1 + num2 // implicit return it will return beacuse it is one line statment we did't write the return
// const addtwo = (num1, num2) => ( num1 + num2) // if we write in {} we have to write return keyword 
// when we write () then we did't write return keyword beacues it is one line statment 
//  it most usefull in react mindit

const addtwo = (num1, num2) => ( {uname:"aman"}) 
console.log(addtwo(3,4))

