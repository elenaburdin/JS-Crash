// Arrays - variable that hold multiple variables

const numbers = new Array(1, 2, 3, 4, 5); // constructor
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
// fruits.pop();
console.log(Array.isArray(fruits));      // to check if it's an Array
console.log(fruits.indexOf('oranges'));  // to check index
console.log(fruits);




