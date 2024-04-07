console.log("javascr TUT 3: var , let, const");

let x = 10;
let y = "sairam";
const c = null;

//c = 9; will throw an error 
let d = undefined;

{
    let y = "Ramu";
    console.log(y);
}

console.log(y);

//let is a block scope, can be declared only once and update many times
//var is a global scope
//const is a constant is a block scope, 