// chapter 2 pratice set
//Q1

let age = prompt("what is your age");
age = Number.parsInt(age);
if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20");
}
else {
    console.log("Your age doest lies between10 and 20");
}

//q2

let age1 = prompt("what is your age");
switch (age1) {

    case '12':
        console.log("your age is 12");
        break;
    case '13':
        console.log("your age is 13");
        break;
    case '14':
        console.log("your age is 14");
        break;
    case '15':
        console.log("your age is 15");
        break;
    default:
        console.log("your age is unknown");

}

//Q3


let number = prompt("what is your number :");
number = Number.parseInt(number)//coversion of string to mumber

if (number % 2 == 0 && number % 3 == 0) {
    console.log("your number is divisible by 2 and 3");

}
else if (number % 2 == 0 || number % 3 == 0) {
    console.log("your number is divisible by 2 or 3");

} else (
    console.log("your number is not divisible by 2 and 3")
)


//Q4

let number1 = prompt("what is your number :");
number = Number.parseInt(number)//coversion of string to mumber

if (number % 2 == 0 && number % 3 == 0) {
    console.log("your number is divisible by 2 and 3");

}
else if (number % 2 == 0 || number % 3 == 0) {
    console.log("your number is divisible by 2 or 3");

} else (
    console.log("your number is not divisible by 2 and 3")
)


//Q5

let age2 = prompt("what is your age");
let a = age2 > 18 ? "You can drive" : "You cannot drive";//turnary operator
console.log(a);

