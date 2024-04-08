let a = prompt("Enter your Age");
console.log(typeof a);
a = Number.parseInt(a);//converting a string to number;
console.log(typeof a);

//IF STATEMENT
if (a > 0) {
    alert("THIS IS VALID")
}

//if else statement
let b = prompt("Enter your Age");
console.log(typeof b);
b = Number.parseInt(b);//converting a string to number;
console.log(typeof b);

if (b >= 18) {
    alert("THIS IS VALID")
} else {
    alert("This is invalid")
}

//if else if else statement

let c = prompt("Enter your Age");
console.log(typeof c);
c = Number.parseInt(c);//converting a string to number;
console.log(typeof c);

if (c >= 18) {
    alert("THIS IS VALID")
}

if (c < 0) {
    alert("This is an invalid age");
}
else if (c < 9) {
    alert("You are a kid and you cannot even think of driving");
}
else if (c < 18 && c >= 9) {
    alert("You are a kid and you can think of driving after 18");
}
else {
    alert("You can now drive as you are above 18");
}
console.log("Done")