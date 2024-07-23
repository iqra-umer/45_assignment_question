"use strict";
let guestList = ["Tuba", "Namra", "Jaweriya"];
//print the name who cant make dinner
let unableAttend = guestList.splice(1, 1)[0];
console.log(`${unableAttend} not invited for dinner`);
//add new guest
guestList.push("mahrukh");
// print a message
guestList.forEach((guest) => console.log(`assalam o alaikum ${guest} you are invited to dinner`));
