console.log("data types in Javascript");

//There are seven typs of primitive datatypes in Javascript
// NNSSBBU
//null
//number
//string
//symbol
//boolean
//bigint
//undefined

let a = null;
let b = 785;
let c = true;
let d = BigInt("567")
let e = "Sairam"
let f = Symbol("i am a symbol");
let g



console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//nonprimitive data types
//objects in Js - it is used to make key value pair like a dictonary

const item1 = {

    name: "Headphone",
    price: 1000,
    quantity: 10,
    discount: 0.1,
    tax: 0.05,
}

console.log(item1);

console.log(item1["tax"]);
