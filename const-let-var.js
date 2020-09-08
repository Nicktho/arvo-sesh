// scope is the context and variables
// available to us at any point in our program

if (true) {
    let number = 7;
    number = 8;
    console.log('In if scope, number is', number);
}

sayNumber();
console.log('Outside if scope, number is', number);