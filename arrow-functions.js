// function sayHello() {
//     console.log('hello');
// }

// const sayHello = function () {
//     console.log('hello');
// };

const saySomething = (something) => {
    console.log(something);
};

// function add(x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// };

const add = (x, y) => x + y;

saySomething(add(1, 2));