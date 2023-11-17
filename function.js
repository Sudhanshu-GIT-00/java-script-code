// function addTwoNo(perameter1, perameter2){
//     console.log(perameter1+perameter2);
// }
// const result = addTwoNo(3, arguments)
// console.log("RESULT:",result);


function addTwoNo(perameter1, perameter2){
    // let result = perameter1 + perameter2
    // return result // after return nothing is print 
    //when ever we return then it will store in a verible not with only console.log
    return perameter1+perameter2
}

// const result = addTwoNo(3, 5) 
// console.log("RESULT:",result);

function loginUser(username = "aman"){
    if(username===undefined){
        console.log("plz enter u name")
        return
    }
    if(!undefined){ // same as same if block
        console.log("plz enter u name")
        return
    }
    return `${username} just logged in`
}
loginUser("aman")// nothing will print beacuse after return we dont print any thing
// console.log(loginUser("raja")) //it will override the aman in function

function calculateCartPrice(...num1){ // the tripple dot is rest oppretors and sprade opprators
    return num1
}
console.log(calculateCartPrice(200, 400, 500))
const user = {
    usName : "aman",
    price:546
}
 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.username}`);

}

// handleObject(user)
handleObject({
    usName:"aman",
    price:698
})
const mynewarray = [200, 400, 500, 65500]
function returnSecondValue(getArray){
    return getArray[1]
}
 console.log(returnSecondValue(mynewarray));
 console.log(returnSecondValue([200, 400, 500, 65500]));

