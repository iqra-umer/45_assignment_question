//21. They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.

import inquirer from "inquirer";

let objectContaningItem:{[key: string]: any} = {
 "potato": {
    name: "potato",
    price: 70,
    weight: "1kg"
},
"onion": {
    name: "onion",
    price: 500,
    weight: "2kg"
},
"tomato": {
    name: "tomato",
    price: 120,
    weight: "1kg"
},
}
console.log(objectContaningItem);

