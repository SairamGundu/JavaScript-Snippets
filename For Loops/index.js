//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//program to add first n natural numbers

let sum = 0;
let n = prompt("Please enter a number : ");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += (i + 1)
}
console.log("sum of first " + n + "natural numbers is " + sum);



let obj = {
    Harry: 10,
    Ron: 20,
    Hermione: 30,
    Sairam: 12
}

//for in

for (let a in obj)
    console.log("marks of a " + a + " is " + obj[a]);

//for of

for (let b of "Sairam")
    console.log(b);