# Programming Basics - Exam 1

-  Work in the `main` branch
-  Commit your changes to the `solution.js` file and push them to your repository
-  You are allowed to research online, but write your own code - don't use AI
-  You are not allowed to receive help from classmates or teachers to complete the tasks
-  You are allowed to ask the teacher or assistant teacher to clarify a task (within reason)
-  Follow the instructions below to complete the test
-  **Important**: make sure that the _names_ of your variables/functions match the names in the instructions below
-  All your functions should return a value
-  Good luck!


## Task 1 - Starts with Los or New?

Create a function named `startsWithLosOrNew`. 

The function takes a string in input and returns:

- `true`: if the string starts with `"Los"` or `"New"`
- `false`: in every other case
 
The function must be **case insensitive**.

For example:

```javascript
startsWithLosOrNew("New York"); // true
startsWithLosOrNew("newark"); // true 
startsWithLosOrNew("London"); // false
startsWithLosOrNew("Los Angeles"); // true
startsWithLosOrNew("lOs Angeles"); // true
startsWithLosOrNew("San Carlos"); // false
```

## Task 2 - isDivisibleBy100?

Create a function named `isDivisibleBy100`. 

The function takes an integer in input and returns: 

- `true`: if the integer is divisible by 100
- `false`: if the integer is **not** divisible by 100

For example:

```javascript
isDivisibleBy100(1); // false
isDivisibleBy100(1000); // true
isDivisibleBy100(100); // true
```

## Task 3 - What's the weather?

Use a **ternary operator** to complete this task. Create a function named `isRaining`. If passed `true`, return `"wet day - you need an umbrella"`. If passed `false`, return `"dry day - leave your umbrella at home"`.

### Example

```javascript
isRaining(true); // 'wet day - you need an umbrella'
```

## Task 4 - You've got the power

Create a function named `powerOf`.

The function takes an integer in input and returns the integer to the power of itself.


For example:

```javascript
// 2 to the power of 2
powerOf(2); // 4 

// 3 to the power of 3
powerOf(3); // 27

// 4 to the power of 4
powerOf(4); // 256

// 5 to the power of 5
powerOf(5); // 3125
```

## Task 5 - Range 

Create a function named `range`.

The function takes 2 numbers in input:

- `start`
- `end`
 
It returns an array containing a list of numbers that go from `start` to `end`

For example:

```javascript
range(5, 10); // [ 5, 6, 7, 8, 9, 10 ] 
range(10, 16); // [ 10, 11, 12, 13, 14, 15, 16 ] 
range(1, 6); // [ 1, 2, 3, 4, 5, 6 ] 
range(0, 3); // [ 0, 1, 2, 3 ] 
```


# Programming-Basics---Exam-1
