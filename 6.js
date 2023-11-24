// const coding = ["js","ruby","python","java","cpp"]

// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);

// const mynums =[1,2,3,4,,5,6,7,8,9,10]

// let  newNums = mynums.filter((num)=> num > 4)
//  console.log(newNums);


// const mynums =[1,2,3,4,,5,6,7,8,9,10] 

let  newNums = mynums.filter((num)=> {
    return num > 4
})
const newnum = []
mynums.forEach((num)=>{
    if(num > 4){
        newnum.push(num)
    }
})
 console.log(newNums);

