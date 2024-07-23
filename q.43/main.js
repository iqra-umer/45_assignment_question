"use strict";
/*43. Unchanged Magicians:
Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name. */
let megician = ["David Copperfield", "Harry Houdini", "Criss Angel", "Dynamo"];
function copyarray(array) {
    return [...megician];
}
function make_great(megicianArray) {
    for (let i = 0; i < megicianArray.length; i++) {
        megicianArray[i] = 'The Great ' + megicianArray[i];
    }
}
function show_magicians(megicians) {
    megicians.forEach(megiciansName => {
        console.log(megiciansName);
    });
}
let copyMagicianArray = copyarray(megician);
make_great(copyMagicianArray);
console.log("This is my Original Array: ");
show_magicians(megician);
console.log("\n \nThis is my Modified Copy Array: ");
show_magicians(copyMagicianArray);
