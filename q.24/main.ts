/*24. More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an arra */

//1)string equality and inequality
let string1 = "hello"
let string2 = "world"
console.log(string1 === string2);
console.log(string1 !== string2);

//2)using lowercase function
let name: string = "IQRA"
let name1: string = "iqra"
let name2: string = name.toLowerCase();
console.log("lowercase", name2);

console.log(name === name1);
console.log(name1 === name2);

/*3) Numerical Comparisons: 
Perform equality and inequality checks on given numbers.
Include tests to check if one number is greater than, less than, greater than or equal to, and less than or equal to another.
At least one test should yield a True result and another should yield False.*/

let a: number = 10;
let b: number = 30;

console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

/*4) Logical Operators :
Test with logical "and" to ensure two conditions are both true.
Test with logical "or" to ensure at least one condition is true.
Ensure you have tests that return both True and False.*/

console.log(5 > 4 && 4 < 5);
console.log(5 > 4 || 4 > 5);

/*5) Checking Items in an Array: 
Given an array of items, test if a specific item is in the array.
Have one test that should return True and another that should return False.*/

let checkItems = ['biryani', 'sweet', 'drink']

console.log(checkItems.indexOf('biryani') !== -1);
console.log(checkItems.indexOf('chicken') !== -1);


/*Checking Items Not in an Array: 
Test if a specific item is not in a given array.
Include one test returning True and one returning False.*/

function isItemNotInArray<T>(item: T, array: T[]): boolean {
    return !array.includes(item);
}

// Test with an item not in the array
const array1: number[] = [1, 2, 3, 4, 5];
const item1: number = 6;
console.log(isItemNotInArray(item1, array1)); // Output: true

// Test with an item in the array
const array2: string[] = ["apple", "banana", "orange"];
const item2: string = "banana";
console.log(isItemNotInArray(item2, array2)); // Output: false
