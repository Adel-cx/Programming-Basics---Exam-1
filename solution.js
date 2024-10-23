// Task 1 - Starts with Los or New?
function startsWithLosOrNew(str) {
  return (
    str.toLowerCase().startsWith("los") || str.toLowerCase().startsWith("new")
  );
}

// Task 2 - isDivisibleBy100?
function isDivisibleBy100(num) {
  return num % 100 === 0;
}

// Task 3 - What's the weather?
function isRaining(isItRaining) {
  return isItRaining
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
}

// Task 4 - You've got the power
function powerOf(num) {
  return Math.pow(num, num);
}

// Task 5 - Range
function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// Testing the functions

// Task 1 Tests
console.log("Task 1 - Starts with Los or New?");
console.log(startsWithLosOrNew("New York")); // true
console.log(startsWithLosOrNew("newark")); // true
console.log(startsWithLosOrNew("London")); // false
console.log(startsWithLosOrNew("Los Angeles")); // true
console.log(startsWithLosOrNew("lOs Angeles")); // true
console.log(startsWithLosOrNew("San Carlos")); // false
console.log(""); // Empty line for spacing

// Task 2 Tests
console.log("Task 2 - isDivisibleBy100?");
console.log(isDivisibleBy100(1)); // false
console.log(isDivisibleBy100(1000)); // true
console.log(isDivisibleBy100(100)); // true
console.log(""); // Empty line for spacing

// Task 3 Tests
console.log("Task 3 - What's the weather?");
console.log(isRaining(true)); // 'wet day - you need an umbrella'
console.log(isRaining(false)); // 'dry day - leave your umbrella at home'
console.log(""); // Empty line for spacing

// Task 4 Tests
console.log("Task 4 - You've got the power");
console.log(powerOf(2)); // 4
console.log(powerOf(3)); // 27
console.log(powerOf(4)); // 256
console.log(powerOf(5)); // 3125
console.log(""); // Empty line for spacing

// Task 5 Tests
console.log("Task 5 - Range");
console.log(range(5, 10)); // [ 5, 6, 7, 8, 9, 10 ]
console.log(range(10, 16)); // [ 10, 11, 12, 13, 14, 15, 16 ]
console.log(range(1, 6)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(range(0, 3)); // [ 0, 1, 2, 3 ]
console.log(""); // Empty line for spacing
