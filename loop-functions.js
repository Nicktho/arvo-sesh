const fruits = [
    'apple',
    'orange',
    'pear',
    'lemon'
];

const veggies = [
    'beans',
    'potato',
    'carrot',
    'brussel sprouts'
];

// function sayElement(list) {
//     for (let i = 0; i < list.length; i++) {
//         const element = list[i];
//         console.log('The element is', element);
//     }
// }

// function uppercaseElement(list) {
//     for (let i = 0; i < list.length; i++) {
//         const element = list[i];
//         console.log('The element in uppercase', element.toUpperCase());
//     }
// }

// function forEveryItemIn(list, fn) {
//     for (let i = 0; i < list.length; i++) {
//         const element = list[i];
//         fn(element);
//     }
// }

// forEveryItemIn(fruits, (element) => console.log('The element is', element));
// forEveryItemIn(fruits, (element) => {
//     console.log('The element in uppercase is', element.toUpperCase());
// });

fruits.forEach((element) => console.log('the element is ', element));


// sayElement(fruits);
// sayElement(veggies);
// uppercaseElement(fruits);
// uppercaseElement(veggies);

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     console.log('The fruit is', fruit);
// }

// for (let i = 0; i < veggies.length; i++) {
//     const veggie = veggies[i];
//     console.log('The veggie is', veggie);
// }

