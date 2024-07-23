/*29. Favorite Fruit: 
Make an array of your favorite fruits, and then write a series of independent if statements that 
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
is in your array, the if block should print a statement,
such as You really like bananas! */

let favorite_fruits: string[] = ["mango","banana","apple"]

if(favorite_fruits.includes("mango")){
    console.log("I REALLY LIKE MANGO");
}
if(favorite_fruits.includes("banana")){
    console.log("I REALLY LIKE BANANA");
}
if(favorite_fruits.includes("apple")){
    console.log("I REALLY LIKE APPLE");
}
if(favorite_fruits.includes("greeps")){
    console.log("I REALLY LIKE GREEPS");
}
if (favorite_fruits.includes("orange")) {
    console.log("I REALLY LIKE ORANGE");
}