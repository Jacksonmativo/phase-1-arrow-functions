// Function expression for division
const divide = function() {
    return 2000 / 100;
};

// Arrow function for squaring numbers
const square = x => x * x;

// Arrow function for addition
const add = (a, b) => a + b;

// Function expression for greeting
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function for greeting
const greetArrow = name => `Hello, ${name}!`;

// Function expression for addition
const addExpression = function(a, b) {
    return a + b;
};

// Arrow function for addition
const addArrow = (a, b) => a + b;

// Function expression for squaring numbers using map
const squareNumbers = function(numbers) {
    return numbers.map(function(num) {
        return num ** 2;
    });
};

// Arrow function for squaring numbers using map
const squareNumbersArrow = numbers => numbers.map(num => num ** 2);

// Example usage
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greetArrow("Bob")); // "Hello, Bob!"
console.log(add(5, 3)); // 8
console.log(addArrow(5, 3)); // 8
console.log(squareNumbers([1, 2, 3])); // [1, 4, 9]
console.log(squareNumbersArrow([1, 2, 3])); // [1, 4, 9]
