// scope resolution  in js is to deeclere the value of variable the scope is define in {} in the var or let , const is 
// in this scope is variable is not accessable out side of the scope it is called scope 
// in side the scope of any varabile is define it is knows block scope and after
// scope is knows as glooble scope.
let a = 56  // globle scope
const b = 46  // globle scope
var c = 54  // globle scope

if (true){
    let a = 56  // block scope
    const b = 46  // block scope
    //var c = 54   // block scope but it is not use in block scope beacuse it
    //  is accesable out side of block scope so var is not used
    console.log(a);
    console.log(b);
    // console.log(c); it is not used
}
console.log(a);
console.log(b);
console.log(c);
