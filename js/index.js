// let productPrice = 200 + 1; 
// alert(productPrice);
// productPrice = productPrice * 1.1;
// alert(productPrice);
// let userName = prompt('Enter your name');
let userAge = Number(prompt('ENter ypur age')); // приведення в Number
alert('Your age is ' + userAge);
const nextAge = add(userAge, 1);
alert('Next year you will be ' + nextAge); //string and 1
//arithmetic + - * / %(20%15 = 5)
// Boolean true and false
// if (userAge < 18) { // > < <= >= == === != !== && ||
//     alert("You are kid")
// }
// else { 
//     alert("You are adult")
// }

function add(a,b) {
    const sum = a + b;
    return sum;
}